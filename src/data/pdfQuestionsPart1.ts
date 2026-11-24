import {
  CONTOSO_CASE_STUDY_EN,
  CONTOSO_CASE_STUDY_JA,
  FABRIKAM_CASE_STUDY_EN,
  FABRIKAM_CASE_STUDY_JA,
  PdfQuestionSeed,
} from './pdfCaseStudies';

export const PDF_QUESTIONS_PART1: PdfQuestionSeed[] = [
  {
    id: 'pdf-q1',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Contoso: PIM による AI Administrator ロール要求の承認者と最大アクティブ期間',
    titleEn: 'Contoso: PIM Approvers and Maximum Activation Duration for AI Administrator',
    scenarioJa: `${CONTOSO_CASE_STUDY_JA}

User1 は AI Administrator ロールの使用を要求しました。`,
    scenarioEn: `${CONTOSO_CASE_STUDY_EN}

User1 has requested to use the AI Administrator role.`,
    questionJa: '要求を承認できる承認者と、ロールの承認後に User1 が AI 管理者となる最長期間の組み合わせを1つ選んでください。',
    questionEn: 'Which combination identifies the approvers who can approve the request and the maximum duration for which User1 will be an AI Administrator after approval?',
    options: [
      {
        id: 'A',
        textJa: '承認者：Admin2 と Admin3 のみ、最大アクティブ期間：15 days',
        textEn: 'Approvers: Admin2 and Admin3 only / Max active duration: 15 days',
        isCorrect: false,
        explanationJa: '【不正解】Admin2 (AI Administrator) は既定の承認者ではなく、Admin1 (Global Administrator) が抜けています。また 15 days は直接のアクティブ割り当て上限であり、要求によるアクティブ化には 1 day が適用されます。',
        explanationEn: 'Admin2 (AI Administrator) is not a default approver and Admin1 (Global Administrator) is omitted. Also, 15 days applies to active assignments, not eligible role activation (1 day).',
      },
      {
        id: 'B',
        textJa: '承認者：Admin1 と Admin2 のみ、最大アクティブ期間：1 day',
        textEn: 'Approvers: Admin1 and Admin2 only / Max active duration: 1 day',
        isCorrect: false,
        explanationJa: '【不正解】最大期間 1 day は正しいですが、Approvers が None の場合の既定の承認者は Global Administrator と Privileged Role Administrator (Admin1 と Admin3) であり、Admin2 は含まれません。',
        explanationEn: 'While 1 day is correct, when Approvers is None, default approvers are Global Administrators and Privileged Role Administrators (Admin1 and Admin3), not Admin2.',
      },
      {
        id: 'C',
        textJa: '承認者：Admin1 と Admin3 のみ、最大アクティブ期間：1 day',
        textEn: 'Approvers: Admin1 and Admin3 only / Max active duration: 1 day',
        isCorrect: true,
        explanationJa: '【正解】Approvers が None で承認必須の場合、Global Administrator (Admin1) と Privileged Role Administrator (Admin3) が既定の承認者となります。また、有資格ロールのアクティブ化最大期間 (Activation maximum duration) は 1 Day です。',
        explanationEn: 'When approval is required and Approvers is set to None, Global Administrators (Admin1) and Privileged Role Administrators (Admin3) are the default approvers. The activation maximum duration is 1 day.',
      },
      {
        id: 'D',
        textJa: '承認者：Admin3 のみ設定、最大アクティブ期間：1 month',
        textEn: 'Approvers: Admin3 exclusively / Max active duration: 1 month',
        isCorrect: false,
        explanationJa: '【不正解】Global Administrator の Admin1 も承認できます。また 1 month は対象となる割り当て (eligible assignment) の有効期限であり、1回のアクティブ化期間ではありません。',
        explanationEn: 'Admin1 (Global Administrator) can also approve. Furthermore, 1 month is the expiration for eligible assignments, not the activation duration.',
      },
      {
        id: 'E',
        textJa: '承認者：Admin1、Admin2、Admin3、最大アクティブ期間：1 month',
        textEn: 'Approvers: Admin1, Admin2, and Admin3 / Max active duration: 1 month',
        isCorrect: false,
        explanationJa: '【不正解】Admin2 には既定の承認権限がありません。また 1 month は有資格割り当ての有効期限です。',
        explanationEn: 'Admin2 does not have default approval rights, and 1 month is the eligible assignment expiration.',
      },
      {
        id: 'F',
        textJa: '承認者：Admin1 のみ設定、最大アクティブ期間：15 days',
        textEn: 'Approvers: Admin1 exclusively / Max active duration: 15 days',
        isCorrect: false,
        explanationJa: '【不正解】Privileged Role Administrator の Admin3 も既定の承認者です。15 days は直接のアクティブ割り当て期限です。',
        explanationEn: 'Admin3 (Privileged Role Administrator) is also a default approver, and 15 days applies to direct active assignments.',
      },
    ],
    overallExplanationJa: 'PIM で Microsoft Entra ロールのアクティブ化に承認を必須にし「Approvers: None」とした場合、Global Administrator と Privileged Role Administrator が既定の承認者になります。承認後にユーザーがロールをアクティブ化できる連続期間は「Activation maximum duration」の 1 Day です（15 Days は直接のアクティブ割り当て、1 Month は有資格割り当て自体の期限）。',
    overallExplanationEn: 'In Microsoft Entra PIM, if approval is required and no specific approvers are configured (None), Global Administrators and Privileged Role Administrators act as default approvers. Eligible activation lasts up to Activation maximum duration (1 day).',
    keyPointsJa: [
      'Approvers が None の場合の既定の承認者は Global Administrator と Privileged Role Administrator',
      'Activation maximum duration は1回のアクティブ化で権限を維持できる最大時間',
      'Expire active/eligible assignments after は割り当て自体の存続期限であり混同しない',
    ],
    keyPointsEn: [
      'Default approvers when Approvers=None: Global Admin + Privileged Role Admin',
      'Activation maximum duration controls how long an eligible activation remains active',
      'Distinguish activation duration from assignment expiration settings',
    ],
    referenceTopic: 'Microsoft Entra PIM ロール設定と既定の承認者',
  },
  {
    id: 'pdf-q2',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Contoso: PIM ロール設定 (承認要否・承認者・直接アクティブ割り当て) の評価',
    titleEn: 'Contoso: Evaluating PIM Approval Rules and Direct Active Assignments',
    scenarioJa: `${CONTOSO_CASE_STUDY_JA}

次の記述について評価してください。
・記述1：Admin1 は、Agent ID Developer ロールの要求を承認しなければならない。
・記述2：Admin2 は、AI Administrator ロールの要求を承認できる。
・記述3：Admin3 は、User1 に Agent ID Developer ロールの2日間のアクティブな割り当てを行うことができる。`,
    scenarioEn: `${CONTOSO_CASE_STUDY_EN}

Evaluate the following statements:
- Statement 1: Admin1 must approve requests for the Agent ID Developer role.
- Statement 2: Admin2 can approve requests for the AI Administrator role.
- Statement 3: Admin3 can assign User1 an active assignment to the Agent ID Developer role for two days.`,
    questionJa: '各記述が正しい場合は「はい」、そうでない場合は「いいえ」とするとき、記述1～3の正しい組み合わせを1つ選んでください。',
    questionEn: 'Which combination correctly identifies Yes or No for Statements 1, 2, and 3?',
    options: [
      {
        id: 'A',
        textJa: '記述1：いいえ、記述2：いいえ、記述3：いいえ',
        textEn: 'Statement 1: No, Statement 2: No, Statement 3: No',
        isCorrect: false,
        explanationJa: '【不正解】記述1と2は「いいえ」で正しいですが、Admin3 (Privileged Role Administrator) は Expire active assignments after の上限 (15 days) 以内である2日間の直接のアクティブ割り当てを作成できるため、記述3は「はい」です。',
        explanationEn: 'Statements 1 and 2 are No, but Admin3 (Privileged Role Administrator) can create a 2-day direct active assignment within the 15-day maximum active assignment limit, making Statement 3 Yes.',
      },
      {
        id: 'B',
        textJa: '記述1：はい、記述2：いいえ、記述3：はい',
        textEn: 'Statement 1: Yes, Statement 2: No, Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】Agent ID Developer ロールは Require approval to activate が Disabled になっているため、Admin1 の承認は不要です（記述1は「いいえ」）。',
        explanationEn: 'Require approval to activate is Disabled for Agent ID Developer, so Admin1 does not need to approve requests (Statement 1 is No).',
      },
      {
        id: 'C',
        textJa: '記述1：いいえ、記述2：いいえ、記述3：はい',
        textEn: 'Statement 1: No, Statement 2: No, Statement 3: Yes',
        isCorrect: true,
        explanationJa: '【正解】記述1：Agent ID Developer は承認不要 (Disabled) のため「いいえ」。記述2：Admin2 (AI Administrator) は既定の承認者ではないため「いいえ」。記述3：特権ロール管理者の Admin3 は上限 15 日以内の 2 日間アクティブ割り当てを行えるため「はい」。',
        explanationEn: 'Statement 1: No (approval disabled). Statement 2: No (AI Admin is not a default approver). Statement 3: Yes (Privileged Role Admin can assign a 2-day active assignment within the 15-day limit).',
      },
      {
        id: 'D',
        textJa: '記述1：はい、記述2：はい、記述3：はい',
        textEn: 'Statement 1: Yes, Statement 2: Yes, Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】Agent ID Developer に承認は不要であり、AI Administrator である Admin2 にも既定の承認権限はありません。',
        explanationEn: 'Approval is disabled for Agent ID Developer, and Admin2 lacks default approval rights.',
      },
      {
        id: 'E',
        textJa: '記述1：いいえ、記述2：はい、記述3：いいえ',
        textEn: 'Statement 1: No, Statement 2: Yes, Statement 3: No',
        isCorrect: false,
        explanationJa: '【不正解】記述2と3の判定が逆です。Admin2 に承認権限はなく、Admin3 は2日間の直接アクティブ割り当てを作成できます。',
        explanationEn: 'Statements 2 and 3 are reversed. Admin2 cannot approve, whereas Admin3 can create the 2-day active assignment.',
      },
      {
        id: 'F',
        textJa: '記述1：はい、記述2：はい、記述3：いいえ',
        textEn: 'Statement 1: Yes, Statement 2: Yes, Statement 3: No',
        isCorrect: false,
        explanationJa: '【不正解】承認要否・承認者・直接割り当ての期間上限の3点とも誤って判定しています。',
        explanationEn: 'All three statements are evaluated inversely to the PIM configuration.',
      },
    ],
    overallExplanationJa: 'PIM ではロールごとに設定が独立しています。Agent ID Developer は承認が Disabled なので承認不要です。AI Administrator の Approvers が None の場合の既定承認者は Global Admin と Privileged Role Admin のみで、AI Admin 本人(Admin2)は承認できません。また、Privileged Role Administrator (Admin3) は、直接のアクティブ割り当て上限 (15 days) の範囲内で 2 日間のアクティブ割り当てを行えます。',
    overallExplanationEn: 'PIM settings apply per role. Agent ID Developer has approval disabled (Statement 1: No). Admin2 is not a default approver for AI Administrator (Statement 2: No). Admin3 can create a 2-day active assignment because it is within the 15-day Expire active assignments after limit (Statement 3: Yes).',
    keyPointsJa: [
      'Require approval to activate が Disabled の場合は承認不要',
      'AI Administrator 自身のロール保有者には既定の承認権限はない',
      '直接のアクティブ割り当て期間の上限は Expire active assignments after (15 days) で決まる',
    ],
    keyPointsEn: [
      'No approval needed when Require approval to activate is Disabled',
      'Holding AI Administrator does not grant PIM approval rights',
      'Direct active assignment duration is governed by Expire active assignments after',
    ],
    referenceTopic: 'Microsoft Entra PIM のアクティブ化とアクティブ割り当ての違い',
  },
  {
    id: 'pdf-q3',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Database 論理サーバーでの SQL 認証の一元的な禁止',
    titleEn: 'Enforcing Microsoft Entra-Only Authentication on Azure SQL Logical Server',
    scenarioJa: `Azure SQL Database の論理サーバー Server1 があり、DB1 という名前のデータベースが含まれています。
Server1 の認証を、次の要件を満たすように構成する必要があります。
・Server1 上のどのデータベースでも SQL 認証を使用できません。
・ソリューションはサーバー レベルで一元的に適用する必要があります。`,
    scenarioEn: `You have an Azure SQL Database logical server named Server1 that contains a database named DB1.
You need to configure authentication for Server1 to meet the following requirements:
- SQL authentication cannot be used on any database on Server1.
- The solution must be applied centrally at the server level.`,
    questionJa: '行うべき操作を1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Server1 に Microsoft Entra 管理者を構成する。',
        textEn: 'Configure a Microsoft Entra administrator on Server1.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Entra 管理者を設定するだけでは Entra 認証が利用可能になるだけで、既存の SQL 認証は無効になりません。',
        explanationEn: 'Configuring a Microsoft Entra admin enables Entra authentication, but does not disable SQL authentication.',
      },
      {
        id: 'B',
        textJa: 'Server1 でシステム割り当てマネージド ID を有効にする。',
        textEn: 'Enable a system-assigned managed identity on Server1.',
        isCorrect: false,
        explanationJa: '【不正解】論理サーバーのマネージド ID はサーバー自身が他の Azure リソースへ認証するためのものであり、クライアントの SQL 認証を禁止しません。',
        explanationEn: 'A managed identity is used by Server1 to authenticate to other Azure resources, not to restrict client SQL authentication.',
      },
      {
        id: 'C',
        textJa: 'Server1 で Microsoft Entra 専用認証を有効にする。',
        textEn: 'Enable Microsoft Entra-only authentication on Server1.',
        isCorrect: true,
        explanationJa: '【正解】論理サーバーで Microsoft Entra 専用認証 (Microsoft Entra-only authentication) を有効にすると、サーバー全体および配下のすべてのデータベースで SQL 認証によるログインが完全に禁止されます。',
        explanationEn: 'Enabling Microsoft Entra-only authentication on Server1 centrally disables SQL authentication across the server and all its databases.',
      },
      {
        id: 'D',
        textJa: 'Server1 上の DB1 から SQL ログインを個別に削除する。',
        textEn: 'Delete all existing SQL authentication logins on DB1.',
        isCorrect: false,
        explanationJa: '【不正解】SQL ログインは master DB で管理されるため、DB1 の操作だけではサーバー全体の新規・既存データベースの SQL 認証を一元的に禁止できません。',
        explanationEn: 'Deleting individual users/logins is not a centralized server-level policy blocking SQL authentication for all databases.',
      },
    ],
    overallExplanationJa: 'Azure SQL Database 論理サーバーは既定では SQL 認証と Microsoft Entra 認証の併用が可能です。すべてのデータベースに対してサーバー レベルで一元的に SQL 認証をブロックするには、「Microsoft Entra 専用認証 (Microsoft Entra-only authentication)」を有効にします。',
    overallExplanationEn: 'By default, Azure SQL logical servers allow both SQL and Microsoft Entra authentication. To centrally disable SQL authentication for all databases at the server level, enable Microsoft Entra-only authentication.',
    keyPointsJa: [
      'Microsoft Entra 管理者の構成だけでは SQL 認証は停止しない',
      'Microsoft Entra 専用認証によりサーバー全体の SQL 認証を一元的にブロック可能',
    ],
    keyPointsEn: [
      'Setting an Entra admin alone leaves SQL auth active',
      'Entra-only authentication disables SQL auth centrally at the server level',
    ],
    referenceTopic: 'Azure SQL Database の Microsoft Entra 専用認証',
  },
  {
    id: 'pdf-q4',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'ユーザー同意無効テナントでの委任されたアクセス許可の事前承認',
    titleEn: 'Granting Admin Consent for Delegated Graph Permissions Without User Consent',
    scenarioJa: `次の構成の Microsoft Entra テナントがあります。
・アプリケーションに対するユーザーの同意は無効になっています。
・アプリケーションにアクセス許可を付与できるのは管理者だけです。

Microsoft Graph の委任されたアクセス許可を使用する App1 という名前のアプリケーションを登録します。
次の要件を満たすように App1 を構成する必要があります。
・対話型の同意プロンプトなしでユーザーがサインインできるようにする。
・App1 がサインインしたユーザーの代理として Microsoft Graph にアクセスできるようにする。`,
    scenarioEn: `You have a Microsoft Entra tenant with the following configuration:
- User consent to applications is disabled.
- Only administrators can grant permissions to applications.

You register an application named App1 that uses Microsoft Graph delegated permissions.
You need to configure App1 to meet the following requirements:
- Allow users to sign in without receiving an interactive consent prompt.
- Allow App1 to access Microsoft Graph on behalf of the signed-in user.`,
    questionJa: '何をすべきですか。1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'エンタープライズ アプリでユーザーの割り当てを必須にし、割り当てる。',
        textEn: 'Require user assignment for App1 and assign the target users.',
        isCorrect: false,
        explanationJa: '【不正解】ユーザーの割り当てはアプリへのアクセス対象者を絞る設定であり、Microsoft Graph のアクセス許可への同意は付与されません。',
        explanationEn: 'User assignment restricts who can access the app, but does not grant consent for Microsoft Graph API permissions.',
      },
      {
        id: 'B',
        textJa: '委任されたアクセス許可をアプリケーションのアクセス許可に変更する。',
        textEn: 'Switch App1 from delegated permissions to application permissions.',
        isCorrect: false,
        explanationJa: '【不正解】アプリケーションのアクセス許可はサインインしたユーザーなし（アプリ自身の ID）で動作するため、「ユーザーの代理としてアクセスする」要件に反します。',
        explanationEn: 'Application permissions act without a signed-in user, violating the requirement to access Microsoft Graph on behalf of the signed-in user.',
      },
      {
        id: 'C',
        textJa: '必要な委任されたアクセス許可を追加し、サインイン時のユーザー同意を待つ。',
        textEn: 'Add the delegated permissions and rely on user consent at sign-in.',
        isCorrect: false,
        explanationJa: '【不正解】テナントでユーザー同意が無効化されているため、ユーザーはサインイン時に同意できずブロックされます。',
        explanationEn: 'User consent is disabled in the tenant, so users cannot consent interactively at sign-in.',
      },
      {
        id: 'D',
        textJa: '必要な委任されたアクセス許可について、App1 に管理者の同意を付与する。',
        textEn: 'Grant admin consent to App1 for the required delegated permissions.',
        isCorrect: true,
        explanationJa: '【正解】委任されたアクセス許可のまま管理者の同意 (Admin consent) を付与することで、ユーザーの同意プロンプトを表示せずに、サインインしたユーザーの代理として Graph にアクセスできるようになります。',
        explanationEn: 'Granting admin consent for the delegated permissions satisfies the tenant policy, removes interactive consent prompts for users, and preserves delegated on-behalf-of access.',
      },
    ],
    overallExplanationJa: 'ユーザーによるアプリへの同意が無効なテナントでも、管理者が委任されたアクセス許可に対して事前に「管理者の同意 (Grant admin consent)」を付与すれば、サインイン時の同意プロンプトなしでユーザーはサインインでき、アプリは引き続きサインインしたユーザーの代理として動作します。',
    overallExplanationEn: 'When user consent is disabled, granting admin consent on delegated permissions pre-authorizes the permissions tenant-wide without switching to application permissions, eliminating user consent prompts.',
    keyPointsJa: [
      '「ユーザーの代理」は委任されたアクセス許可 (Delegated permissions) を維持する',
      '管理者の同意を付与することで、ユーザー同意無効環境でも同意プロンプトを回避できる',
    ],
    keyPointsEn: [
      'Delegated permissions are required to act on behalf of a signed-in user',
      'Admin consent suppresses user consent prompts when user consent is disabled',
    ],
    referenceTopic: 'Microsoft Entra ID の委任されたアクセス許可と管理者の同意',
  },
  {
    id: 'pdf-q5',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    requiredSelections: 2,
    titleJa: 'PIM による AI 管理者ロールの承認要件と自動失効の構成',
    titleEn: 'Configuring Approval and Automatic Deactivation for AI Administrator in PIM',
    scenarioJa: `Microsoft Entra テナントがあり、Microsoft Entra Privileged Identity Management (PIM) を使用しています。
次の要件を満たすため、AI 管理者 (AI Administrator) ロールの設定を変更する必要があります。
・昇格されたアクセス権は、付与される前に別の管理者によって評価される必要があります。
・特権アクセスは、一定期間後に自動的に削除される必要があります。`,
    scenarioEn: `You have a Microsoft Entra tenant that uses Microsoft Entra Privileged Identity Management (PIM).
You need to modify the settings for the AI Administrator role to meet the following requirements:
- Elevated access must be evaluated by another administrator before being granted.
- Privileged access must be removed automatically after a set period.`,
    questionJa: '構成する必要がある設定を2つ選んでください。',
    questionEn: 'Which two settings should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'アクティブ割り当て期限 (Expire active assignments after)',
        textEn: 'Expire active assignments after',
        isCorrect: false,
        explanationJa: '【不正解】これは管理者が直接付与するアクティブな割り当ての有効期限であり、有資格ロールを承認・昇格させた1回のアクティブ化期間を制御するものではありません。',
        explanationEn: 'This controls direct active assignments, not the duration of an approved eligible role activation.',
      },
      {
        id: 'B',
        textJa: 'アクティブ化に承認を要求する (Require approval to activate)',
        textEn: 'Require approval to activate',
        isCorrect: true,
        explanationJa: '【正解】有効化すると、有資格ユーザーがロールをアクティブ化する前に、指定された承認者による評価・承認が必須になります。',
        explanationEn: 'Enabling Require approval to activate ensures another administrator evaluates and approves the request before elevated access is granted.',
      },
      {
        id: 'C',
        textJa: 'アクティブ化の理由必須 (Require justification on activation)',
        textEn: 'Require justification on activation',
        isCorrect: false,
        explanationJa: '【不正解】理由の入力を必須にするだけでは監査記録は残りますが、別の管理者による事前評価・承認は行われません。',
        explanationEn: 'Requiring justification only logs a user-entered reason; it does not enforce evaluation by another administrator.',
      },
      {
        id: 'D',
        textJa: '有資格割り当ての期限 (Expire eligible assignments after)',
        textEn: 'Expire eligible assignments after',
        isCorrect: false,
        explanationJa: '【不正解】有資格割り当ての期限であり、1回のアクティブ化後の自動終了時間ではありません。',
        explanationEn: 'This governs when eligibility expires, not when an active elevated session ends automatically.',
      },
      {
        id: 'E',
        textJa: 'アクティブ化の最大期間 (Activation maximum duration)',
        textEn: 'Activation maximum duration',
        isCorrect: true,
        explanationJa: '【正解】1回のアクティブ化で昇格された権限を使用できる最長時間を設定し、時間経過後に自動的に権限を非アクティブ化 (削除) します。',
        explanationEn: 'Activation maximum duration defines how long an activated role remains active before being automatically removed.',
      },
    ],
    overallExplanationJa: 'PIM で有資格ロールのアクティブ化フローを制御する場合、「付与前の別管理者による評価」には「Require approval to activate (アクティブ化に承認を要求する)」、「昇格後の一定期間での自動終了」には「Activation maximum duration (アクティブ化の最大期間)」を構成します。',
    overallExplanationEn: 'To require pre-elevation approval and time-bound automatic removal of elevated access in PIM, configure "Require approval to activate" and "Activation maximum duration".',
    keyPointsJa: [
      '昇格前の審査は「Require approval to activate」',
      '昇格後の自動失効時間は「Activation maximum duration」',
    ],
    keyPointsEn: [
      'Use Require approval to activate for pre-grant administrator evaluation',
      'Use Activation maximum duration for automatic time-bound removal',
    ],
    referenceTopic: 'Microsoft Entra PIM のアクティブ化設定',
  },
  {
    id: 'pdf-q6',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'グローバル管理者による Azure サブスクリプションのアクセス権回復',
    titleEn: 'Elevating Global Administrator Access to Manage Azure Subscription Roles',
    scenarioJa: `MG1 と MG2 という名前の2つの管理グループがあり、それぞれに複数の Azure サブスクリプションが含まれています。これらのサブスクリプションは Microsoft Entra テナントにリンクされています。
User1 という名前のユーザーと、Admin1 という名前のグローバル管理者がいます。
User1 が MG2 管理グループの下に Sub1 という名前の Azure サブスクリプションを作成し、そのサブスクリプションの唯一の所有者であると知らされました。
Admin1 が Sub1 に対する User1 の所有者ロールを削除できるようにする必要があります。`,
    scenarioEn: `You have two management groups named MG1 and MG2 that each contain multiple Azure subscriptions linked to a Microsoft Entra tenant.
You have a user named User1 and a Global Administrator named Admin1.
You discover that User1 created an Azure subscription named Sub1 under MG2 and is the sole Owner of Sub1.
You need to ensure that Admin1 can remove the Owner role from User1 for Sub1.`,
    questionJa: '最初に何をすべきですか。1つ選んでください。',
    questionEn: 'What should you do first?',
    options: [
      {
        id: 'A',
        textJa: 'Admin1 に、Sub1 を MG2 から MG1 管理グループへ移動するよう指示する。',
        textEn: 'Instruct Admin1 to move Sub1 from MG2 into the MG1 management group.',
        isCorrect: false,
        explanationJa: '【不正解】管理グループ間の移動には対象への権限が必要であり、Admin1 に権限がない状態では最初の回復手順になりません。',
        explanationEn: 'Moving subscriptions requires existing RBAC permissions and does not grant Admin1 root access.',
      },
      {
        id: 'B',
        textJa: 'Admin1 に Sub1 のユーザー アクセス管理者ロールを割り当てる。',
        textEn: 'Assign the User Access Administrator role for Sub1 to Admin1.',
        isCorrect: false,
        explanationJa: '【不正解】ロールを割り当てる側にも Sub1 へのアクセス管理権限が必要ですが、現状では User1 しか所有者権限を持っていません。',
        explanationEn: 'Assigning RBAC roles on Sub1 requires existing access permissions on Sub1, which Admin1 does not yet have.',
      },
      {
        id: 'C',
        textJa: 'Admin1 に PIM でセキュリティ管理者ロールを要求するよう指示する。',
        textEn: 'Instruct Admin1 to request the Security Administrator role via PIM.',
        isCorrect: false,
        explanationJa: '【不正解】Entra の Security Administrator ロールには Azure RBAC のロール割り当てを削除する権限はありません。',
        explanationEn: 'The Microsoft Entra Security Administrator role does not grant Azure RBAC permissions to delete role assignments.',
      },
      {
        id: 'D',
        textJa: 'Admin1 に Azure リソースのアクセス管理を有効にするよう指示する。',
        textEn: 'Instruct Admin1 to enable Access management for Azure resources.',
        isCorrect: true,
        explanationJa: '【正解】グローバル管理者が Microsoft Entra ID のプロパティで「Azure リソースのアクセス管理 (Access management for Azure resources)」を「はい」にすると、ルート スコープ (/) で User Access Administrator に昇格し、Sub1 の所有者割り当てを管理できるようになります。',
        explanationEn: 'Enabling "Access management for Azure resources" elevates a Global Administrator to User Access Administrator at root scope (/), allowing them to manage RBAC on Sub1.',
      },
    ],
    overallExplanationJa: 'Microsoft Entra ID のグローバル管理者であっても、既定では配下の Azure サブスクリプションの RBAC 権限を持ちません。サブスクリプションのアクセス権を回復するには、グローバル管理者が「Azure リソースのアクセス管理」を有効化してルートスコープ (/) のユーザー アクセス管理者権限に昇格し、その後に必要なロール変更を行います。',
    overallExplanationEn: 'Global Administrators do not automatically have Azure RBAC access. Enabling "Access management for Azure resources" grants User Access Administrator at the root scope (/) so the Global Admin can remove or adjust subscription role assignments.',
    keyPointsJa: [
      'Entra Global Administrator と Azure RBAC 所有者は別のアクセス管理体系',
      '「Azure リソースのアクセス管理」有効化によりルートスコープ (/) のユーザー アクセス管理者を取得',
    ],
    keyPointsEn: [
      'Entra Global Admin does not automatically imply Azure RBAC ownership',
      'Access management for Azure resources grants root-scope User Access Administrator',
    ],
    referenceTopic: 'グローバル管理者の Azure リソースへのアクセス権昇格',
  },
  {
    id: 'pdf-q7',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '管理グループ スコープへの Azure Policy 割り当てと特定リソース グループの除外',
    titleEn: 'Assigning Azure Policy at Management Group Scope with Resource Group Exclusion',
    scenarioJa: `MG1 という名前の管理グループがあり、Sub1 と Sub2 という名前の2つのサブスクリプションが含まれています。Sub1 には、RG-Exception という名前のリソース グループと、Microsoft Foundry のリソースをホストする RG1 という名前のリソース グループがあります。
MG1 内の Foundry の新規デプロイでプライベート エンドポイントを使用するよう強制するため、Azure ポリシーを割り当てる必要があります。
このソリューションでは、RG-Exception 内でのデプロイを制限してはなりません。`,
    scenarioEn: `You have a management group named MG1 that contains two subscriptions named Sub1 and Sub2. Sub1 contains a resource group named RG-Exception and a resource group named RG1 that hosts Microsoft Foundry resources.
You need to assign an Azure policy to enforce the use of private endpoints for new Foundry deployments in MG1.
The solution must not restrict deployments in RG-Exception.`,
    questionJa: 'ポリシーの構成として正しいものを1つ選んでください。',
    questionEn: 'How should you configure the policy assignment?',
    options: [
      {
        id: 'A',
        textJa: 'ポリシーを MG1 に割り当て、RG-Exception を除外する。',
        textEn: 'Assign the policy to MG1 and exclude RG-Exception.',
        isCorrect: true,
        explanationJa: '【正解】MG1 スコープに割り当てることで Sub1 と Sub2 の両方に継承適用しつつ、除外スコープ (Exclusions / notScopes) に RG-Exception を指定することで例外を実現できます。',
        explanationEn: 'Assigning at MG1 covers both Sub1 and Sub2, and specifying RG-Exception in Exclusions (notScopes) prevents restricting deployments there.',
      },
      {
        id: 'B',
        textJa: 'ポリシーを Sub1 と RG-Exception に割り当てる。',
        textEn: 'Assign the policy to Sub1 and RG-Exception.',
        isCorrect: false,
        explanationJa: '【不正解】Sub2 に適用されず、また RG-Exception への割り当ては除外ではなく適用になってしまいます。',
        explanationEn: 'This misses Sub2, and assigning to RG-Exception enforces the policy rather than excluding it.',
      },
      {
        id: 'C',
        textJa: 'ポリシーを MG1 と RG-Exception に割り当てる。',
        textEn: 'Assign the policy to MG1 and RG-Exception.',
        isCorrect: false,
        explanationJa: '【不正解】子スコープに割り当てを追加しても親からの継承制限は解除されません。親の割り当ての Exclusions で除外する必要があります。',
        explanationEn: 'Adding a separate assignment on RG-Exception does not override the inherited assignment from MG1; you must use Exclusions.',
      },
      {
        id: 'D',
        textJa: 'ポリシーを Sub1 に割り当て、RG-Exception を除外する。',
        textEn: 'Assign the policy to Sub1 and exclude RG-Exception.',
        isCorrect: false,
        explanationJa: '【不正解】Sub1 のみに割り当てると、MG1 内の Sub2 にポリシーが適用されません。',
        explanationEn: 'Assigning only to Sub1 leaves Sub2 inside MG1 uncovered.',
      },
    ],
    overallExplanationJa: '複数のサブスクリプションを含む管理グループ (MG1) 全体に統制を効かせつつ、配下の特定リソース グループ (RG-Exception) のみ対象外とする場合、共通の親スコープ (MG1) にポリシーを割り当て、割り当てプロパティの除外スコープ (notScopes / Exclusions) に RG-Exception を登録します。',
    overallExplanationEn: 'Assign the policy at the parent management group (MG1) to cover all child subscriptions, and configure RG-Exception as an exclusion (notScopes) on that assignment.',
    keyPointsJa: [
      '複数サブスクリプションへの一括適用には管理グループ スコープを使用する',
      '例外スコープは子スコープへの別割り当てではなく、親割り当ての「除外 (Exclusions)」で指定する',
    ],
    keyPointsEn: [
      'Assign policies to the parent management group to cover multiple subscriptions',
      'Use Exclusions (notScopes) on the parent assignment for exceptions',
    ],
    referenceTopic: 'Azure Policy のスコープ継承と除外 (Exclusions)',
  },
  {
    id: 'pdf-q8',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'App Service から Key Vault シークレットへの資格情報なしアクセス',
    titleEn: 'Accessing Key Vault Secrets from App Service Without Stored Credentials',
    scenarioJa: `ロールベースのアクセス制御 (RBAC) による認可を使用する、KV1 という名前の Azure Key Vault があります。KV1 には、App1 という名前の Azure App Service の Web アプリ用のデータベース接続文字列が格納されています。
KV1 でファイアウォールを有効にし、App1 が存在する仮想ネットワークからのみ KV1 へのアクセスを許可します。
アプリケーション構成に保存された資格情報を使わずに、App1 が KV1 からシークレットを取得できるようにする必要があります。`,
    scenarioEn: `You have an Azure Key Vault named KV1 that uses Azure RBAC for authorization. KV1 stores a database connection string for an Azure App Service web app named App1.
You enable the firewall on KV1 and allow access only from the virtual network where App1 resides.
You need to ensure that App1 can retrieve secrets from KV1 without using credentials stored in the application configuration.`,
    questionJa: '何を作成すべきですか。1つ選んでください。',
    questionEn: 'What should you create?',
    options: [
      {
        id: 'A',
        textJa: 'KV1 のアクセス ポリシー',
        textEn: 'An access policy on KV1',
        isCorrect: false,
        explanationJa: '【不正解】KV1 は Azure RBAC を認可モデルに使用しているため、従来のアクセス ポリシーではなく RBAC ロール割り当てを使用します。また資格情報なしの認証主体も必要です。',
        explanationEn: 'KV1 uses Azure RBAC rather than Vault access policies, and an identity is still required first.',
      },
      {
        id: 'B',
        textJa: 'App1 のアプリ登録',
        textEn: 'An app registration for App1',
        isCorrect: false,
        explanationJa: '【不正解】通常のアプリ登録ではクライアント シークレットや証明書の管理が必要になりがちであり、Azure 上の App Service にはマネージド ID が最適です。',
        explanationEn: 'Standard app registrations typically require managing secrets or certificates; App Service should use a managed identity.',
      },
      {
        id: 'C',
        textJa: 'KV1 のプライベート エンドポイント',
        textEn: 'A private endpoint for KV1',
        isCorrect: false,
        explanationJa: '【不正解】プライベート エンドポイントはネットワーク到達経路の仕組みであり、資格情報を使わない認証・認可は提供しません。',
        explanationEn: 'A private endpoint provides private network connectivity, not credential-free authentication.',
      },
      {
        id: 'D',
        textJa: 'App1 のマネージド ID',
        textEn: 'A managed identity for App1',
        isCorrect: true,
        explanationJa: '【正解】App1 のマネージド ID を作成 (有効化) すると、アプリ構成にシークレットやパスワードを保存せずに Entra トークンで認証し、RBAC ロール (Key Vault Secrets User など) を介して KV1 からシークレットを取得できます。',
        explanationEn: 'Creating a managed identity for App1 enables Microsoft Entra token authentication without storing credentials in app configuration, and allows granting RBAC access on KV1.',
      },
    ],
    overallExplanationJa: 'Azure App Service がパスワードやクライアント シークレットをアプリケーション構成に保持せずに Key Vault へアクセスするには、App1 のマネージド ID を有効化し、KV1 上で Key Vault Secrets User などのデータ プレーン RBAC ロールを割り当てます。',
    overallExplanationEn: 'Use a managed identity on App1 so the app authenticates to Key Vault via Microsoft Entra ID without storing secrets in application settings, combined with an Azure RBAC role on KV1.',
    keyPointsJa: [
      '構成ファイルへの資格情報保存をなくす標準手法はマネージド ID',
      'ネットワーク制御 (ファイアウォール/VNet) と ID 認証・RBAC 認可は別レイヤーとして構成する',
    ],
    keyPointsEn: [
      'Managed identities eliminate stored secrets in application configuration',
      'Network access control and identity/RBAC authorization operate independently',
    ],
    referenceTopic: 'App Service マネージド ID と Key Vault RBAC 連携',
  },
  {
    id: 'pdf-q9',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'パスワードレス認証と新規ユーザー向け一時アクセス パスの組み合わせ',
    titleEn: 'Configuring Passwordless Sign-In and Temporary Access Pass for New Users',
    scenarioJa: `Microsoft Entra テナントがあります。パスワードレス認証を実装する必要があります。
ソリューションは次の要件を満たす必要があります。
・ユーザーはモバイル デバイスを使用して、パスワードなしでサインインできること。
・初めてサインインする新規ユーザーは、ヘルプデスクが発行した、有効期限のあるサインイン方法を使用すること。

利用可能な方法：ハードウェア OATH トークン、Microsoft Authenticator、SMS、一時アクセス パス、音声通話`,
    scenarioEn: `You have a Microsoft Entra tenant. You need to implement passwordless authentication.
The solution must meet the following requirements:
- Users can sign in without a password using a mobile device.
- New users signing in for the first time use a time-limited sign-in method issued by the help desk.

Methods: Hardware OATH tokens, Microsoft Authenticator, SMS, Temporary Access Pass, Voice call.`,
    questionJa: '各要件に対して有効にする認証方法の正しい組み合わせを1つ選んでください。',
    questionEn: 'Which combination of authentication methods should you enable?',
    options: [
      {
        id: 'A',
        textJa: 'パスワードレス サインイン：ハードウェア OATH トークン／新規ユーザーの初回サインイン：一時アクセス パス',
        textEn: 'Passwordless sign-in: Hardware OATH tokens / New user first sign-in: Temporary Access Pass',
        isCorrect: false,
        explanationJa: '【不正解】ハードウェア OATH トークンは MFA の追加要素であり、モバイル デバイスでの電話によるパスワードレス サインイン方法ではありません。',
        explanationEn: 'Hardware OATH tokens provide MFA OTP codes rather than mobile device passwordless sign-in.',
      },
      {
        id: 'B',
        textJa: 'パスワードレス サインイン：SMS／新規ユーザーの初回サインイン：音声通話',
        textEn: 'Passwordless sign-in: SMS / New user first sign-in: Voice call',
        isCorrect: false,
        explanationJa: '【不正解】音声通話はヘルプデスクが有効期限を指定して発行する初回サインイン用の資格情報ではありません。',
        explanationEn: 'Voice call is not a time-limited onboarding credential issued by a help desk.',
      },
      {
        id: 'C',
        textJa: 'パスワードレス サインイン：ハードウェア OATH トークン／新規ユーザーの初回サインイン：Microsoft Authenticator',
        textEn: 'Passwordless sign-in: Hardware OATH tokens / New user first sign-in: Microsoft Authenticator',
        isCorrect: false,
        explanationJa: '【不正解】OATH トークンと Authenticator の役割が要件と一致していません。',
        explanationEn: 'Neither hardware OATH tokens nor Authenticator serves as the help-desk-issued time-limited onboarding method.',
      },
      {
        id: 'D',
        textJa: 'パスワードレス サインイン：SMS／新規ユーザーの初回サインイン：Microsoft Authenticator',
        textEn: 'Passwordless sign-in: SMS / New user first sign-in: Microsoft Authenticator',
        isCorrect: false,
        explanationJa: '【不正解】新規ユーザーが Authenticator を登録する前に本人確認するための期限付き方法として TAP が必要です。',
        explanationEn: 'New users need a Temporary Access Pass (TAP) before they can register Microsoft Authenticator.',
      },
      {
        id: 'E',
        textJa: 'パスワードレス サインイン：Microsoft Authenticator／新規ユーザーの初回サインイン：音声通話',
        textEn: 'Passwordless sign-in: Microsoft Authenticator / New user first sign-in: Voice call',
        isCorrect: false,
        explanationJa: '【不正解】音声通話は管理者が有効期限付きで発行する初回サインイン手段ではありません。',
        explanationEn: 'Voice call is not issued with an expiration window by the help desk for onboarding.',
      },
      {
        id: 'F',
        textJa: 'パスワードレス サインイン：Microsoft Authenticator／新規ユーザーの初回サインイン：一時アクセス パス',
        textEn: 'Passwordless sign-in: Microsoft Authenticator / New user first sign-in: Temporary Access Pass',
        isCorrect: true,
        explanationJa: '【正解】モバイル デバイスでのパスワードレス サインインには「Microsoft Authenticator (電話によるサインイン)」を使用し、未登録の新規ユーザーが初回サインインして認証方法を登録する際は、ヘルプデスクが期限付きで発行できる「一時アクセス パス (TAP)」を使用します。',
        explanationEn: 'Microsoft Authenticator enables passwordless phone sign-in on mobile devices, and Temporary Access Pass (TAP) provides a time-limited credential issued by help desk for first-time onboarding.',
      },
    ],
    overallExplanationJa: '日常のモバイルでのパスワードレス認証には「Microsoft Authenticator (電話によるサインイン)」を有効化します。まだ Authenticator 等を登録していない新規ユーザーが初回サインインし、自身のパスワードレス認証方法を登録できるようにするには、管理者が有効期限付きで発行できる「一時アクセス パス (TAP)」を有効にします。',
    overallExplanationEn: 'Use Microsoft Authenticator for passwordless mobile sign-in, and Temporary Access Pass (TAP) as the time-limited credential issued by help desk for initial onboarding and registration.',
    keyPointsJa: [
      'Microsoft Authenticator：モバイル デバイスでのパスワードレス (電話によるサインイン)',
      '一時アクセス パス (TAP)：管理者が発行する期限付きの初回サインイン・認証方法登録用パスコード',
    ],
    keyPointsEn: [
      'Microsoft Authenticator provides mobile passwordless phone sign-in',
      'Temporary Access Pass (TAP) enables time-limited onboarding to register passwordless methods',
    ],
    referenceTopic: 'Microsoft Entra ID パスワードレス認証と一時アクセス パス (TAP)',
  },
  {
    id: 'pdf-q10',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: '低リスク権限のみユーザー同意を許可するアプリの同意ポリシー作成',
    titleEn: 'Allowing User Consent for Low-Risk Permissions via App Consent Policies',
    scenarioJa: `アプリケーションに対するユーザーの同意が無効になっている Microsoft Entra テナントがあります。
次の Microsoft Graph の委任されたアクセス許可を要求する App1 という名前のアプリケーションを登録します。
・User.Read
・Mail.Read

次の要件を満たすようにテナントのアクセス許可を構成する必要があります。
・低リスクのアクセス許可について、管理者の介入なしにユーザーが同意を付与できるようにする。
・より高い権限のアクセス許可を要求するアプリケーションには、管理者の承認を必須にする。`,
    scenarioEn: `You have a Microsoft Entra tenant where user consent to applications is disabled.
You register an application named App1 that requests the following Microsoft Graph delegated permissions:
- User.Read
- Mail.Read

You need to configure tenant permissions to meet the following requirements:
- Allow users to grant consent for low-risk permissions without administrator intervention.
- Require administrator approval for applications requesting higher-privilege permissions.`,
    questionJa: '行うべきことを1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'App1 に管理者の同意を付与する。',
        textEn: 'Grant admin consent to App1.',
        isCorrect: false,
        explanationJa: '【不正解】個別アプリに管理者同意を付与する操作であり、低リスク権限に対するユーザー同意をテナント全体で可能にするルールにはなりません。',
        explanationEn: 'Granting admin consent for App1 only approves App1 and does not configure a tenant-wide rule allowing user consent for low-risk permissions.',
      },
      {
        id: 'B',
        textJa: 'App1 のユーザー割り当てを構成する。',
        textEn: 'Configure assignment for App1.',
        isCorrect: false,
        explanationJa: '【不正解】アプリケーション割り当ては誰がアプリを利用できるかを制限するものであり、API 権限の同意ポリシーとは異なります。',
        explanationEn: 'Application assignment controls who can sign in to App1, not API permission consent rules.',
      },
      {
        id: 'C',
        textJa: 'PIM ロールの割り当てを構成する。',
        textEn: 'Configure PIM role assignments.',
        isCorrect: false,
        explanationJa: '【不正解】PIM は管理者ロールの昇格管理であり、OAuth アプリの同意分類とは無関係です。',
        explanationEn: 'PIM manages privileged role elevation and does not classify OAuth application consent.',
      },
      {
        id: 'D',
        textJa: 'アプリの同意ポリシーを作成する。',
        textEn: 'Create an app consent policy.',
        isCorrect: true,
        explanationJa: '【正解】カスタムの「アプリの同意ポリシー (App consent policy)」を作成してユーザー同意設定に適用すると、User.Read などの指定した低リスクの委任されたアクセス許可のみユーザー自身が同意でき、Mail.Read のような高権限には管理者承認を要求できます。',
        explanationEn: 'Creating a custom app consent policy lets you allow user consent specifically for classified low-risk permissions (such as User.Read) while requiring admin approval for higher-privilege permissions (such as Mail.Read).',
      },
    ],
    overallExplanationJa: 'Microsoft Entra ID でリスクに応じた同意制御を行うには、アプリの同意ポリシー (App consent policy) を作成し、ユーザーが同意できる条件（検証済み発行元かつ低リスクと分類したアクセス許可など）を定義します。条件外のアクセス許可には引き続き管理者の同意が必要になります。',
    overallExplanationEn: 'Use a custom app consent policy in Microsoft Entra ID to permit user consent only for specific low-risk permissions while enforcing admin approval for higher-privilege requests.',
    keyPointsJa: [
      'アプリの同意ポリシー (App consent policy) で許可するアクセス許可の分類・条件を定義可能',
      'User.Read は低リスク許可対象にし、Mail.Read などは管理者同意必須に分離できる',
    ],
    keyPointsEn: [
      'App consent policies define granular criteria for user consent',
      'Higher-privilege permissions not included in the policy automatically require admin approval',
    ],
    referenceTopic: 'Microsoft Entra ID アプリの同意ポリシー',
  },
  {
    id: 'pdf-q11',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '複数サブスクリプションでの最小特権ロール割り当て権限の委任',
    titleEn: 'Delegating Role Assignment Permissions Across Multiple Subscriptions with Least Privilege',
    scenarioJa: `MG1 という名前の Azure 管理グループがあり、Sub1 と Sub2 という名前の2つのサブスクリプションが含まれています。両方のサブスクリプションは、Group1 という名前のセキュリティ グループを含む Microsoft Entra テナントにリンクされています。
Group1 のメンバーが Sub1 と Sub2 のリソースにロールを割り当てられるようにする必要があります。
ソリューションは最小特権の原則に従う必要があります。`,
    scenarioEn: `You have an Azure management group named MG1 that contains two subscriptions named Sub1 and Sub2. Both subscriptions are linked to a Microsoft Entra tenant containing a security group named Group1.
You need to allow members of Group1 to assign roles to resources in Sub1 and Sub2.
The solution must follow the principle of least privilege.`,
    questionJa: 'Group1 に割り当てるべきロールはどれですか。',
    questionEn: 'Which role should you assign to Group1?',
    options: [
      {
        id: 'A',
        textJa: 'MG1 スコープの共同作成者',
        textEn: 'Contributor at the MG1 scope',
        isCorrect: false,
        explanationJa: '【不正解】共同作成者 (Contributor) には Azure RBAC のロールを割り当てる権限 (Microsoft.Authorization/roleAssignments/write) がありません。',
        explanationEn: 'Contributor allows managing resources but cannot assign RBAC roles.',
      },
      {
        id: 'B',
        textJa: 'Sub1 と Sub2 のスコープの共同作成者',
        textEn: 'Contributor at the Sub1 and Sub2 scopes',
        isCorrect: false,
        explanationJa: '【不正解】共同作成者ロールではどのスコープであってもロール割り当ては実行できません。',
        explanationEn: 'Contributor does not permit creating role assignments regardless of scope.',
      },
      {
        id: 'C',
        textJa: 'MG1 スコープのユーザー アクセス管理者',
        textEn: 'User Access Administrator at the MG1 scope',
        isCorrect: true,
        explanationJa: '【正解】ユーザー アクセス管理者 (User Access Administrator) はリソースのアクセス権管理に限定された組み込みロールであり、MG1 スコープで割り当てることで Sub1 と Sub2 へ継承され、所有者のようなリソース作成・削除権限を与えずに最小特権を満たせます。',
        explanationEn: 'User Access Administrator grants permission to manage Azure RBAC assignments without general resource write/delete access; assigning it at MG1 inherits to Sub1 and Sub2.',
      },
      {
        id: 'D',
        textJa: 'MG1 スコープの所有者',
        textEn: 'Owner at the MG1 scope',
        isCorrect: false,
        explanationJa: '【不正解】所有者 (Owner) はロール割り当てに加えて全リソースの作成・変更・削除も許可するため、最小特権の原則に反します。',
        explanationEn: 'Owner includes full resource management rights in addition to role assignments, violating least privilege.',
      },
    ],
    overallExplanationJa: 'Azure リソースへのアクセス権（ロール割り当て）のみを管理させ、リソース自体の変更・削除権限を与えない場合は「ユーザー アクセス管理者 (User Access Administrator)」を使用します。MG1 管理グループに割り当てることで配下の Sub1・Sub2 に継承されます。',
    overallExplanationEn: 'Assign User Access Administrator at the MG1 management group scope so Group1 can manage role assignments across Sub1 and Sub2 without gaining Contributor/Owner resource management rights.',
    keyPointsJa: [
      'ロール割り当て管理専用・リソース操作なしの組み込みロールは「ユーザー アクセス管理者」',
      '共同作成者 (Contributor) にはロール割り当て権限が含まれない',
    ],
    keyPointsEn: [
      'User Access Administrator manages RBAC assignments without resource write access',
      'Contributor cannot manage RBAC role assignments',
    ],
    referenceTopic: 'Azure RBAC 組み込みロールと管理グループ継承',
  },
  {
    id: 'pdf-q12',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Key Vault の管理プレーンとシークレット取得の最小特権 RBAC 分離',
    titleEn: 'Separating Key Vault Management Plane and Secret Read Roles with Least Privilege',
    scenarioJa: `データ プレーンの認可にロールベースのアクセス制御 (RBAC) を使用する、KV1 という名前の Azure Key Vault があります。
User1 という名前のユーザーと、システム割り当てマネージド ID を持つ App1 という名前の Azure App Service Web アプリがあります。
次の要件を満たすように認可を構成する必要があります。
・App1 は KV1 からシークレットを取得できなければなりません。
・User1 はシークレット値にアクセスせずに KV1 の設定を管理しなければなりません。
・ソリューションは最小特権の原則に従う必要があります。

役割の候補：キー コンテナー管理者 (Key Vault Administrator)、キー コンテナー共同作成者 (Key Vault Contributor)、キー コンテナー シークレット担当者 (Key Vault Secrets Officer)、キー コンテナー シークレット ユーザー (Key Vault Secrets User)`,
    scenarioEn: `You have an Azure Key Vault named KV1 that uses Azure RBAC for data plane authorization.
You have a user named User1 and an Azure App Service web app named App1 that has a system-assigned managed identity.
You need to configure authorization to meet the following requirements:
- App1 must be able to retrieve secrets from KV1.
- User1 must be able to manage KV1 settings without accessing secret values.
- The solution must follow the principle of least privilege.

Candidate roles: Key Vault Administrator, Key Vault Contributor, Key Vault Secrets Officer, Key Vault Secrets User.`,
    questionJa: 'KV1 に対して各 ID に割り当てるべき役割の組み合わせを、次のうちから1つ選んでください。',
    questionEn: 'Which role combination should you assign on KV1 for User1 and App1?',
    options: [
      {
        id: 'A',
        textJa: 'User1：Key Vault Administrator／App1：Key Vault Administrator',
        textEn: 'User1: Key Vault Administrator / App1: Key Vault Administrator',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault Administrator はシークレットの読み取りを含む広範なデータ プレーン権限を持つため、User1 と App1 の双方で最小特権に違反します。',
        explanationEn: 'Key Vault Administrator grants full data plane access, allowing User1 to read secrets and App1 to modify/delete objects.',
      },
      {
        id: 'B',
        textJa: 'User1：Key Vault Secrets Officer／App1：Key Vault Administrator',
        textEn: 'User1: Key Vault Secrets Officer / App1: Key Vault Administrator',
        isCorrect: false,
        explanationJa: '【不正解】Secrets Officer はコンテナー設定の管理ではなくシークレットの操作用ロールであり、値も読めてしまいます。',
        explanationEn: 'Key Vault Secrets Officer manages secret values rather than vault settings, and App1 does not need Administrator.',
      },
      {
        id: 'C',
        textJa: 'User1：Key Vault Secrets Officer／App1：Key Vault Secrets Officer',
        textEn: 'User1: Key Vault Secrets Officer / App1: Key Vault Secrets Officer',
        isCorrect: false,
        explanationJa: '【不正解】両者ともシークレットの作成・更新・削除・読み取りができてしまい、要件を満たしません。',
        explanationEn: 'Secrets Officer lets User1 access secret values and lacks vault settings management; it also gives App1 write/delete rights.',
      },
      {
        id: 'D',
        textJa: 'User1：Key Vault Contributor／App1：Key Vault Secrets Officer',
        textEn: 'User1: Key Vault Contributor / App1: Key Vault Secrets Officer',
        isCorrect: false,
        explanationJa: '【不正解】User1 の Key Vault Contributor は適切ですが、取得だけを行う App1 に作成・削除まで許可する Secrets Officer は過剰です。',
        explanationEn: 'User1 needs Key Vault Contributor, but App1 only retrieves secrets and should not receive write/delete rights via Secrets Officer.',
      },
      {
        id: 'E',
        textJa: 'User1：Key Vault Contributor／App1：Key Vault Secrets User',
        textEn: 'User1: Key Vault Contributor / App1: Key Vault Secrets User',
        isCorrect: true,
        explanationJa: '【正解】Key Vault Contributor は管理プレーン（コンテナー設定の管理）のみを許可し、シークレット値の読み取りを許可しません。App1 には読み取り専用の Key Vault Secrets User を割り当てることで最小特権を満たします。',
        explanationEn: 'Key Vault Contributor lets User1 manage vault settings without accessing secret values (management plane), while Key Vault Secrets User lets App1 only read secrets (data plane).',
      },
      {
        id: 'F',
        textJa: 'User1：Key Vault Administrator／App1：Key Vault Secrets User',
        textEn: 'User1: Key Vault Administrator / App1: Key Vault Secrets User',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault Administrator はシークレット値にアクセスできてしまうため、User1 の要件に反します。',
        explanationEn: 'Key Vault Administrator allows User1 to access secret values, violating the requirement.',
      },
    ],
    overallExplanationJa: 'Azure RBAC モデルの Key Vault では管理プレーンとデータ プレーンが厳密に分離されています。設定管理を行うがデータ値を読まない User1 には「Key Vault Contributor」、シークレット取得のみ行う App1 には「Key Vault Secrets User」を割り当てます。',
    overallExplanationEn: 'In RBAC-enabled Key Vaults, Key Vault Contributor provides management-plane control without data access, and Key Vault Secrets User provides read-only data access to secrets.',
    keyPointsJa: [
      'Key Vault Contributor：コンテナー設定の管理専用（シークレット値は読めない）',
      'Key Vault Secrets User：シークレット値の読み取り専用（変更・削除不可）',
    ],
    keyPointsEn: [
      'Key Vault Contributor manages vault configuration without reading secret values',
      'Key Vault Secrets User provides read-only access to secret contents',
    ],
    referenceTopic: 'Azure Key Vault RBAC 組み込みロールの役割分離',
  },
  {
    id: 'pdf-q13',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '仮想マシン上の平文トークンと SSH 秘密キーの検出',
    titleEn: 'Detecting Plaintext Tokens and SSH Keys on Virtual Machines',
    scenarioJa: `50台の仮想マシンを含む、Sub1 という名前の Azure サブスクリプションがあります。Sub1 では Microsoft Defender for Cloud が有効になっています。Sub1 には、KV1 という名前の Azure Key Vault のキー コンテナーと、すべてのシークレットを KV1 に格納することを強制する Azure ポリシーがあります。
会社の開発者は、ときどき平文のトークンと SSH 秘密キーを仮想マシンに保存します。
仮想マシン上の平文のシークレットを検出するように Defender for Cloud を構成する必要があります。ソリューションでは、仮想マシンに対する管理上の変更を最小限に抑える必要があります。`,
    scenarioEn: `You have an Azure subscription named Sub1 that contains 50 virtual machines. Microsoft Defender for Cloud is enabled on Sub1. Sub1 has an Azure Key Vault named KV1 and an Azure policy enforcing that all secrets are stored in KV1.
Your developers occasionally store plaintext tokens and SSH private keys on the virtual machines.
You need to configure Defender for Cloud to detect plaintext secrets on the virtual machines while minimizing administrative changes to the VMs.`,
    questionJa: 'Defender for Cloud で有効にするプランと機能の組み合わせはどれですか。',
    questionEn: 'Which Defender for Cloud plan and feature combination should you enable?',
    options: [
      {
        id: 'A',
        textJa: 'プラン：Microsoft Defender for Cloud Apps、機能：仮想マシンの脆弱性評価',
        textEn: 'Plan: Microsoft Defender for Cloud Apps / Feature: Vulnerability assessment on the virtual machines',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Cloud Apps は SaaS アプリ保護であり、脆弱性評価は平文シークレットの検出機能ではありません。',
        explanationEn: 'Defender for Cloud Apps protects SaaS apps, and vulnerability assessment scans for OS/software CVEs rather than plaintext secrets.',
      },
      {
        id: 'B',
        textJa: 'プラン：Defender クラウド セキュリティ態勢管理 (Defender CSPM)、機能：エージェントレス マシン スキャン',
        textEn: 'Plan: Defender Cloud Security Posture Management (CSPM) / Feature: Agentless machine scanning',
        isCorrect: true,
        explanationJa: '【正解】Defender CSPM の「エージェントレス マシン スキャン」を有効にすると、VM 内にエージェントをインストールすることなく、ディスクのスナップショットから平文シークレットや SSH 秘密キーをスキャンして検出できます。',
        explanationEn: 'Defender CSPM with Agentless machine scanning inspects VM disk snapshots out-of-band without VM agents or changes to detect plaintext tokens and SSH keys.',
      },
      {
        id: 'C',
        textJa: 'プラン：Microsoft Defender for Cloud Apps、機能：規制コンプライアンス',
        textEn: 'Plan: Microsoft Defender for Cloud Apps / Feature: Regulatory compliance',
        isCorrect: false,
        explanationJa: '【不正解】VM ディスク内のシークレット スキャンには対応していません。',
        explanationEn: 'Neither Defender for Cloud Apps nor Regulatory compliance performs plaintext secret scanning on VM disks.',
      },
      {
        id: 'D',
        textJa: 'プラン：Microsoft Defender for Key Vault、機能：エージェントレス マシン スキャン',
        textEn: 'Plan: Microsoft Defender for Key Vault / Feature: Agentless machine scanning',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Key Vault は KV1 への不審なアクセスを監視するプランであり、VM のエージェントレス スキャンは提供しません。',
        explanationEn: 'Defender for Key Vault monitors Key Vault access anomalies, not VM disk snapshots.',
      },
      {
        id: 'E',
        textJa: 'プラン：Microsoft Defender for Key Vault、機能：仮想マシンの脆弱性評価',
        textEn: 'Plan: Microsoft Defender for Key Vault / Feature: Vulnerability assessment on the virtual machines',
        isCorrect: false,
        explanationJa: '【不正解】VM ファイル内の平文シークレット検出を行う組み合わせではありません。',
        explanationEn: 'This combination does not scan VM disks for plaintext secrets.',
      },
      {
        id: 'F',
        textJa: 'プラン：Defender クラウド セキュリティ態勢管理 (Defender CSPM)、機能：規制コンプライアンス',
        textEn: 'Plan: Defender Cloud Security Posture Management (CSPM) / Feature: Regulatory compliance',
        isCorrect: false,
        explanationJa: '【不正解】プランは適切ですが、平文シークレットの検出には「エージェントレス マシン スキャン」の有効化が必要です。',
        explanationEn: 'Defender CSPM is right, but Agentless machine scanning (not Regulatory compliance) enables secret scanning on VM disks.',
      },
    ],
    overallExplanationJa: 'VM 上のファイルに残された平文シークレット (トークン、接続文字列、SSH 秘密キーなど) を VM へのエージェント導入なしに検出するには、Defender CSPM プランの「エージェントレス マシン スキャン (Agentless machine scanning)」を有効にします。',
    overallExplanationEn: 'Enable Agentless machine scanning under the Defender CSPM plan to scan VM disk snapshots for exposed plaintext credentials and SSH keys without modifying the VMs.',
    keyPointsJa: [
      'シークレット スキャンは Defender CSPM の「エージェントレス マシン スキャン」に含まれる',
      'VM 内にエージェントを追加せずディスク スナップショットで検査できるため管理変更を最小限にできる',
    ],
    keyPointsEn: [
      'Secret scanning is part of Agentless machine scanning in Defender CSPM',
      'Uses disk snapshots with zero agents or changes required inside the VM',
    ],
    referenceTopic: 'Defender CSPM エージェントレス シークレット スキャン',
  },
  {
    id: 'pdf-q14',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Policy による VM セキュリティ拡張機能の自動展開と修復',
    titleEn: 'Auto-Deploying VM Security Extensions with Azure Policy DeployIfNotExists',
    scenarioJa: `Azure サブスクリプションがあります。次の要件を満たす Azure Policy を作成してデプロイする必要があります。
・新しい仮想マシンがデプロイされたときに、カスタム セキュリティ拡張機能を自動的にインストールする。
・準拠していない仮想マシンに拡張機能をインストールするため、自動生成される修復タスクをトリガーする。`,
    scenarioEn: `You have an Azure subscription. You need to create and deploy an Azure Policy that meets the following requirements:
- Automatically install a custom security extension when new virtual machines are deployed.
- Trigger an auto-generated remediation task to install the extension on non-compliant virtual machines.`,
    questionJa: 'ポリシーに含めるものの組み合わせとして正しいものを1つ選んでください。',
    questionEn: 'Which combination should you include in the policy?',
    options: [
      {
        id: 'A',
        textJa: '定義の効果：Modify／修復用に定義する対象：共同作成者ロールを持つマネージド ID',
        textEn: 'Effect: Modify / Remediation identity: Managed identity with Contributor role',
        isCorrect: false,
        explanationJa: '【不正解】Modify 効果はタグやプロパティの変更用であり、関連リソースである VM 拡張機能を追加デプロイすることはできません。',
        explanationEn: 'The Modify effect alters resource properties or tags; deploying a child/related VM extension requires DeployIfNotExists.',
      },
      {
        id: 'B',
        textJa: '定義の効果：DeployIfNotExists／修復用に定義する対象：ユーザー アクセス管理者ロールを持つマネージド ID',
        textEn: 'Effect: DeployIfNotExists / Remediation identity: Managed identity with User Access Administrator role',
        isCorrect: false,
        explanationJa: '【不正解】ユーザー アクセス管理者にはリソース（VM 拡張機能）を作成・デプロイする権限がありません。',
        explanationEn: 'User Access Administrator manages RBAC assignments and cannot deploy VM extension resources.',
      },
      {
        id: 'C',
        textJa: '定義の効果：Append／修復用に定義する対象：共同作成者ロールを持つサービス プリンシパル',
        textEn: 'Effect: Append / Remediation identity: Service principal with Contributor role',
        isCorrect: false,
        explanationJa: '【不正解】Append は既存リソースのプロパティ追加用であり、修復ではポリシー割り当てのマネージド ID を使用します。',
        explanationEn: 'Append adds fields on create/update requests; it does not deploy extensions or use policy remediation tasks.',
      },
      {
        id: 'D',
        textJa: '定義の効果：DeployIfNotExists／修復用に定義する対象：共同作成者ロールを持つマネージド ID',
        textEn: 'Effect: DeployIfNotExists / Remediation identity: Managed identity with Contributor role',
        isCorrect: true,
        explanationJa: '【正解】関連リソース (VM 拡張機能) が不足している場合に ARM テンプレートを実行して追加デプロイするには「DeployIfNotExists」効果を使用し、修復タスクの実行主体として共同作成者ロールを持つマネージド ID を割り当てます。',
        explanationEn: 'DeployIfNotExists deploys missing related resources like VM extensions, and remediation tasks use a managed identity assigned the Contributor role (via roleDefinitionIds).',
      },
      {
        id: 'E',
        textJa: '定義の効果：Modify／修復用に定義する対象：ユーザー アクセス管理者ロールを持つサービス プリンシパル',
        textEn: 'Effect: Modify / Remediation identity: Service principal with User Access Administrator role',
        isCorrect: false,
        explanationJa: '【不正解】効果も修復用 ID/ロールも要件に適合しません。',
        explanationEn: 'Neither Modify nor User Access Administrator allows deploying VM extensions via remediation.',
      },
      {
        id: 'F',
        textJa: '定義の効果：EnforceOPAConstraint／修復用に定義する対象：共同作成者ロールを持つマネージド ID',
        textEn: 'Effect: EnforceOPAConstraint / Remediation identity: Managed identity with Contributor role',
        isCorrect: false,
        explanationJa: '【不正解】EnforceOPAConstraint は Kubernetes / AKS 向けの制約効果であり、VM 拡張機能のデプロイには使えません。',
        explanationEn: 'EnforceOPAConstraint applies to Kubernetes OPA Gatekeeper constraints, not VM extensions.',
      },
    ],
    overallExplanationJa: 'VM に拡張機能などの関連リソースを追加デプロイし、非準拠リソースを修復タスクで修復させるには、Azure Policy の効果に「DeployIfNotExists」を選び、修復実行用のマネージド ID に拡張機能の書き込みを許可するロール（共同作成者など）を付与します。',
    overallExplanationEn: 'Use the DeployIfNotExists effect to automatically deploy missing VM extensions and remediate non-compliant VMs using a managed identity with Contributor permissions.',
    keyPointsJa: [
      '関連リソースの追加デプロイには DeployIfNotExists 効果を使用 (プロパティ変更は Modify)',
      '修復タスクはポリシー割り当てのマネージド ID + 共同作成者などの書き込みロールで実行',
    ],
    keyPointsEn: [
      'DeployIfNotExists deploys missing related resources such as VM extensions',
      'Remediation tasks execute under a managed identity with Contributor (or specific write) permissions',
    ],
    referenceTopic: 'Azure Policy の DeployIfNotExists と修復タスク',
  },
  {
    id: 'pdf-q15',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    requiredSelections: 2,
    titleJa: 'Fabrikam: SQLdb1 へのデータベース管理者アクセスに対する MFA 強制',
    titleEn: 'Fabrikam: Enforcing MFA for Database Administrators Accessing SQLdb1',
    scenarioJa: `${FABRIKAM_CASE_STUDY_JA}

SQLdb1 に予定されている変更（データベース管理者が SQLdb1 にアクセスするときに多要素認証 (MFA) を適用する）を実装する必要があります。`,
    scenarioEn: `${FABRIKAM_CASE_STUDY_EN}

You need to implement the planned change for SQLdb1 (enforce MFA when database administrators access SQLdb1).`,
    questionJa: '実行すべき操作を2つ選んでください。',
    questionEn: 'Which two actions should you perform?',
    options: [
      {
        id: 'A',
        textJa: 'Intune コンプライアンス ポリシーを作成する。',
        textEn: 'Create an Intune device compliance policy.',
        isCorrect: false,
        explanationJa: '【不正解】Intune コンプライアンス ポリシーは端末の準拠状態を評価するものであり、サインイン時に MFA を要求する機能ではありません。',
        explanationEn: 'Intune compliance policies evaluate device health, not MFA enforcement on database sign-ins.',
      },
      {
        id: 'B',
        textJa: 'SQLServer1 に Microsoft Entra 認証を構成する。',
        textEn: 'Configure Microsoft Entra authentication on SQLServer1.',
        isCorrect: true,
        explanationJa: '【正解】既存環境では SQLServer1 は SQL Server 認証を使用しており、SQL 認証には Entra 条件付きアクセスを適用できません。まず SQLServer1 で Microsoft Entra 認証を有効にする必要があります。',
        explanationEn: 'SQLServer1 currently uses SQL Server authentication, which cannot enforce Entra Conditional Access. You must first enable Microsoft Entra authentication on SQLServer1.',
      },
      {
        id: 'C',
        textJa: '条件付きアクセス ポリシーを作成する。',
        textEn: 'Create a Conditional Access policy.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Entra 認証を有効にした上で、対象ユーザー（データベース管理者）と対象リソース（Azure SQL Database）に対して MFA を要求する条件付きアクセス ポリシーを作成します。',
        explanationEn: 'After enabling Entra authentication, create a Conditional Access policy targeting Azure SQL Database and requiring MFA for database administrators.',
      },
      {
        id: 'D',
        textJa: 'SQLdb1 にフェデレーション クライアント ID を構成する。',
        textEn: 'Configure a federated client ID on SQLdb1.',
        isCorrect: false,
        explanationJa: '【不正解】クロステナント CMK 構成などに使われるクライアント ID 設定であり、管理者への MFA 適用とは関係ありません。',
        explanationEn: 'Federated client IDs are used for cross-tenant scenarios like CMK access, not admin MFA.',
      },
      {
        id: 'E',
        textJa: 'SQLdb1 にユーザー割り当てマネージド ID を構成する。',
        textEn: 'Configure a user-assigned managed identity on SQLdb1.',
        isCorrect: false,
        explanationJa: '【不正解】マネージド ID はリソース側の認証用であり、人間の管理者に MFA を課すものではありません。',
        explanationEn: 'Managed identities are for workload authentication and do not enforce MFA for human administrators.',
      },
    ],
    overallExplanationJa: 'Azure SQL Database でデータベース管理者に MFA を強制するには、まず論理サーバー (SQLServer1) で SQL 認証に加えて/代わりに Microsoft Entra 認証を構成し、次に Azure SQL Database を対象として MFA を必須とする条件付きアクセス ポリシーを作成します。',
    overallExplanationEn: 'SQL authentication does not support Entra Conditional Access. Configure Microsoft Entra authentication on SQLServer1 and create a Conditional Access policy requiring MFA.',
    keyPointsJa: [
      'SQL Server 認証のままでは Entra 条件付きアクセスによる MFA は適用できない',
      'Entra 認証の構成 + 条件付きアクセス ポリシーの2ステップで MFA を強制する',
    ],
    keyPointsEn: [
      'SQL authentication bypasses Entra Conditional Access',
      'Require both Microsoft Entra authentication on the logical server and a Conditional Access policy',
    ],
    referenceTopic: 'Azure SQL Database での Microsoft Entra 認証と MFA 強制',
  },
  {
    id: 'pdf-q16',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Fabrikam: Table ストレージを含む storage2 の顧客管理キー (CMK) 暗号化',
    titleEn: 'Fabrikam: Encrypting Azure Table Storage with Customer-Managed Keys on storage2',
    scenarioJa: `${FABRIKAM_CASE_STUDY_JA}

storage2（Azure Table storage をサポート）に予定されている変更を実装する必要があります。ソリューションは、ストレージの暗号化に関する技術要件（すべてのデータを Fabrikam が管理するキーで暗号化）を満たさなければなりません。`,
    scenarioEn: `${FABRIKAM_CASE_STUDY_EN}

You need to implement the planned change for storage2 (supporting Azure Table storage) while meeting the technical requirement that all data in storage accounts must be encrypted using keys managed by Fabrikam.`,
    questionJa: '何を行うべきですか。1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'storage2 の暗号化キー保護のため消去保護を有効にする。',
        textEn: 'Enable soft delete and purge protection for storage2.',
        isCorrect: false,
        explanationJa: '【不正解】消去保護 (Purge protection) は Key Vault 側の機能であり、Table サービスの CMK 対応を設定するものではありません。',
        explanationEn: 'Purge protection is a Key Vault feature and does not configure customer-managed key encryption for Table storage.',
      },
      {
        id: 'B',
        textJa: 'storage2 に顧客管理キー用の暗号化スコープを作成する。',
        textEn: 'Create a dedicated encryption scope on storage2.',
        isCorrect: false,
        explanationJa: '【不正解】暗号化スコープは Blob コンテナーや個別の Blob に対して適用する機能であり、Table ストレージには適用できません。',
        explanationEn: 'Encryption scopes apply to Blob containers and blobs, not Azure Table storage.',
      },
      {
        id: 'C',
        textJa: 'storage2 がアカウント暗号化キーを使用するように構成する。',
        textEn: 'Configure storage2 to use account encryption keys.',
        isCorrect: true,
        explanationJa: '【正解】Azure Table storage（および Queue）をカスタマー マネージド キー (CMK) で暗号化するには、ストレージ アカウント作成時等に Table サービスの暗号化キーの種類として「アカウント スコープの暗号化キー (keyType: Account)」を有効にする必要があります。',
        explanationEn: 'To encrypt Azure Table storage with a customer-managed key, the storage account must be configured to use account-scoped encryption keys (keyType: Account) for Table and Queue services.',
      },
      {
        id: 'D',
        textJa: 'storage2 にキー管理用の Azure RBAC ロールを割り当てる。',
        textEn: 'Assign Azure RBAC storage roles directly to storage2.',
        isCorrect: false,
        explanationJa: '【不正解】Azure RBAC はデータや管理操作へのアクセス認可であり、保存時暗号化キーの構成ではありません。',
        explanationEn: 'Azure RBAC controls access permissions, not encryption-at-rest key configuration.',
      },
    ],
    overallExplanationJa: 'Azure Storage において Blob や Files は既定で CMK をサポートしますが、Table ストレージと Queue ストレージのデータを顧客管理キー (CMK) で保護するには、アカウント レベルの暗号化キー (Account encryption keys / keyType = Account) を有効にする構成が必要です。',
    overallExplanationEn: 'Customer-managed keys for Azure Table and Queue storage require enabling account-scoped encryption keys (Account encryption keys) on the storage account.',
    keyPointsJa: [
      'Table / Queue サービスの CMK 保護には「アカウント暗号化キー」の構成が必要',
      '暗号化スコープ (Encryption scope) は Blob サービス専用',
    ],
    keyPointsEn: [
      'Table/Queue CMK encryption requires enabling account encryption keys',
      'Encryption scopes only apply to Blob storage',
    ],
    referenceTopic: 'Azure Storage Table サービスの顧客管理キーとアカウント暗号化キー',
  },
  {
    id: 'pdf-q17',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '既存 SQL ログインを残したままでの SQL 認証接続の拒否',
    titleEn: 'Blocking SQL Authentication Connections While Retaining Legacy SQL Logins',
    scenarioJa: `複数のデータベースを含む、Server1 という名前の Azure SQL Database 論理サーバーがあります。
これらのデータベースには、サインインに使用できないようにする必要がありますが、データベースから削除してはならない従来の SQL 認証ログインが含まれています。
接続時に SQL 認証が拒否されるようにする必要があります。`,
    scenarioEn: `You have an Azure SQL Database logical server named Server1 that contains multiple databases.
The databases contain legacy SQL authentication logins that must be prevented from signing in, but must not be deleted from the databases.
You need to ensure that SQL authentication is rejected during connection.`,
    questionJa: '何をすべきですか。1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: '各 DB で CREATE USER FROM EXTERNAL PROVIDER を実行する。',
        textEn: 'Run CREATE USER FROM EXTERNAL PROVIDER in each DB.',
        isCorrect: false,
        explanationJa: '【不正解】Entra 認証ユーザーを作成する SQL 文であり、既存の SQL 認証を拒否する設定にはなりません。',
        explanationEn: 'This creates Microsoft Entra users in the databases, but does not disable SQL authentication.',
      },
      {
        id: 'B',
        textJa: 'SQL 認証による接続をブロックする条件付きアクセス ポリシーを作成する。',
        textEn: 'Create a Conditional Access policy blocking SQL auth.',
        isCorrect: false,
        explanationJa: '【不正解】条件付きアクセスは Microsoft Entra サインインに適用されるものであり、SQL 認証を直接拒否できません。',
        explanationEn: 'Conditional Access only evaluates Microsoft Entra sign-ins, not native SQL authentication.',
      },
      {
        id: 'C',
        textJa: 'Server1 に対して Microsoft Entra のみの認証を有効にする。',
        textEn: 'Enable Microsoft Entra-only authentication on Server1.',
        isCorrect: true,
        explanationJa: '【正解】Server1 で「Microsoft Entra のみの認証 (Microsoft Entra-only authentication)」を有効にすると、従来の SQL ログインやデータベース ユーザー定義を削除せずに、SQL 認証による接続試行をすべて拒否できます。',
        explanationEn: 'Enabling Microsoft Entra-only authentication on Server1 rejects all SQL authentication connection attempts without deleting the legacy SQL logins or user definitions.',
      },
      {
        id: 'D',
        textJa: 'Server1 に SQL Server Contributor ロールを割り当てる。',
        textEn: 'Assign the SQL Server Contributor role on Server1.',
        isCorrect: false,
        explanationJa: '【不正解】リソースの管理権限を付与するロールであり、認証方式の拒否設定ではありません。',
        explanationEn: 'SQL Server Contributor grants Azure resource management permissions and does not disable SQL authentication.',
      },
    ],
    overallExplanationJa: 'Microsoft Entra 専用認証を有効化すると、データベース内のレガシー SQL 認証ユーザー/ログインの定義を保持したまま、論理サーバー レベルで SQL 認証によるサインインを拒否できます。',
    overallExplanationEn: 'Enabling Microsoft Entra-only authentication blocks SQL authentication logins at the server level without requiring deletion of legacy SQL login objects.',
    keyPointsJa: [
      'Microsoft Entra のみの認証は従来の SQL ログインを削除せずにサインインを拒否できる',
      '条件付きアクセスは SQL 認証トラフィックを遮断できない',
    ],
    keyPointsEn: [
      'Entra-only authentication rejects SQL auth without deleting legacy login definitions',
      'Conditional Access does not intercept SQL username/password authentication',
    ],
    referenceTopic: 'Azure SQL Database での Microsoft Entra のみの認証',
  },
  {
    id: 'pdf-q18',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Database for PostgreSQL 向けの最小コスト Defender プラン選定',
    titleEn: 'Selecting the Cost-Minimal Defender Plan for Azure Database for PostgreSQL',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションがあり、Azure Database for PostgreSQL インスタンスが含まれています。Sub1 では Microsoft Defender for Cloud が有効になっています。
コストを最小限に抑えるために Microsoft Defender for Databases を構成する必要があります。`,
    scenarioEn: `You have an Azure subscription named Sub1 that contains an Azure Database for PostgreSQL instance. Microsoft Defender for Cloud is enabled on Sub1.
You need to configure Microsoft Defender for Databases while minimizing costs.`,
    questionJa: '有効にすべき Defender プランを1つ選んでください。',
    questionEn: 'Which Defender plan should you enable?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Servers',
        textEn: 'Microsoft Defender for Servers',
        isCorrect: false,
        explanationJa: '【不正解】VM や Arc サーバー向けプランであり、マネージド PostgreSQL データベースは保護対象外です。',
        explanationEn: 'Defender for Servers protects VMs and Arc-enabled servers, not PaaS PostgreSQL instances.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Defender for Open-Source Relational Databases',
        textEn: 'Microsoft Defender for Open-Source Relational Databases',
        isCorrect: true,
        explanationJa: '【正解】Azure Database for PostgreSQL、MySQL、MariaDB を保護対象とする専用のサブプランは Microsoft Defender for Open-Source Relational Databases です。これのみを有効にすることで不要な課金を抑えられます。',
        explanationEn: 'Microsoft Defender for Open-Source Relational Databases specifically protects Azure Database for PostgreSQL, MySQL, and MariaDB without paying for unrelated database plans.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Defender for SQL Servers on Machines',
        textEn: 'Microsoft Defender for SQL Servers on Machines',
        isCorrect: false,
        explanationJa: '【不正解】VM やオンプレミス上の SQL Server 向けプランです。',
        explanationEn: 'This targets SQL Server running on virtual or physical machines, not PostgreSQL.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Azure SQL Databases',
        textEn: 'Microsoft Defender for Azure SQL Databases',
        isCorrect: false,
        explanationJa: '【不正解】Azure SQL Database / Managed Instance 向けプランであり PostgreSQL は対象外です。',
        explanationEn: 'This protects Azure SQL Database and SQL Managed Instance, not PostgreSQL.',
      },
      {
        id: 'E',
        textJa: 'Microsoft Defender for Storage',
        textEn: 'Microsoft Defender for Storage',
        isCorrect: false,
        explanationJa: '【不正解】ストレージ アカウント用のプランです。',
        explanationEn: 'Defender for Storage protects Azure Storage accounts, not PostgreSQL databases.',
      },
    ],
    overallExplanationJa: 'Defender for Databases は保護対象のデータベース エンジン別に細かくプランを選べます。Azure Database for PostgreSQL に対してコストを最小限に抑えて有効化すべきなのは「Microsoft Defender for Open-Source Relational Databases」のみです。',
    overallExplanationEn: 'Defender for Databases offers granular sub-plans by engine. Enable only Microsoft Defender for Open-Source Relational Databases for Azure Database for PostgreSQL.',
    keyPointsJa: [
      'PostgreSQL / MySQL / MariaDB の保護は Defender for Open-Source Relational Databases',
      '必要なデータベース種別のみ有効化してコストを最小限に抑える',
    ],
    keyPointsEn: [
      'Use Defender for Open-Source Relational Databases for PostgreSQL/MySQL/MariaDB',
      'Enable only the required database sub-plan to minimize cost',
    ],
    referenceTopic: 'Defender for Databases サブプランの選定',
  },
  {
    id: 'pdf-q19',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Files 共有へのマネージド ID によるアクセス (キー不使用)',
    titleEn: 'Granting App1 Managed Identity Access to Azure Files Without Account Keys',
    scenarioJa: `Azure Files 共有を含む storage1 という名前の Azure Storage アカウントがあります。App1 という名前のアプリケーションは、システム割り当てマネージド ID を使用して共有にアクセスします。管理者は、ストレージ アカウント キーを使用して共有にアクセスします。
App1 がストレージ アカウント キーを使用せずに共有にアクセスできるようにする必要があります。`,
    scenarioEn: `You have an Azure Storage account named storage1 that contains an Azure Files share. An application named App1 accesses the share using a system-assigned managed identity, while administrators use storage account keys.
You need to ensure that App1 can access the share without using a storage account key.`,
    questionJa: 'storage1 で行うべきことを1つ選んでください。',
    questionEn: 'What should you do on storage1?',
    options: [
      {
        id: 'A',
        textJa: 'ストレージ アカウントのアクセス キーを Azure Key Vault に保存し、定期的に自動で再生成する。',
        textEn: 'Store the storage account access keys in Azure Key Vault and regenerate them periodically.',
        isCorrect: false,
        explanationJa: '【不正解】キーを保管・ローテーションしても、App1 がアカウント キーを使用する前提のままになり要件を満たしません。',
        explanationEn: 'This still uses storage account keys rather than keyless managed identity access.',
      },
      {
        id: 'B',
        textJa: '「ストレージ アカウント キーへのアクセスを許可する (Allow storage account key access)」を Disabled に設定する。',
        textEn: 'Set "Allow storage account key access" to Disabled for all storage1 clients.',
        isCorrect: false,
        explanationJa: '【不正解】アカウント キーの禁止設定であり、App1 のマネージド ID に共有へのアクセス許可を付与するわけではありません（また管理者アクセスも影響を受けます）。',
        explanationEn: 'Disabling account key access does not grant App1 permission to the file share and would break key-based admin access.',
      },
      {
        id: 'C',
        textJa: 'Azure portal で「Microsoft Entra 認可を既定にする (Default to Microsoft Entra authorization)」を選択する。',
        textEn: 'Select "Default to Microsoft Entra authorization in the Azure portal" on storage1.',
        isCorrect: false,
        explanationJa: '【不正解】これは Azure portal 上での操作時の既定の認可方式を変更する設定であり、アプリのデータアクセス RBAC 権限を付与するものではありません。',
        explanationEn: 'This only changes the portal UI default authorization mode and does not grant App1 RBAC permissions.',
      },
      {
        id: 'D',
        textJa: 'App1 のマネージド ID に Storage File Data Privileged Reader ロールを割り当てる。',
        textEn: 'Assign the Storage File Data Privileged Reader role to the managed identity of App1.',
        isCorrect: true,
        explanationJa: '【正解】HTTP (FileREST API) 経由でマネージド ID により Azure Files にアクセスする場合、Storage File Data Privileged Reader（または Contributor 等）のデータ プレーン RBAC ロールを割り当てることでアカウント キーなしにアクセスできます。',
        explanationEn: 'Assigning Storage File Data Privileged Reader grants App1’s managed identity data-plane access to Azure Files via FileREST API without using storage account keys.',
      },
    ],
    overallExplanationJa: 'アプリケーションがマネージド ID (FileREST API) を用いてストレージ アカウント キーなしで Azure Files 共有にアクセスするには、該当 ID に対して「Storage File Data Privileged Reader」などのデータ プレーン Azure RBAC ロールを割り当てます。',
    overallExplanationEn: 'To enable keyless managed identity access to Azure Files over REST (FileREST API), assign a data-plane RBAC role such as Storage File Data Privileged Reader to App1’s managed identity.',
    keyPointsJa: [
      'REST 経由でマネージド ID から Azure Files にアクセスするにはデータ プレーン RBAC ロールが必要',
      'Storage File Data Privileged Reader はバックアップ セマンティクスでファイル/プロパティを読み取れる',
    ],
    keyPointsEn: [
      'FileREST API supports Microsoft Entra managed identity tokens with Azure RBAC',
      'Storage File Data Privileged Reader enables reading files without account keys',
    ],
    referenceTopic: 'Azure Files の Microsoft Entra RBAC 認可 (FileREST API)',
  },
  {
    id: 'pdf-q20',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Storage マルウェア検出結果の自動修復連携',
    titleEn: 'Automating Malware Remediation for Defender for Storage',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションがあり、storage1 という名前のストレージ アカウントが含まれています。Sub1 では Microsoft Defender for Storage が有効になっています。Defender for Storage ではマルウェア スキャンが有効になっています。
storage1 で検出されたマルウェアの修復を自動化するソリューションを構成する必要があります。`,
    scenarioEn: `You have an Azure subscription named Sub1 that contains a storage account named storage1. Microsoft Defender for Storage is enabled on Sub1 with malware scanning enabled.
You need to configure a solution that automates the remediation of malware detected in storage1.`,
    questionJa: 'ソリューションには何を含める必要がありますか。',
    questionEn: 'What should the solution include?',
    options: [
      {
        id: 'A',
        textJa: 'Application Insights',
        textEn: 'Application Insights',
        isCorrect: false,
        explanationJa: '【不正解】アプリケーションのテレメトリ監視ツールであり、マルウェアスキャン結果の自動修復トリガーには使いません。',
        explanationEn: 'Application Insights monitors application telemetry and does not route Defender malware scan events for remediation.',
      },
      {
        id: 'B',
        textJa: 'Azure Event Hubs',
        textEn: 'Azure Event Hubs',
        isCorrect: false,
        explanationJa: '【不正解】大規模ログ ストリーミング向けサービスであり、Defender for Storage のマルウェア検出イベントを関数や Logic Apps に配信する標準基盤は Event Grid です。',
        explanationEn: 'Event Hubs is for big-data streaming; Defender for Storage publishes malware scan events natively to Event Grid.',
      },
      {
        id: 'C',
        textJa: 'Azure Event Grid',
        textEn: 'Azure Event Grid',
        isCorrect: true,
        explanationJa: '【正解】Defender for Storage のマルウェア スキャンは検査結果を Azure Event Grid イベントとして発行します。Event Grid サブスクリプションで Malicious 結果を検出し、Logic Apps や Functions を起動して隔離・削除を自動化します。',
        explanationEn: 'Defender for Storage emits malware scan results to Azure Event Grid, allowing you to trigger Azure Functions or Logic Apps to quarantine or delete malicious blobs automatically.',
      },
      {
        id: 'D',
        textJa: 'Azure Policy',
        textEn: 'Azure Policy',
        isCorrect: false,
        explanationJa: '【不正解】Azure Policy はリソース設定の準拠管理用であり、検出された悪意のある BLOB に対する都度の修復処理は行えません。',
        explanationEn: 'Azure Policy governs resource configuration compliance, not per-blob malware remediation workflows.',
      },
    ],
    overallExplanationJa: 'Microsoft Defender for Storage のマルウェア スキャンで悪意あるファイルが検出された際の自動修復（隔離・削除など）は、スキャン結果イベント (Microsoft.Security.MalwareScanningResult) を Azure Event Grid 経由で Azure Functions や Logic Apps に配信して実装するのが標準アーキテクチャです。',
    overallExplanationEn: 'Automate Defender for Storage malware remediation by routing MalwareScanningResult events through Azure Event Grid to serverless workflows such as Azure Functions or Logic Apps.',
    keyPointsJa: [
      'Defender for Storage のスキャン結果は Azure Event Grid トピックに出力可能',
      'Event Grid サブスクリプションから悪意のある結果のみフィルターして自動修復処理を起動する',
    ],
    keyPointsEn: [
      'Defender for Storage publishes scan events directly to Azure Event Grid',
      'Filter for Malicious scan results in Event Grid to trigger automated quarantine/deletion',
    ],
    referenceTopic: 'Defender for Storage マルウェア スキャンと Event Grid 自動修復',
  },
];
