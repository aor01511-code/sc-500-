# Security Specification & Payload-First TDD (`userProgress`)

## 1. Data Invariants
1. **Default-Deny Baseline**: Every unspecified path in Firestore must be denied for both read and write (`match /{document=**} { allow read, write: if false; }`).
2. **Strict Ownership Isolation**: A user may only `get`, `create`, `update`, or `delete` `/userProgress/{userId}` if `request.auth != null`, `request.auth.token.email_verified == true`, `isValidId(userId)`, and `request.auth.uid == userId`. Cross-user `list` queries are completely forbidden (`allow list: if false;`).
3. **Identity Integrity**: `incoming().ownerId` must always equal `request.auth.uid`, and on update `incoming().ownerId == existing().ownerId`.
4. **Temporal Integrity**: `createdAt` must equal `request.time` on create and remain immutable (`incoming().createdAt == existing().createdAt`) on update. `updatedAt` must equal `request.time` on both create and update.
5. **Strict Key & Type Enforcement**: Every document must have exact required/allowed keys (`ownerId`, `studyRound`, `lang`, `userRecords`, `questionStats`, `bookmarkedIds`, `roundHistory`, `createdAt`, `updatedAt`) with bounded types and sizes to prevent shadow fields and Denial-of-Wallet payload poisoning.

## 2. The "Dirty Dozen" Attack Payloads (Must All Return PERMISSION_DENIED)
1. **Unauthenticated Read/Write**: `request.auth == null` reading or writing `/userProgress/userA`.
2. **Unverified Email Spoof**: `request.auth.uid == 'userA'` with `request.auth.token.email_verified == false`.
3. **Cross-User Read**: Authenticated `userB` attempting `get(/userProgress/userA)`.
4. **Collection Scraping (List)**: Any user attempting `list(/userProgress)`.
5. **Identity Spoofing on Create**: `userA` writing `/userProgress/userA` with `ownerId: "userB"`.
6. **Owner Immutability Bypass on Update**: `userA` updating `/userProgress/userA` changing `ownerId` to `"userB"`.
7. **Shadow / Ghost Field Injection**: `userA` writing `/userProgress/userA` with an extra field `{ isAdmin: true }`.
8. **Invalid Document ID Poisoning**: Attempting to access `/userProgress/userA$invalid!id` or an ID > 128 chars.
9. **Client-Forged Timestamp on Create**: Writing `createdAt: Timestamp(2020-01-01)` instead of `request.time`.
10. **CreatedAt Mutation on Update**: Updating `/userProgress/userA` with a new `createdAt` value.
11. **Type/Boundary Violation (studyRound / lang)**: Writing `studyRound: 0` or `studyRound: "1"` or `lang: "fr"`.
12. **Unbounded Array / Map Poisoning**: Writing `bookmarkedIds` with > 2000 entries or non-string first element `[123]`, or `roundHistory` with non-map element `["bad"]`.
