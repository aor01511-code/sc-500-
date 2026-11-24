import { PdfQuestionSeed } from './pdfCaseStudies';

export const PDF_QUESTIONS_PART8: PdfQuestionSeed[] = [
  {
    id: 'pdf-q141',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Key Vault の消去保護（Purge Protection）による完全削除の防止',
    titleEn: 'Preventing Permanent Deletion of Azure Key Vault with Purge Protection',
    scenarioJa:
      'Sub1 には Azure Key Vault（KV1）があります。管理者が誤ってまたは悪意を持って消去（パージ）操作を実行する権限を持っている場合でも、論理削除（Soft-delete）の保持期間が満了するまで KV1 およびその中のキー、シークレット、証明書を保持する必要があります。',
    scenarioEn:
      'Sub1 contains an Azure Key Vault named KV1. Even if an administrator has permissions to perform a purge operation accidentally or maliciously, you must retain KV1 and its keys, secrets, and certificates until the soft-delete retention period expires.',
    questionJa: 'どの設定を有効にすべきですか？',
    questionEn: 'Which setting should you enable?',
    options: [
      {
        id: 'A',
        textJa: 'KV1 の Defender for Key Vault を有効化する',
        textEn: 'Enable Defender for Key Vault',
        isCorrect: false,
        explanationJa:
          'Defender for Key Vault は不審なアクセスや異常な操作に対する脅威検知・アラートを提供しますが、論理削除中のパージ操作を技術的にブロックする機能ではありません。',
        explanationEn:
          'Defender for Key Vault provides threat detection and alerts for suspicious access, but does not technically block purge operations during the soft-delete period.',
      },
      {
        id: 'B',
        textJa: 'KV1 に CanNotDelete ロックを適用する',
        textEn: 'Apply a CanNotDelete lock to KV1',
        isCorrect: false,
        explanationJa:
          'CanNotDelete ロックは ARM リソースとしての削除は防ぎますが、Key Vault 内部のキー・シークレット・証明書の削除や、ロック解除権限を持つ管理者によるパージには対応できません。',
        explanationEn:
          'A CanNotDelete lock prevents deletion of the ARM resource itself, but does not protect individual keys, secrets, or certificates inside the vault or prevent an admin from removing the lock and purging.',
      },
      {
        id: 'C',
        textJa: 'KV1 で消去保護（Purge Protection）を有効にする',
        textEn: 'Enable Purge Protection on KV1',
        isCorrect: true,
        explanationJa:
          '消去保護（Purge Protection）を有効にすると、論理削除状態のボールトやオブジェクト（キー、シークレット、証明書）について、保持期間が満了するまで管理者であっても物理削除（パージ）を強制的に禁止できます。',
        explanationEn:
          'Enabling Purge Protection forces a mandatory retention period where deleted vaults and objects (keys, secrets, certificates) cannot be permanently purged even by administrators until the retention period expires.',
      },
      {
        id: 'D',
        textJa: 'KV1 の論理削除期間を 90 日に設定する',
        textEn: 'Set 90-day soft-delete retention',
        isCorrect: false,
        explanationJa:
          '保持期間を 90 日に延長しても、消去保護（Purge Protection）が無効な場合は権限を持つ管理者が即座にパージ（完全削除）を実行できてしまいます。',
        explanationEn:
          'Extending the soft-delete retention period to 90 days alone does not prevent an authorized administrator from immediately purging the vault or objects if Purge Protection is disabled.',
      },
    ],
    overallExplanationJa:
      'Azure Key Vault の「論理削除（Soft-delete）」と「消去保護（Purge Protection）」は組み合わせて機能します。消去保護を有効にすることで、保持期間が終了するまで誰も（サブスクリプション所有者であっても）データを完全に消去できなくなり、設定後は無効化もできないためコンプライアンスやランサムウェア対策として強力です。',
    overallExplanationEn:
      'Azure Key Vault Soft-delete and Purge Protection work together. Enabling Purge Protection prevents anyone—including subscription owners—from permanently purging deleted vaults or objects before the retention period ends, and cannot be disabled once turned on.',
    keyPointsJa: [
      '論理削除（Soft-delete）は削除後の復元を可能にするが、消去保護なしでは手動パージが可能',
      '消去保護（Purge Protection）を有効にすると保持期間満了まで完全削除を強制ブロックできる',
      '消去保護は一度有効化すると無効に戻せない不可逆設定である',
    ],
    keyPointsEn: [
      'Soft-delete allows recovery, but without Purge Protection authorized users can still purge immediately',
      'Purge Protection blocks permanent deletion until the soft-delete retention period expires',
      'Once enabled, Purge Protection cannot be disabled',
    ],
    referenceTopic: 'Azure Key Vault の論理削除と消去保護（Purge Protection）',
  },
  {
    id: 'pdf-q142',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure App Service における Key Vault 参照用のユーザー割り当てマネージド ID 指定',
    titleEn: 'Specifying User-Assigned Managed Identity for Key Vault References in App Service',
    scenarioJa:
      'Azure App Service（App1）には、システム割り当てマネージド ID が有効化されているほか、ユーザー割り当てマネージド ID（ID1）も割り当てられています。ID1 には Key Vault（KV1）のシークレットを読み取る権限が付与されており、App1 のアプリケーション設定では KV1 への Key Vault 参照（@Microsoft.KeyVault(...)）が構成されています。',
    scenarioEn:
      'An Azure App Service (App1) has a system-assigned managed identity enabled and a user-assigned managed identity (ID1) assigned. ID1 has permissions to read secrets from Key Vault (KV1), and App1 application settings are configured with Key Vault references (@Microsoft.KeyVault(...)) pointing to KV1.',
    questionJa:
      'App1 が Key Vault 参照を解決する際に、システム割り当てマネージド ID ではなく ID1 を使用するようにするにはどう構成すべきですか？',
    questionEn:
      'How should you configure App1 so that it uses ID1 instead of the system-assigned managed identity when resolving Key Vault references?',
    options: [
      {
        id: 'A',
        textJa: 'App1 のアプリケーション設定 AZURE_CLIENT_ID に ID1 のクライアント ID を設定する',
        textEn: 'Set the AZURE_CLIENT_ID application setting on App1 to the client ID of ID1',
        isCorrect: false,
        explanationJa:
          'AZURE_CLIENT_ID はアプリコード内の Azure Identity SDK（DefaultAzureCredential）が参照する環境変数であり、App Service プラットフォーム自体が Key Vault 参照を解決する際には使用されません。',
        explanationEn:
          'AZURE_CLIENT_ID is used by Azure Identity SDK inside application code, not by the App Service platform when resolving Key Vault references.',
      },
      {
        id: 'B',
        textJa: 'App1 の keyVaultReferenceIdentity プロパティに ID1 のプリンシパル ID（オブジェクト ID）を設定する',
        textEn: 'Set the keyVaultReferenceIdentity property of App1 to the principal ID (object ID) of ID1',
        isCorrect: false,
        explanationJa:
          'keyVaultReferenceIdentity プロパティに指定する値はプリンシパル ID ではなく、ユーザー割り当てマネージド ID の完全な ARM リソース ID である必要があります。',
        explanationEn:
          'The keyVaultReferenceIdentity property expects the full ARM resource ID of the user-assigned managed identity, not its principal (object) ID.',
      },
      {
        id: 'C',
        textJa: 'App1 の keyVaultReferenceIdentity プロパティに ID1 のクライアント ID を設定する',
        textEn: 'Set the keyVaultReferenceIdentity property of App1 to the client ID of ID1',
        isCorrect: false,
        explanationJa:
          'client ID（GUID）ではなく、/subscriptions/.../userAssignedIdentities/ID1 形式のリソース ID を指定する必要があります。',
        explanationEn:
          'You must specify the full ARM resource ID (/subscriptions/.../userAssignedIdentities/ID1), not the client ID.',
      },
      {
        id: 'D',
        textJa: 'App1 の keyVaultReferenceIdentity プロパティに ID1 のリソース ID を設定する',
        textEn: 'Set the keyVaultReferenceIdentity property of App1 to the resource ID of ID1',
        isCorrect: true,
        explanationJa:
          'App Service が Key Vault 参照を解決する際、既定ではシステム割り当てマネージド ID が使われます。ユーザー割り当てマネージド ID を使うには、サイト構成の keyVaultReferenceIdentity プロパティに ID1 の完全な ARM リソース ID を設定します。',
        explanationEn:
          'By default, App Service uses the system-assigned identity for Key Vault references. To use a user-assigned identity, set the site property keyVaultReferenceIdentity to the full ARM resource ID of ID1.',
      },
    ],
    overallExplanationJa:
      'Azure App Service や Azure Functions の Key Vault 参照はプラットフォーム機能によってアプリ起動前にシークレットをフェッチします。この認証に使用するマネージド ID を明示指定するためのサイトプロパティが `keyVaultReferenceIdentity` であり、値には対象ユーザー割り当てマネージド ID の ARM リソース ID を設定します。',
    overallExplanationEn:
      'Key Vault references in Azure App Service and Functions resolve secrets at the platform layer. The `keyVaultReferenceIdentity` site property controls which identity is used, and requires the full ARM resource ID of the user-assigned managed identity.',
    keyPointsJa: [
      'App Service の Key Vault 参照は既定で SystemAssigned ID を使用する',
      'keyVaultReferenceIdentity プロパティにユーザー割り当て ID の ARM リソース ID を指定する',
      'AZURE_CLIENT_ID はアプリコード内の SDK 向けでありプラットフォームの Key Vault 参照には効かない',
    ],
    keyPointsEn: [
      'Key Vault references default to SystemAssigned identity',
      'Set keyVaultReferenceIdentity to the full ARM resource ID of the user-assigned managed identity',
      'AZURE_CLIENT_ID applies only to in-app SDK calls, not platform Key Vault references',
    ],
    referenceTopic: 'App Service Key Vault 参照と keyVaultReferenceIdentity',
  },
  {
    id: 'pdf-q143',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Network Watcher の IP フロー検証による NSG ルールの評価',
    titleEn: 'Evaluating NSG Rules Using Network Watcher IP Flow Verify',
    scenarioJa:
      'Azure 仮想マシン VM1（IP: 10.0.1.4）から、サイト間（S2S）VPN 経由でオンプレミスサーバー（192.168.10.5）のポート 443 へ、送信元ポート 50000 を使用して通信できるか確認する必要があります。実際に通信を試行することなく、ネットワークセキュリティグループ（NSG）によってトラフィックが許可または拒否されるかと、一致する具体的な NSG ルールを特定したいと考えています。',
    scenarioEn:
      'You need to verify whether outbound traffic from Azure VM1 (10.0.1.4) using source port 50000 to an on-premises server (192.168.10.5) on port 443 over a Site-to-Site VPN is allowed or denied by Network Security Groups (NSGs), and identify the specific matching NSG rule without attempting live traffic.',
    questionJa: 'Azure Network Watcher のどの機能を使用すべきですか？',
    questionEn: 'Which Azure Network Watcher feature should you use?',
    options: [
      {
        id: 'A',
        textJa: '接続のトラブルシューティング（Connection troubleshoot）',
        textEn: 'Connection troubleshoot',
        isCorrect: false,
        explanationJa:
          '接続のトラブルシューティングは実際の接続テスト（エンドツーエンド疎通確認）を行いますが、オンプレミス宛先や単純な NSG 5タプル評価と一致ルール特定の専用機能としては IP フロー検証が適しています。',
        explanationEn:
          'Connection troubleshoot performs active end-to-end connectivity checks rather than a direct NSG 5-tuple allow/deny evaluation.',
      },
      {
        id: 'B',
        textJa: 'ネクストホップ（Next hop）',
        textEn: 'Next hop',
        isCorrect: false,
        explanationJa:
          'ネクストホップはルーティングテーブル（UDR やシステムルート）に基づく次の転送先を確認する機能であり、NSG による許可・拒否や一致ルールは評価しません。',
        explanationEn:
          'Next hop inspects effective routing to determine the next hop type and IP, not NSG security rule allow/deny decisions.',
      },
      {
        id: 'C',
        textJa: 'IP フロー検証（IP flow verify）',
        textEn: 'IP flow verify',
        isCorrect: true,
        explanationJa:
          'IP フロー検証（IP flow verify）は、送信元 IP/ポート、宛先 IP/ポート、プロトコル、方向を指定することで、トラフィックを実際に流さずに VM 適用 NSG による許可・拒否と一致したルール名を即座に判定できます。',
        explanationEn:
          'IP flow verify evaluates the 5-tuple (protocol, local/remote IP and port, direction) against effective NSG rules without sending live traffic and returns whether access is allowed or denied along with the matching rule.',
      },
      {
        id: 'D',
        textJa: 'VPN トラブルシューティング（VPN troubleshoot）',
        textEn: 'VPN troubleshoot',
        isCorrect: false,
        explanationJa:
          'VPN トラブルシューティングは Virtual Network Gateway や VPN 接続リソースの正常性を診断する機能であり、VM 単位の NSG ルール評価はできません。',
        explanationEn:
          'VPN troubleshoot diagnoses VPN gateway and connection health rather than evaluating VM-level NSG rules.',
      },
    ],
    overallExplanationJa:
      'Network Watcher の「IP フロー検証（IP flow verify）」は、5 タプル（方向・プロトコル・ローカル IP/ポート・リモート IP/ポート）を入力して VM の NIC/サブネットに適用された NSG ルールが通信を許可するか拒否するか、および該当ルール名をピンポイントで特定する診断ツールです。',
    overallExplanationEn:
      'Azure Network Watcher IP flow verify checks whether a packet is allowed or denied to or from a VM based on 5-tuple parameters and identifies the exact NSG security rule that matched.',
    keyPointsJa: [
      'IP フロー検証は実際に通信を発生させずに NSG の許可/拒否と一致ルール名を確認できる',
      'ネクストホップはルーティング確認、VPN トラブルシューティングはゲートウェイ診断用',
    ],
    keyPointsEn: [
      'IP flow verify checks NSG allow/deny and exact matching rule without sending traffic',
      'Next hop checks routing; VPN troubleshoot diagnoses gateway/connection health',
    ],
    referenceTopic: 'Azure Network Watcher - IP フロー検証（IP flow verify）',
  },
  {
    id: 'pdf-q144',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '保存済みアクセスポリシーを用いた Service SAS の動的な変更と失効',
    titleEn: 'Modifying and Revoking Service SAS Dynamically Using a Stored Access Policy',
    scenarioJa:
      'Azure Storage アカウント storage1 内の BLOB コンテナー container1 に対して、アプリケーション App1 に一時的なアクセス権を付与する Shared Access Signature（SAS）を発行する必要があります。運用要件として、SAS の再発行やストレージアカウントキーのローテーションを行うことなく、後から SAS の権限や有効期限を変更したり、有効期限前にアクセスを取り消したりできるようにする必要があります。',
    scenarioEn:
      'You need to issue a Shared Access Signature (SAS) granting App1 temporary access to container1 in Azure Storage account storage1. Operationally, you must be able to modify the permissions or expiration time of the SAS, or revoke it prior to expiration, without reissuing the SAS or rotating storage account keys.',
    questionJa: 'どの構成方法を選択すべきですか？',
    questionEn: 'Which approach should you use?',
    options: [
      {
        id: 'A',
        textJa: 'container1 に保存済みアクセスポリシー（Stored Access Policy）を作成し、それに紐づけた Service SAS を発行する',
        textEn: 'Create a stored access policy on container1 and issue a Service SAS linked to that policy',
        isCorrect: true,
        explanationJa:
          'コンテナー上に保存済みアクセスポリシー（Stored Access Policy）を定義し、そのポリシー識別子（si）を参照する Service SAS を発行すれば、SAS トークン自体を変更・再発行したりキーをローテーションしたりせず、ポリシー側の権限・期限変更や削除だけで即座に制御・失効できます。',
        explanationEn:
          'Creating a stored access policy on container1 and issuing a Service SAS linked to it lets you update permissions/expiry or revoke access immediately by modifying or deleting the policy without reissuing the SAS or rotating keys.',
      },
      {
        id: 'B',
        textJa: 'container1 の保存済みアクセスポリシーは使わず、アドホックな Service SAS を直接発行する',
        textEn: 'Do not create a stored access policy and issue an ad-hoc Service SAS directly',
        isCorrect: false,
        explanationJa:
          'アドホックな Service SAS は URL 自体に権限と有効期限が署名されているため、期限前に取り消すにはストレージアカウントキーをローテーションする必要があります。',
        explanationEn:
          'An ad-hoc Service SAS embeds permissions and expiry in the signed URL; revoking it early requires rotating the storage account key.',
      },
      {
        id: 'C',
        textJa: 'container1 に保存済みアクセスポリシーを作成し、それに紐づけた Account SAS を発行する',
        textEn: 'Create a stored access policy on container1 and issue an Account SAS linked to it',
        isCorrect: false,
        explanationJa:
          'Account SAS は保存済みアクセスポリシーに関連付けることができません。保存済みアクセスポリシーを利用できるのは Service SAS のみです。',
        explanationEn:
          'Account SAS cannot be associated with a stored access policy; only Service SAS supports stored access policies.',
      },
      {
        id: 'D',
        textJa: 'container1 に保存済みアクセスポリシーを作成し、それに紐づけた User Delegation SAS を発行する',
        textEn: 'Create a stored access policy on container1 and issue a User Delegation SAS linked to it',
        isCorrect: false,
        explanationJa:
          'Microsoft Entra 資格情報で署名する User Delegation SAS も保存済みアクセスポリシーには対応していません。',
        explanationEn:
          'User Delegation SAS (signed with Microsoft Entra credentials) does not support stored access policies.',
      },
    ],
    overallExplanationJa:
      'Azure Storage で SAS を発行後に再配布やキーローテーションなしで権限変更・即時失効を行いたい場合、対象リソース（例: BLOB コンテナー）に「保存済みアクセスポリシー（Stored Access Policy）」を作成し、それを参照する「Service SAS」を発行します。Account SAS と User Delegation SAS は保存済みアクセスポリシーと併用できません。',
    overallExplanationEn:
      'To modify or revoke a SAS after issuance without rotating account keys or reissuing tokens, define a Stored Access Policy on the container and issue a Service SAS referencing it. Neither Account SAS nor User Delegation SAS supports stored access policies.',
    keyPointsJa: [
      '保存済みアクセスポリシーと連携できるのは Service SAS のみ',
      'ポリシーの権限変更・有効期限変更・削除により紐づく SAS を即時に変更/失効できる',
      'Account SAS や User Delegation SAS は保存済みアクセスポリシーに対応していない',
    ],
    keyPointsEn: [
      'Only Service SAS supports Stored Access Policies',
      'Updating or deleting the policy dynamically updates or revokes linked SAS tokens',
      'Account SAS and User Delegation SAS cannot reference Stored Access Policies',
    ],
    referenceTopic: 'Azure Storage SAS と保存済みアクセスポリシー',
  },
  {
    id: 'pdf-q145',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Shared Key アクセス無効化による Account/Service SAS の遮断と User Delegation SAS の維持',
    titleEn: 'Blocking Account/Service SAS While Preserving User Delegation SAS via Shared Key Disablement',
    scenarioJa:
      '汎用 v2 ストレージアカウント storage1 では、複数のアプリケーションが Account SAS、Service SAS、および User Delegation SAS（いずれも有効期限内）を使用してデータにアクセスしています。セキュリティ強化のため、User Delegation SAS によるアクセスは引き続き許可したまま、Account SAS および Service SAS によるアクセスをすべて拒否する必要があります。',
    scenarioEn:
      'In general-purpose v2 storage account storage1, applications access data using Account SAS, Service SAS, and User Delegation SAS (all unexpired). To strengthen security, you must deny all access using Account SAS and Service SAS while continuing to allow access using User Delegation SAS.',
    questionJa: 'どの設定を構成すべきですか？',
    questionEn: 'Which setting should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'storage1 の defaultToOAuthAuthentication プロパティを true に設定する',
        textEn: 'Set the defaultToOAuthAuthentication property of storage1 to true',
        isCorrect: false,
        explanationJa:
          'defaultToOAuthAuthentication は Azure Portal 上の既定の認証方式表示を Entra ID に切り替えるだけであり、共有キーや Account/Service SAS によるアクセス自体は拒否されません。',
        explanationEn:
          'defaultToOAuthAuthentication only changes the default authentication method in the Azure portal UI and does not block Shared Key, Account SAS, or Service SAS.',
      },
      {
        id: 'B',
        textJa: 'storage1 でカスタマーマネージドキー（CMK）による暗号化を有効にする',
        textEn: 'Enable encryption with Customer-Managed Keys (CMK) on storage1',
        isCorrect: false,
        explanationJa:
          'CMK は保存データの暗号化キー管理に関する設定であり、SAS トークンの種類ごとの認可制御には関与しません。',
        explanationEn:
          'CMK manages at-rest encryption keys and does not control authorization by SAS token type.',
      },
      {
        id: 'C',
        textJa: 'storage1 の allowBlobPublicAccess プロパティを false に設定する',
        textEn: 'Set the allowBlobPublicAccess property of storage1 to false',
        isCorrect: false,
        explanationJa:
          'allowBlobPublicAccess=false は匿名パブリックアクセスを禁止する設定であり、ストレージアカウントキー署名付きの Account SAS や Service SAS は引き続き機能します。',
        explanationEn:
          'allowBlobPublicAccess=false disables anonymous public access but does not block Account SAS or Service SAS.',
      },
      {
        id: 'D',
        textJa: 'storage1 の allowSharedKeyAccess プロパティを false に設定する',
        textEn: 'Set the allowSharedKeyAccess property of storage1 to false',
        isCorrect: true,
        explanationJa:
          'Account SAS と Service SAS はストレージアカウントの共有キー（Shared Key）で署名されているため、allowSharedKeyAccess を false に設定すると両方がすべて拒否されます。一方、Microsoft Entra 資格情報で署名される User Delegation SAS は影響を受けず引き続き許可されます。',
        explanationEn:
          'Account SAS and Service SAS are signed with the storage account Shared Key, so setting allowSharedKeyAccess to false denies both. User Delegation SAS is signed with Microsoft Entra credentials and continues to work.',
      },
    ],
    overallExplanationJa:
      'Azure Storage の `allowSharedKeyAccess` を `false` にすると、Shared Key（アクセスキー）認証およびそれで署名された Account SAS / Service SAS のすべてが拒否されます。Entra ID で署名される User Delegation SAS と Entra OAuth アクセスはそのまま維持されるため、ベストプラクティスとして推奨されます。',
    overallExplanationEn:
      'Setting `allowSharedKeyAccess` to `false` on an Azure Storage account blocks Shared Key authentication as well as Account SAS and Service SAS tokens, while permitting Microsoft Entra OAuth and User Delegation SAS.',
    keyPointsJa: [
      'Account SAS と Service SAS は Shared Key 署名のため allowSharedKeyAccess=false で無効化される',
      'User Delegation SAS は Microsoft Entra ID 署名のため引き続き利用可能',
      'defaultToOAuthAuthentication はポータル UI の既定動作変更のみでブロック効果はない',
    ],
    keyPointsEn: [
      'Setting allowSharedKeyAccess=false blocks Account SAS and Service SAS',
      'User Delegation SAS relies on Microsoft Entra credentials and remains permitted',
      'defaultToOAuthAuthentication only affects portal defaults without enforcing access denial',
    ],
    referenceTopic: 'Azure Storage Shared Key アクセス無効化（allowSharedKeyAccess）',
  },
  {
    id: 'pdf-q146',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Database のサーバーレベル監査による一元的な監査ログ収集',
    titleEn: 'Centralizing Audit Log Collection via Azure SQL Server-Level Auditing',
    scenarioJa:
      'Azure SQL Server（Server1）には DB1 と DB2 の 2 つのデータベースがあり、現在 Server1 および各データベースの監査機能は無効になっています。DB1 と DB2、さらに今後 Server1 上に新規作成されるすべてのデータベースについて、成功・失敗したデータベース認証および完了した SQL バッチイベントを最小限の管理労力で収集する必要があります。',
    scenarioEn:
      'An Azure SQL Server (Server1) hosts two databases, DB1 and DB2, and auditing is currently disabled at both server and database levels. You must collect successful and failed database authentications and completed SQL batch events for DB1, DB2, and any future databases created on Server1 with minimal administrative effort.',
    questionJa: 'どの手順を実行すべきですか？',
    questionEn: 'Which action should you take?',
    options: [
      {
        id: 'A',
        textJa: 'DB1 と DB2 の両方で個別にデータベース監査を有効にする',
        textEn: 'Enable database auditing on DB1 and DB2',
        isCorrect: false,
        explanationJa:
          '個別のデータベースごとに設定すると管理労力が増え、さらに今後 Server1 に新規作成されるデータベースには自動的に適用されません。',
        explanationEn:
          'Configuring database-level auditing per database requires extra effort and does not automatically cover future databases created on Server1.',
      },
      {
        id: 'B',
        textJa: 'Server1 上で Microsoft Defender for SQL を有効にする',
        textEn: 'Enable Defender for SQL on Server1',
        isCorrect: false,
        explanationJa:
          'Defender for SQL は脆弱性評価や異常検知アラートを提供しますが、SQL バッチ実行履歴などの包括的な監査ログ（SQLSecurityAuditEvents）を収集する機能ではありません。',
        explanationEn:
          'Defender for SQL provides vulnerability assessment and threat alerts, not comprehensive audit log collection for authentications and completed SQL batches.',
      },
      {
        id: 'C',
        textJa: 'Server1 でサーバーレベルの監査（Server-level auditing）を有効にする',
        textEn: 'Enable server-level auditing on Server1',
        isCorrect: true,
        explanationJa:
          'Azure SQL Server でサーバーレベルの監査を有効にすると、サーバー上の既存データベース（DB1、DB2）および今後新規作成されるすべてのデータベースに自動的に継承・適用され、既定の監査アクショングループで認証イベントや完了したバッチイベントを収集できます。',
        explanationEn:
          'Enabling auditing at the server level on Server1 automatically applies to all existing databases (DB1, DB2) and any future databases created on the server, capturing authentication and batch completion events with minimal effort.',
      },
      {
        id: 'D',
        textJa: 'Server1 の master DB のみ診断設定を有効にする',
        textEn: 'Enable diagnostic settings on master DB',
        isCorrect: false,
        explanationJa:
          'master データベースの診断設定だけでは DB1・DB2 や将来のユーザーデータベース内の SQL バッチイベントは収集されません。',
        explanationEn:
          'Configuring diagnostic settings on the master database alone does not collect SQL batch events inside user databases like DB1 and DB2.',
      },
    ],
    overallExplanationJa:
      'Azure SQL Auditing では「サーバーレベル」で監査を有効にすると、そのサーバー配下の既存・新規すべてのデータベースに対して監査ポリシーが一括継承されます。既定のアクショングループには `SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP`、`FAILED_DATABASE_AUTHENTICATION_GROUP`、`BATCH_COMPLETED_GROUP` が含まれるため最小限の設定で要件を満たせます。',
    overallExplanationEn:
      'Enabling Azure SQL Auditing at the server level automatically applies auditing policies to all existing and future databases on the logical server, capturing successful/failed authentications and completed batches under default action groups.',
    keyPointsJa: [
      'サーバーレベル監査を有効にすると既存 DB および今後作成されるすべての DB に自動適用される',
      '既定の監査アクショングループに認証成功・失敗およびバッチ完了が含まれる',
    ],
    keyPointsEn: [
      'Server-level auditing covers all existing and future databases on the logical server',
      'Default audit action groups capture authentication success/failure and completed SQL batches',
    ],
    referenceTopic: 'Azure SQL Server 監査ポリシー',
  },
  {
    id: 'pdf-q147',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Server における顧客管理キー（CMK）を用いた TDE プロテクターの構成',
    titleEn: 'Configuring Customer-Managed Key TDE Protector on Azure SQL Server',
    scenarioJa:
      'Azure SQL Server（Server1）上のデータベースでは、現在サービス管理キーを使用した Transparent Data Encryption（TDE）が有効になっています。Azure Key Vault（Vault1）には暗号鍵（Key1）が作成済みです。Server1 上のデータベースの暗号化キー（DEK）を、サーバーレベルで一元的に Vault1 の Key1 で保護するように変更する必要があります。',
    scenarioEn:
      'Databases on Azure SQL Server (Server1) currently use service-managed Transparent Data Encryption (TDE). An encryption key (Key1) has been created in Azure Key Vault (Vault1). You must change the configuration so that the Database Encryption Keys (DEKs) for databases on Server1 are centrally protected at the server level using Key1 from Vault1.',
    questionJa: 'どの設定を構成すべきですか？',
    questionEn: 'Which configuration should you apply?',
    options: [
      {
        id: 'A',
        textJa: '各データベースで Always Encrypted の列マスターキー（CMK）として Key1 を構成する',
        textEn: 'Configure Key1 as the Always Encrypted column master key (CMK) on each database',
        isCorrect: false,
        explanationJa:
          'Always Encrypted は特定の機密列をクライアント側で暗号化する機能であり、保存データ全体の暗号化（TDE）の DEK を保護する設定ではありません。',
        explanationEn:
          'Always Encrypted encrypts specific sensitive columns client-side and does not govern TDE database encryption keys.',
      },
      {
        id: 'B',
        textJa: 'Server1 の Transparent Data Encryption プロテクターとして Vault1 の Key1 を構成する',
        textEn: 'Configure Key1 in Vault1 as the Transparent Data Encryption (TDE) protector on Server1',
        isCorrect: true,
        explanationJa:
          'Azure SQL Server の「Transparent Data Encryption」ブレードで顧客管理キー（BYOK/CMK）を選択し、Vault1 の Key1 を TDE プロテクターとして指定することで、Server1 上のデータベースの DEK をサーバーレベルで一元的に保護できます。',
        explanationEn:
          'Selecting Customer-managed key in Server1 Transparent Data Encryption settings and specifying Key1 from Vault1 as the TDE protector centrally protects DEKs at the server level.',
      },
      {
        id: 'C',
        textJa: 'Server1 から参照される Vault1 の暗号鍵 Key1 に対して自動ローテーションポリシーを有効化する',
        textEn: 'Configure an automatic cryptographic key rotation policy in Vault1 for Key1 on Server1',
        isCorrect: false,
        explanationJa:
          'Key1 のローテーションポリシーを設定しても、Server1 の TDE プロテクターとして Key1 が割り当てられていなければ TDE はサービス管理キーのままです。',
        explanationEn:
          'Configuring key rotation in Key Vault alone does not switch Server1 from service-managed TDE to Customer-Managed Key TDE.',
      },
      {
        id: 'D',
        textJa: 'Server1 の設定で使用可能な Key Vault キーとして Key1 を追加登録するのみにする',
        textEn: 'Only register Key1 as an available Key Vault key on Server1 without setting it as the TDE protector',
        isCorrect: false,
        explanationJa:
          'キーを登録しただけでは実際の暗号化プロテクターとして有効化されず、サービス管理キーでの DEK 保護が継続されます。',
        explanationEn:
          'Simply adding a key without setting it as the active TDE protector keeps service-managed TDE active.',
      },
    ],
    overallExplanationJa:
      'Azure SQL Database で顧客管理キー（CMK）による TDE をサーバー単位で一元適用するには、Azure Key Vault のキー（Key1）へのアクセス権をサーバーのマネージド ID に付与したうえで、SQL Server リソースの「Transparent Data Encryption」設定でそのキーを「TDE プロテクター」として構成します。',
    overallExplanationEn:
      'To enforce Customer-Managed Key (CMK) TDE centrally at the Azure SQL Server level, grant the server managed identity key permissions in Key Vault and configure the key as the server TDE protector.',
    keyPointsJa: [
      'SQL Server レベルで TDE プロテクター（CMK）を設定すると配下 DB の DEK が保護される',
      'Always Encrypted の列マスターキーは TDE とは別の列単位暗号化機能',
    ],
    keyPointsEn: [
      'Setting the TDE protector at the SQL Server level centrally protects DEKs with a CMK',
      'Always Encrypted CMK is separate from TDE',
    ],
    referenceTopic: 'Azure SQL TDE（Transparent Data Encryption）と顧客管理キー',
  },
  {
    id: 'pdf-q148',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Virtual Network Manager（AVNM）セキュリティ管理規則による NSG の強制上書き',
    titleEn: 'Overriding NSG Rules Using Azure Virtual Network Manager Security Admin Rules',
    scenarioJa:
      'Azure Virtual Network Manager（AVNM）を使用してネットワークグループ Group1 内の複数仮想ネットワークを管理しています。Group1 配下のサブネットには既にネットワークセキュリティグループ（NSG）が適用されており、インターネットから TCP ポート 22（SSH）への受信トラフィックを許可する優先度 100 の NSG ルールが存在します。この SSH トラフィックを NSG のルール評価より先に強制的にブロックする必要があります。',
    scenarioEn:
      'You manage multiple virtual networks in network group Group1 using Azure Virtual Network Manager (AVNM). Subnets in Group1 already have NSGs applied containing a priority 100 rule allowing inbound TCP port 22 (SSH) from the Internet. You need to forcibly block this SSH traffic before NSG rules are evaluated.',
    questionJa: 'AVNM のセキュリティ管理構成でどのルールを作成すべきですか？',
    questionEn: 'Which rule should you create in the AVNM security admin configuration?',
    options: [
      {
        id: 'A',
        textJa: '受信（Inbound）方向で優先度 200、アクションが Deny（拒否）のセキュリティ管理規則（Security admin rule）を作成する',
        textEn: 'Create an inbound security admin rule with priority 200 and action Deny',
        isCorrect: true,
        explanationJa:
          'AVNM のセキュリティ管理規則（Security admin rules）は、各サブネットや NIC の NSG よりも常に先に評価されます。したがって優先度の数値にかかわらず、アクションを「Deny（拒否）」としたセキュリティ管理規則を定義すれば、NSG の優先度 100 許可ルールに到達する前に通信がブロックされます。',
        explanationEn:
          'AVNM security admin rules are always evaluated before any NSG rules. A security admin rule with action Deny blocks matching inbound traffic before the priority 100 NSG allow rule is ever reached.',
      },
      {
        id: 'B',
        textJa: '各サブネットの NSG に優先度 200、アクションが Deny の受信セキュリティ規則を追加する',
        textEn: 'Add an inbound Deny security rule with priority 200 to each subnet NSG',
        isCorrect: false,
        explanationJa:
          'NSG 内では数値が小さいほど優先度が高いため、優先度 100 の許可ルールが先に一致してしまい、優先度 200 の拒否ルールには到達しません。',
        explanationEn:
          'Within an NSG, lower numbers have higher priority, so the existing priority 100 Allow rule takes precedence over a priority 200 Deny rule.',
      },
      {
        id: 'C',
        textJa: '受信（Inbound）方向で優先度 200、アクションが Always allow のセキュリティ管理規則を作成する',
        textEn: 'Create an inbound security admin rule with priority 200 and action Always allow',
        isCorrect: false,
        explanationJa:
          'Always allow はトラフィックを拒否ではなく強制許可するアクションであるため要件の逆になります。',
        explanationEn:
          'Always allow forcibly permits traffic regardless of NSGs, which is the opposite of blocking SSH.',
      },
      {
        id: 'D',
        textJa: '受信（Inbound）方向で優先度 200、アクションが Allow（許可）のセキュリティ管理規則を作成する',
        textEn: 'Create an inbound security admin rule with priority 200 and action Allow',
        isCorrect: false,
        explanationJa:
          'Allow は NSG 評価へパスする許可アクションであり、SSH をブロックすることはできません。',
        explanationEn:
          'Allow passes evaluation onward to NSGs rather than denying the traffic.',
      },
    ],
    overallExplanationJa:
      'Azure Virtual Network Manager（AVNM）の「セキュリティ管理規則（Security admin rules）」は NSG より上位レイヤーで先に評価されます。アクションには `Deny`（即座に拒否し NSG は見ない）、`Always allow`（即座に許可し NSG は見ない）、`Allow`（許可した上で後続の NSG ルール評価へ渡す）の 3 種類があります。',
    overallExplanationEn:
      'AVNM Security admin rules are always evaluated before subnet/NIC NSGs. Action `Deny` immediately drops traffic before NSGs are evaluated, `Always allow` immediately permits it, and `Allow` defers final evaluation to NSGs.',
    keyPointsJa: [
      'AVNM セキュリティ管理規則は NSG より前に評価されるため、NSG の優先度番号に関わらず強制適用できる',
      'ブロックしたい場合はアクション「Deny」を選択する',
      '「Allow」は NSG 評価に委譲し、「Always allow」は NSG をスキップして許可する',
    ],
    keyPointsEn: [
      'AVNM security admin rules are evaluated before NSGs regardless of NSG priority numbers',
      'Use action Deny to forcibly block traffic before NSG evaluation',
      'Allow passes traffic to NSG evaluation; Always allow bypasses NSGs',
    ],
    referenceTopic: 'Azure Virtual Network Manager（AVNM）セキュリティ管理規則',
  },
  {
    id: 'pdf-q149',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure VM 上の SQL Server に対する脅威保護プランの選択',
    titleEn: 'Selecting the Threat Protection Plan for SQL Server on Azure VMs',
    scenarioJa:
      'Azure サブスクリプション Sub1 には、IaaS 仮想マシン VM1 上に SQL Server がインストールされ稼働しています。SQL インジェクション攻撃や異常なデータベースアクセスなどの潜在的な脅威を検出する必要があります。',
    scenarioEn:
      'Azure subscription Sub1 contains virtual machine VM1 with SQL Server installed and running on it. You need to detect potential threats such as SQL injection attacks and anomalous database access.',
    questionJa: 'Sub1 でどの Microsoft Defender for Cloud プランを有効にすべきですか？',
    questionEn: 'Which Microsoft Defender for Cloud plan should you enable on Sub1?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Open-Source Relational Databases',
        textEn: 'Microsoft Defender for Open-Source Relational Databases',
        isCorrect: false,
        explanationJa:
          'PostgreSQL や MySQL、MariaDB などの Azure マネージドオープンソース DB 向けプランであり、VM 上の Microsoft SQL Server は対象外です。',
        explanationEn:
          'This plan covers Azure managed open-source relational databases like PostgreSQL and MySQL, not SQL Server on VMs.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Defender for Azure Cosmos DB',
        textEn: 'Microsoft Defender for Azure Cosmos DB',
        isCorrect: false,
        explanationJa: 'Azure Cosmos DB アカウント専用の脅威保護プランです。',
        explanationEn: 'This plan only protects Azure Cosmos DB accounts.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Defender for Azure SQL Databases',
        textEn: 'Microsoft Defender for Azure SQL Databases',
        isCorrect: false,
        explanationJa:
          'こちらは PaaS である Azure SQL Database や Azure SQL Managed Instance を対象とするプランであり、VM 上の SQL Server（IaaS）は対象外です。',
        explanationEn:
          'This plan protects PaaS Azure SQL Database and SQL Managed Instance, not SQL Server running on VMs.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for SQL Servers on Machines',
        textEn: 'Microsoft Defender for SQL Servers on Machines',
        isCorrect: true,
        explanationJa:
          'Azure VM、Azure Arc 対応サーバー、オンプレミスまたは他社クラウドのマシン上で稼働する SQL Server に対して SQL インジェクション検知や脆弱性評価を提供するプランは「Microsoft Defender for SQL Servers on Machines」です。',
        explanationEn:
          'Microsoft Defender for SQL Servers on Machines protects SQL Server instances hosted on Azure VMs, Azure Arc-enabled servers, and other machines against SQL injection and anomalous access.',
      },
      {
        id: 'E',
        textJa: 'Microsoft Defender for Servers Plan 2',
        textEn: 'Microsoft Defender for Servers Plan 2',
        isCorrect: false,
        explanationJa:
          'Defender for Servers は OS やエンドポイントレベルの保護を行いますが、SQL クエリ解析による SQL インジェクションや異常な DB アクセス検知は SQL プランが担当します。',
        explanationEn:
          'Defender for Servers protects the OS/host layer rather than performing SQL-specific threat detection such as SQL injection.',
      },
    ],
    overallExplanationJa:
      'Defender for Databases には保護対象リソースに応じた 4 つのサブプランがあります。Azure VM やオンプレミス上の SQL Server を保護する場合は **Microsoft Defender for SQL Servers on Machines** を有効にします。PaaS の Azure SQL Database 用プランと混同しないことが重要です。',
    overallExplanationEn:
      'Within Defender for Databases, SQL Server running on IaaS VMs or Arc-enabled machines is protected by **Microsoft Defender for SQL Servers on Machines**, distinct from the PaaS **Azure SQL Databases** plan.',
    keyPointsJa: [
      'VM 上（IaaS）および Arc 上の SQL Server には Defender for SQL Servers on Machines を使用する',
      'PaaS の Azure SQL Database / SQL MI には Defender for Azure SQL Databases を使用する',
    ],
    keyPointsEn: [
      'Use Defender for SQL Servers on Machines for IaaS/VM/Arc SQL Server instances',
      'Use Defender for Azure SQL Databases for PaaS Azure SQL offerings',
    ],
    referenceTopic: 'Microsoft Defender for SQL Servers on Machines',
  },
  {
    id: 'pdf-q150',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'VM 上の SQL Server と Azure Cosmos DB を保護する Defender プラン（複数選択）',
    titleEn: 'Defender Plans for SQL Server on VMs and Azure Cosmos DB (Multi-Select)',
    requiredSelections: 2,
    scenarioJa:
      'Azure サブスクリプション Sub1 には、SQL Server がインストールされた仮想マシン VM1 と、Azure Cosmos DB for NoSQL アカウント Account1 がデプロイされています。これら 2 つのデータリソースに対する脅威保護と脆弱性・異常検知を有効にする必要があります。',
    scenarioEn:
      'Azure subscription Sub1 contains a virtual machine VM1 with SQL Server installed and an Azure Cosmos DB for NoSQL account named Account1. You need to enable threat protection for both data resources.',
    questionJa: 'Sub1 で有効にすべき 2 つの Microsoft Defender for Cloud プランはどれですか？（2つ選択）',
    questionEn: 'Which two Microsoft Defender for Cloud plans should you enable on Sub1? (Choose 2)',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Storage',
        textEn: 'Microsoft Defender for Storage',
        isCorrect: false,
        explanationJa: 'Storage アカウント向けのプランであり、SQL Server や Cosmos DB は対象外です。',
        explanationEn: 'Defender for Storage protects Azure Storage accounts, not SQL Server or Cosmos DB.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Defender for SQL Servers on Machines',
        textEn: 'Microsoft Defender for SQL Servers on Machines',
        isCorrect: true,
        explanationJa:
          'VM1 上にインストールされた SQL Server を保護するには Microsoft Defender for SQL Servers on Machines を有効にします。',
        explanationEn:
          'Microsoft Defender for SQL Servers on Machines protects the SQL Server instance running on VM1.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Defender for Azure Cosmos DB',
        textEn: 'Microsoft Defender for Azure Cosmos DB',
        isCorrect: true,
        explanationJa:
          'Azure Cosmos DB for NoSQL アカウント（Account1）を保護するには Microsoft Defender for Azure Cosmos DB を有効にします。',
        explanationEn:
          'Microsoft Defender for Azure Cosmos DB protects the Cosmos DB for NoSQL account Account1.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Open-Source Relational Databases',
        textEn: 'Microsoft Defender for Open-Source Relational Databases',
        isCorrect: false,
        explanationJa: 'PostgreSQL/MySQL/MariaDB 向けのプランであり該当しません。',
        explanationEn: 'This plan targets PostgreSQL, MySQL, and MariaDB rather than SQL Server or Cosmos DB.',
      },
      {
        id: 'E',
        textJa: 'Microsoft Defender for Azure SQL Databases',
        textEn: 'Microsoft Defender for Azure SQL Databases',
        isCorrect: false,
        explanationJa: 'PaaS の Azure SQL DB 向けであり、VM 上の SQL Server には適用されません。',
        explanationEn: 'This plan applies to PaaS Azure SQL Database/MI, not SQL Server installed on VM1.',
      },
    ],
    overallExplanationJa:
      'リソース構成に正確に対応したプランを選択します。VM 上の SQL Server には **Microsoft Defender for SQL Servers on Machines**、Azure Cosmos DB for NoSQL には **Microsoft Defender for Azure Cosmos DB** がそれぞれ対応します。',
    overallExplanationEn:
      'Match each workload to its dedicated Defender for Databases subplan: **Microsoft Defender for SQL Servers on Machines** for SQL Server on VM1, and **Microsoft Defender for Azure Cosmos DB** for Account1.',
    keyPointsJa: [
      'VM 上の SQL Server → Microsoft Defender for SQL Servers on Machines',
      'Azure Cosmos DB for NoSQL → Microsoft Defender for Azure Cosmos DB',
    ],
    keyPointsEn: [
      'SQL Server on VM -> Microsoft Defender for SQL Servers on Machines',
      'Azure Cosmos DB -> Microsoft Defender for Azure Cosmos DB',
    ],
    referenceTopic: 'Defender for Databases サブプランのマッピング',
  },
  {
    id: 'pdf-q151',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Defender for Storage のアップロード時マルウェアスキャンと BLOB インデックスタグ連携',
    titleEn: 'Defender for Storage On-Upload Malware Scanning with Blob Index Tags',
    scenarioJa:
      'Microsoft Defender for Storage が有効化されたストレージアカウント storage1（階層型名前空間 HNS は無効）があります。新しくアップロードされたすべてのブロック BLOB を自動的にマルウェアスキャンし、外部のアプリケーションが BLOB のコピーやカスタムのスキャン起動コードを追加することなく、Azure Blob Storage API のみを呼び出して各 BLOB のスキャン結果（クリーン/悪意あり）を読み取れるようにする必要があります。',
    scenarioEn:
      'Storage account storage1 (with Hierarchical Namespace disabled) has Microsoft Defender for Storage enabled. You must automatically scan all newly uploaded block blobs for malware and allow an external application to read each blob scan result using only the Azure Blob Storage API, without copying blobs or adding custom scan-triggering code.',
    questionJa: '使用するスキャン方式とスキャン結果の出力先の正しい組み合わせはどれですか？',
    questionEn: 'Which combination of scan method and output destination should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'スキャン方式: アップロード時のマルウェアスキャン（On-upload malware scanning） / 出力先: BLOB インデックスタグ（Blob index tags）',
        textEn: 'Scan method: On-upload malware scanning / Output destination: Blob index tags',
        isCorrect: true,
        explanationJa:
          'アップロード時のマルウェアスキャンにより新規ブロック BLOB をカスタムコードなしで自動スキャンし、結果を BLOB インデックスタグとして各 BLOB メタデータに書き込むことで、アプリは標準の Azure Blob Storage API のみでスキャン結果を取得できます（HNS 無効アカウントで利用可能）。',
        explanationEn:
          'On-upload malware scanning automatically scans newly uploaded block blobs without custom trigger code, and writing results to Blob index tags enables applications to read scan verdicts directly via standard Blob Storage API calls.',
      },
      {
        id: 'B',
        textJa: 'スキャン方式: オンデマンドマルウェアスキャン（On-demand malware scanning） / 出力先: Log Analytics（Log Analytics workspace）',
        textEn: 'Scan method: On-demand malware scanning / Output destination: Log Analytics workspace',
        isCorrect: false,
        explanationJa:
          'オンデマンドスキャンは手動またはコードからの起動が必要であり、また Log Analytics 出力は Blob Storage API だけでは読み取れません。',
        explanationEn:
          'On-demand scanning requires manual or programmatic initiation, and Log Analytics results cannot be read via Blob Storage API alone.',
      },
      {
        id: 'C',
        textJa: 'スキャン方式: オンデマンドマルウェアスキャン（On-demand malware scanning） / 出力先: Event Grid（Azure Event Grid topic）',
        textEn: 'Scan method: On-demand malware scanning / Output destination: Azure Event Grid topic',
        isCorrect: false,
        explanationJa:
          '自動スキャンされず、Event Grid も Blob Storage API だけで読み取れる保存先ではありません。',
        explanationEn:
          'On-demand scanning is not automatic on upload, and Event Grid is an event bus rather than readable via Blob Storage API.',
      },
      {
        id: 'D',
        textJa: 'スキャン方式: アップロード時のマルウェアスキャン（On-upload malware scanning） / 出力先: Log Analytics（Log Analytics workspace）',
        textEn: 'Scan method: On-upload malware scanning / Output destination: Log Analytics workspace',
        isCorrect: false,
        explanationJa:
          'Log Analytics ワークスペースへの出力を読み取るには Log Analytics API が必要になり、Blob Storage API のみという要件に反します。',
        explanationEn:
          'Reading from Log Analytics requires Log Analytics queries/APIs rather than only the Azure Blob Storage API.',
      },
      {
        id: 'E',
        textJa: 'スキャン方式: アップロード時のマルウェアスキャン（On-upload malware scanning） / 出力先: Event Grid（Azure Event Grid topic）',
        textEn: 'Scan method: On-upload malware scanning / Output destination: Azure Event Grid topic',
        isCorrect: false,
        explanationJa:
          'Event Grid はイベント配信用であり、任意の時点でアプリが Blob Storage API を使って BLOB ごとのスキャン結果を参照する用途には適しません。',
        explanationEn:
          'Event Grid pushes event notifications rather than storing scan verdicts directly on the blob for Blob Storage API reads.',
      },
      {
        id: 'F',
        textJa: 'スキャン方式: オンデマンドマルウェアスキャン（On-demand malware scanning） / 出力先: BLOB インデックスタグ（Blob index tags）',
        textEn: 'Scan method: On-demand malware scanning / Output destination: Blob index tags',
        isCorrect: false,
        explanationJa:
          'オンデマンドスキャンではアップロード時に自動スキャンが行われません。',
        explanationEn:
          'On-demand scanning does not automatically scan blobs upon upload.',
      },
    ],
    overallExplanationJa:
      'Defender for Storage のマルウェアスキャンにおいて、新規アップロードをトリガーにするのが「アップロード時のマルウェアスキャン（On-upload malware scanning）」です。さらに結果を「BLOB インデックスタグ（Blob index tags）」に付与（既定で有効、HNS 無効アカウント対応）しておけば、アプリ側は標準の Blob Storage API でタグ（例: Malware Scanning scan result）を確認するだけで検疫や取得可否を判断できます。',
    overallExplanationEn:
      'On-upload malware scanning in Defender for Storage automatically scans every newly uploaded blob. With Blob index tags enabled (supported when HNS is disabled), scan verdicts are stored directly as tags on the blob and readable using standard Azure Blob Storage API calls.',
    keyPointsJa: [
      'アップロード時の自動スキャンには On-upload malware scanning を使用する',
      'BLOB インデックスタグに結果を出力すれば、追加のコピーや別 API なしで Blob Storage API のみで結果参照できる',
      'BLOB インデックスタグは HNS（階層型名前空間）が無効な標準 BLOB ストレージで利用可能',
    ],
    keyPointsEn: [
      'Use On-upload malware scanning for automatic scanning upon blob upload',
      'Outputting to Blob index tags allows reading verdicts using only the Blob Storage API',
      'Blob index tags are supported on storage accounts with Hierarchical Namespace disabled',
    ],
    referenceTopic: 'Defender for Storage マルウェアスキャンと BLOB インデックスタグ',
  },
  {
    id: 'pdf-q152',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Server における Microsoft Entra 管理者の最初の設定',
    titleEn: 'Setting a Microsoft Entra Administrator First on Azure SQL Server',
    scenarioJa:
      '現在 SQL Server 認証の管理者のみが構成されている Azure SQL Server（Server1）とデータベース DB1 があります。Microsoft Entra ユーザー Admin1 が Microsoft Entra 認証で DB1 に接続し、さらに他の Microsoft Entra ユーザー用に包含データベースユーザー（Contained database users）を作成できるようにする必要があります。',
    scenarioEn:
      'An Azure SQL Server (Server1) hosting database DB1 currently has only a SQL Server authentication administrator configured. You need to allow Microsoft Entra user Admin1 to connect to DB1 using Microsoft Entra authentication and create contained database users for other Microsoft Entra users.',
    questionJa: '最初に実行すべき手順はどれですか？',
    questionEn: 'What should you do first?',
    options: [
      {
        id: 'A',
        textJa: 'Admin1 に Microsoft Entra ID の Directory Readers ロールを割り当てる',
        textEn: 'Assign the Directory Readers role in Microsoft Entra ID to Admin1',
        isCorrect: false,
        explanationJa:
          '包含データベースユーザー作成時に SQL Server 自身が Entra ID を参照するために、SQL Server のマネージド ID へ Directory Readers 権限を与えるケースはありますが、そもそも Server1 に Microsoft Entra 管理者が設定されていなければ Entra 認証での接続自体ができません。',
        explanationEn:
          'Directory Readers is granted to the SQL Server identity (not typically Admin1) to resolve principals, and Entra authentication cannot be used at all until an Entra admin is configured on Server1.',
      },
      {
        id: 'B',
        textJa: 'Server1 で「Microsoft Entra 専用認証のみ（Microsoft Entra-only authentication）」を有効にする',
        textEn: 'Enable Microsoft Entra-only authentication on Server1',
        isCorrect: false,
        explanationJa:
          'Microsoft Entra 管理者を構成する前に Entra 専用認証を有効化することはできず、まず Microsoft Entra 管理者を設定する必要があります。',
        explanationEn:
          'You cannot enable Microsoft Entra-only authentication before configuring a Microsoft Entra administrator on the server.',
      },
      {
        id: 'C',
        textJa: 'Server1 で Admin1 に SQL Server Contributor ロールを割り当てる',
        textEn: 'Assign SQL Server Contributor RBAC role to Admin1 on Server1',
        isCorrect: false,
        explanationJa:
          'SQL Server Contributor はコントロールプレーン（Azure リソース管理）のロールであり、データベースデータプレーンへの Entra ログインや包含ユーザー作成権限は付与されません。',
        explanationEn:
          'SQL Server Contributor is a control-plane RBAC role and does not grant data-plane SQL login or permission to create contained database users.',
      },
      {
        id: 'D',
        textJa: 'Server1 の Microsoft Entra 管理者（Microsoft Entra admin）として Admin1 を設定する',
        textEn: 'Set Admin1 as the Microsoft Entra admin on Server1',
        isCorrect: true,
        explanationJa:
          'Azure SQL Server で Microsoft Entra 認証を利用するには、最初にサーバーレベルで Microsoft Entra 管理者を設定する必要があります。Admin1 を Microsoft Entra 管理者に指定すると、Admin1 は DB1 に Entra 認証でサインインし、他の Entra ユーザー用の包含データベースユーザーを作成できるようになります。',
        explanationEn:
          'To use Microsoft Entra authentication on Azure SQL Server, you must first configure a Microsoft Entra admin on the server. Setting Admin1 as the Microsoft Entra admin allows Admin1 to sign in with Entra authentication and create contained database users.',
      },
    ],
    overallExplanationJa:
      'Azure SQL Database で Microsoft Entra 認証を有効にする最初のステップは、Azure SQL Server リソース上で「Microsoft Entra 管理者（Microsoft Entra admin）」を指定することです。Entra 管理者はすべてのデータベースに対してフル権限を持ち、Entra ID ベースの包含データベースユーザー（`CREATE USER [user@domain] FROM EXTERNAL PROVIDER`）を作成する起点となります。',
    overallExplanationEn:
      'Before any Microsoft Entra user can sign in to Azure SQL Database or create contained database users (`FROM EXTERNAL PROVIDER`), a Microsoft Entra administrator must first be provisioned on the logical Azure SQL Server.',
    keyPointsJa: [
      'SQL 認証のみのサーバーで Entra 認証を使うには最初に Microsoft Entra 管理者を設定する',
      'Azure RBAC ロール（SQL Server Contributor 等）ではデータベース内部のログイン・ユーザー作成はできない',
    ],
    keyPointsEn: [
      'Configure a Microsoft Entra admin on the Azure SQL Server as the prerequisite step',
      'Control-plane RBAC roles do not grant SQL data-plane access',
    ],
    referenceTopic: 'Azure SQL Database の Microsoft Entra 認証構成',
  },
  {
    id: 'pdf-q153',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ピアリングされた VNet 間での Private Endpoint 用プライベート DNS ゾーンの名前解決',
    titleEn: 'Private DNS Zone Resolution for Private Endpoints Across Peered VNets',
    scenarioJa:
      '仮想ネットワーク VNet1 と VNet2 は VNet ピアリングで接続されており、VNet1 には既定の Azure DNS が構成された仮想マシン VM1 が配置されています。VNet2 には Azure SQL Server（Server1）のプライベートエンドポイントが作成され、プライベート DNS ゾーン `privatelink.database.windows.net` が VNet2 にのみリンクされています。現在 VM1 から Server1 にアクセスしようとするとパブリック IP に解決されてしまいます。',
    scenarioEn:
      'Virtual networks VNet1 and VNet2 are connected via VNet peering. VNet1 uses default Azure DNS and hosts VM1. VNet2 contains a Private Endpoint for Azure SQL Server (Server1), and the private DNS zone `privatelink.database.windows.net` is linked only to VNet2. Currently, VM1 resolves server1.database.windows.net to its public IP address.',
    questionJa:
      'VM1 が `server1.database.windows.net` を VNet2 内のプライベートエンドポイントのプライベート IP アドレスに解決できるようにするには、何を設定すべきですか？',
    questionEn:
      'What should you configure so that VM1 resolves server1.database.windows.net to the Private Endpoint private IP address in VNet2?',
    options: [
      {
        id: 'A',
        textJa: 'VNet1 と VNet2 間の VNet ピアリング設定で「転送されたトラフィックを許可（Forwarded traffic）」を有効にする',
        textEn: 'Enable forwarded traffic across the virtual network peering link between VNet1 and VNet2',
        isCorrect: false,
        explanationJa:
          'Forwarded traffic は NVA 等を経由するルーティング転送に関する設定であり、Azure DNS のプライベート DNS ゾーン名前解決範囲には影響しません。',
        explanationEn:
          'Forwarded traffic controls routing of packets forwarded from outside a peered VNet and does not affect private DNS zone resolution.',
      },
      {
        id: 'B',
        textJa: 'パブリック Azure DNS サービス上にカスタムのパブリック DNS ゾーン database.windows.net を新規作成して公開する',
        textEn: 'Create and publish a new public Azure DNS zone named database.windows.net in the tenant',
        isCorrect: false,
        explanationJa:
          'Azure のパブリックドメインをプライベート環境の名前解決目的で作成することは適切ではなく、Private Endpoint の CNAME 解決には機能しません。',
        explanationEn:
          'Creating a public zone for `database.windows.net` does not resolve Private Endpoint CNAME records to private IPs.',
      },
      {
        id: 'C',
        textJa: 'プライベート DNS ゾーン `privatelink.database.windows.net` に VNet1 への仮想ネットワークリンク（Virtual network link）を追加する',
        textEn: 'Add a virtual network link to VNet1 on the `privatelink.database.windows.net` private DNS zone',
        isCorrect: true,
        explanationJa:
          'Azure DNS プライベートゾーンの名前解決を利用するすべての VNet は、そのプライベート DNS ゾーンへ仮想ネットワークリンクされている必要があります。VNet ピアリングで接続されていても DNS ゾーンは自動共有されないため、VNet1 のリンクを追加することで VM1 もプライベート IP へ解決できるようになります。',
        explanationEn:
          'Every VNet using Azure DNS that needs to resolve records in a Private DNS zone must have a virtual network link to that zone. VNet peering alone does not extend DNS resolution; linking VNet1 resolves the Private Endpoint private IP.',
      },
      {
        id: 'D',
        textJa: 'プライベート DNS ゾーン内の VNet2 仮想ネットワークリンク設定で自動登録（Auto-registration）を有効にする',
        textEn: 'Enable VM hostname auto-registration on the existing virtual network link for VNet2',
        isCorrect: false,
        explanationJa:
          '自動登録は VM ホスト名の A レコード自動登録機能であり、ピアリング先の VNet1 が VNet2 側のプライベート DNS ゾーンを参照できるようにはなりません。',
        explanationEn:
          'Auto-registration registers VM hostnames in the zone for VNet2 and does not allow VNet1 to query the private DNS zone.',
      },
    ],
    overallExplanationJa:
      'ハブ＆スポークや VNet ピアリング構成で別 VNet にあるプライベートエンドポイントへ名前解決させる場合、該当の `privatelink.*` プライベート DNS ゾーンに対して、クライアント VM が存在する VNet（VNet1）からも「仮想ネットワークリンク（Virtual network link）」を追加する必要があります（自動登録はオフで構いません）。',
    overallExplanationEn:
      'In peered VNet topologies, VNet peering provides L3 IP connectivity but not DNS resolution. To resolve a Private Endpoint in VNet2 from VM1 in VNet1, link VNet1 to the `privatelink.database.windows.net` Private DNS zone.',
    keyPointsJa: [
      'VNet ピアリングだけではプライベート DNS ゾーンの名前解決は共有されない',
      '名前解決を必要とするクライアント側の VNet にも仮想ネットワークリンクを追加する必要がある',
    ],
    keyPointsEn: [
      'VNet peering does not automatically share Private DNS zone resolution',
      'Add a virtual network link for VNet1 to the Private DNS zone',
    ],
    referenceTopic: 'Azure Private Endpoint とピアリング VNet 間のプライベート DNS 解決',
  },
  {
    id: 'pdf-q154',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'クロステナントでのプライベートエンドポイント接続要求の承認',
    titleEn: 'Approving Cross-Tenant Private Endpoint Connection Requests',
    scenarioJa:
      'テナント Tenant1 にはパブリックネットワークアクセスが無効化された Azure Storage アカウント storage1 があります。別テナント Tenant2 の管理者（storage1 に対する Azure RBAC 権限を持たない）が、Tenant2 の VNet1 内に storage1 のリソース ID を指定してプライベートエンドポイントを作成しました。プライベートエンドポイントのプロビジョニング状態は Succeeded であり DNS 解決も正しく行われていますが、Tenant2 から storage1 に接続できません。',
    scenarioEn:
      'Tenant1 contains an Azure Storage account (storage1) with public network access disabled. An administrator in a separate tenant, Tenant2 (who has no Azure RBAC permissions on storage1), created a Private Endpoint in Tenant2 VNet1 targeting the resource ID of storage1. The Private Endpoint provisioning state is Succeeded and DNS resolution works, yet Tenant2 cannot connect to storage1.',
    questionJa: '接続を成功させるために Tenant1 の管理者は何を実施すべきですか？',
    questionEn: 'What should the Tenant1 administrator do to establish the connection?',
    options: [
      {
        id: 'A',
        textJa: 'storage1 のネットワーク設定でパブリックネットワークアクセスを再び有効に変更する',
        textEn: 'Re-enable public network access inside storage1 firewall settings',
        isCorrect: false,
        explanationJa:
          'プライベートエンドポイント経由の通信にパブリックネットワークアクセスの有効化は不要であり、セキュリティ低下につながります。',
        explanationEn:
          'Public network access does not need to be enabled for Private Endpoint traffic.',
      },
      {
        id: 'B',
        textJa: 'Tenant2 でプライベートエンドポイントを作成したユーザーに、プライベートエンドポイント上の Reader ロールを割り当てる',
        textEn: 'Assign the Reader role on the Private Endpoint to the user in Tenant2',
        isCorrect: false,
        explanationJa:
          'プライベートエンドポイント自体への Reader 権限を付与しても、ストレージアカウント側の接続承認状態は変わりません。',
        explanationEn:
          'Assigning RBAC on the Private Endpoint does not approve the connection on the target storage account.',
      },
      {
        id: 'C',
        textJa: 'VNet1 に関連付けられた NSG で storage1 への送信許可ルールを追加作成する',
        textEn: 'Add an explicit outbound allow rule to storage1 on the VNet1 NSG',
        isCorrect: false,
        explanationJa:
          '既定の NSG ではインターネット/VNet 送信は許可されており、クロステナントで接続が通らない原因は NSG ではありません。',
        explanationEn:
          'NSGs are not the reason a cross-tenant Private Endpoint fails to establish traffic.',
      },
      {
        id: 'D',
        textJa: 'storage1 の「プライベートエンドポイント接続」から該当の保留中（Pending）接続要求を承認（Approve）する',
        textEn: 'Approve the pending private endpoint connection request on storage1',
        isCorrect: true,
        explanationJa:
          'ターゲットリソース（storage1）に対する RBAC 権限を持たないユーザーや別テナントの管理者がプライベートエンドポイントを作成した場合、接続状態は「保留中（Pending）」となり通信できません。storage1 の管理者がプライベートエンドポイント接続要求を明示的に「承認（Approve）」することで通信が開通します。',
        explanationEn:
          'When a Private Endpoint is created by a user or cross-tenant admin without RBAC permissions on the target resource, the connection enters a Pending state. The storage1 administrator must explicitly approve the Private Endpoint connection request.',
      },
    ],
    overallExplanationJa:
      'Azure Private Link の手動承認フローでは、接続先リソースへの RBAC 権限（例: Network Contributor 相当の承認権）を持たない場合や別テナントからの作成時、リソース ID のみを指定して作成すると接続ステータスが `Pending` になります。リソース所有者側（Tenant1）が「プライベートエンドポイント接続（Private endpoint connections）」ブレードで `Approve` を行う必要があります。',
    overallExplanationEn:
      'When creating a Private Endpoint via resource ID without RBAC permissions on the target resource (such as across tenants), the Private Link connection waits in `Pending` state until the resource owner in Tenant1 approves it.',
    keyPointsJa: [
      '権限のないユーザーやクロステナントからの PE 作成は自動承認されず「Pending（保留中）」になる',
      'ターゲットリソース側（storage1）のネットワーク設定から接続を「承認（Approve）」する必要がある',
    ],
    keyPointsEn: [
      'Cross-tenant or unauthorized Private Endpoint requests enter a Pending approval state',
      'The target resource owner must explicitly Approve the connection request',
    ],
    referenceTopic: 'Azure Private Link の手動承認フローとクロステナント接続',
  },
  {
    id: 'pdf-q155',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'パブリックネットワークアクセス無効化による既存 IP ルールを保持した PE 限定制限',
    titleEn: 'Restricting Storage Access to Private Endpoints While Preserving IP Rules',
    scenarioJa:
      'Azure Storage アカウント storage1 は現在「すべてのネットワークから有効」でパブリックアクセスが許可されており、ファイアウォールには既存の許可済み IP ルールも登録されています。VM1 は承認済みの Blob 用プライベートエンドポイント経由で接続しており、オンプレミスのクライアントは許可済みパブリック IP 経由でアクセスしています。既存の IP ルール設定を削除せずに保持したまま、storage1 の Blob サービスへのアクセスを既存のプライベートエンドポイント経由のみに制限する必要があります。',
    scenarioEn:
      'Azure Storage account storage1 currently allows public access from all networks and has existing IP firewall rules configured. VM1 connects via an approved Blob Private Endpoint, while on-premises clients use an allowed public IP. Without deleting the existing IP rules configuration, you must restrict access to storage1 Blob service exclusively to the existing Private Endpoint.',
    questionJa: 'どの設定を変更すべきですか？',
    questionEn: 'Which setting should you modify?',
    options: [
      {
        id: 'A',
        textJa: 'storage1 の publicNetworkAccess プロパティを Disabled（無効）に設定する',
        textEn: 'Set the publicNetworkAccess property of storage1 to Disabled',
        isCorrect: true,
        explanationJa:
          'storage1 の `publicNetworkAccess` を `Disabled` に変更すると、既存の IP ルールや VNet ルール定義自体は削除せず保持したまま、パブリックエンドポイント経由のすべてのアクセス（許可済み IP 含む）を遮断し、承認済みプライベートエンドポイント経由のトラフィックのみを許可できます。',
        explanationEn:
          'Setting `publicNetworkAccess` to `Disabled` blocks all traffic over the public endpoint—including allowed IP rules—while preserving those rule definitions and permitting access exclusively through approved Private Endpoints.',
      },
      {
        id: 'B',
        textJa: 'storage1 の allowSharedKeyAccess プロパティを false に設定する',
        textEn: 'Set the allowSharedKeyAccess property of storage1 to false',
        isCorrect: false,
        explanationJa:
          '共有キーアクセスの無効化は認証方式を制限するだけで、パブリックネットワーク経由の Entra ID アクセスなどをプライベートエンドポイント限定にはできません。',
        explanationEn:
          'Disabling Shared Key access restricts authentication methods rather than blocking public network connectivity.',
      },
      {
        id: 'C',
        textJa: 'storage1 の networkAcls.defaultAction を Deny に設定する',
        textEn: 'Set networkAcls.defaultAction on storage1 to Deny',
        isCorrect: false,
        explanationJa:
          'defaultAction を Deny に変更しただけでは、既存の許可済み IP ルールに一致するオンプレミスからのパブリックアクセスが引き続き許可されてしまいます。',
        explanationEn:
          'Setting defaultAction to Deny still permits traffic matching the existing allowed IP firewall rules.',
      },
      {
        id: 'D',
        textJa: 'storage1 の networkAcls.bypass を AzureServices のみに設定する',
        textEn: 'Set networkAcls.bypass on storage1 to AzureServices',
        isCorrect: false,
        explanationJa:
          'bypass 設定は信頼された Azure サービスの例外を制御するものであり、許可済み IP ルール経由のアクセスは防げません。',
        explanationEn:
          'networkAcls.bypass controls trusted Azure service exceptions and does not block allowed IP rules.',
      },
    ],
    overallExplanationJa:
      'Azure Storage で構成済みのファイアウォール IP ルールを削除せずに残したまま、パブリックアクセスを一時停止／完全遮断してプライベートエンドポイントのみを許可したい場合は、`publicNetworkAccess` を `Disabled` に設定します。これにより `networkAcls` 内のルール一覧を保持しつつ、プライベートエンドポイント以外の全経路がブロックされます。',
    overallExplanationEn:
      'Setting `publicNetworkAccess` to `Disabled` on Azure Storage enforces exclusive Private Endpoint connectivity while leaving existing `networkAcls` IP rules intact in configuration.',
    keyPointsJa: [
      'publicNetworkAccess = Disabled にすると IP ファイアウォールルールを残したままパブリック経路を完全に遮断できる',
      'networkAcls.defaultAction = Deny では既存の許可 IP ルールが引き続き有効になる',
    ],
    keyPointsEn: [
      'publicNetworkAccess=Disabled blocks all public endpoint access while keeping IP rules preserved',
      'networkAcls.defaultAction=Deny still allows traffic from configured IP rules',
    ],
    referenceTopic: 'Azure Storage のパブリックネットワークアクセス無効化と PE 限定',
  },
  {
    id: 'pdf-q156',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: '同一リージョン内の Azure VM と Azure Storage 間のアクセス制御（IP ルール vs サービスエンドポイント）',
    titleEn: 'Access Control Between Same-Region Azure VM and Storage (IP Rules vs Service Endpoint)',
    scenarioJa:
      '同一の Azure リージョン内に仮想マシン VM1 と Azure Storage アカウント storage1 がデプロイされています。VM1 には静的パブリック IP アドレスが割り当てられています。storage1 は「選択された仮想ネットワークと IP アドレスからの有効」に設定されていますが、現在 VNet ルールやサービスエンドポイントは設定されていません。\n\n**提案された解決策**: storage1 のファイアウォール設定に VM1 の静的パブリック IP アドレスを IP 許可ルールとして追加することで、VM1 から storage1 へアクセスできるようにする。',
    scenarioEn:
      'Virtual machine VM1 and Azure Storage account storage1 are deployed in the same Azure region. VM1 has a static public IP address assigned. storage1 is configured for Selected virtual networks and IP addresses, with no VNet rules or service endpoints currently configured.\n\n**Proposed Solution**: Add VM1 static public IP address as an IP allow rule on the storage1 firewall to grant VM1 access.',
    questionJa: 'この提案された解決策は要件を満たしていますか？',
    questionEn: 'Does this proposed solution meet the goal?',
    options: [
      {
        id: 'A',
        textJa: 'はい（Yes）',
        textEn: 'Yes',
        isCorrect: false,
        explanationJa:
          '同一リージョン内の Azure VM から Azure Storage へのトラフィックは Azure 内部のバックボーンを通り、送信元 IP には VM のパブリック IP ではなくプライベート IP が使用されます。そのためパブリック IP ルールを追加してもブロックされます。',
        explanationEn:
          'Traffic between an Azure VM and a Storage account in the same region routes over Azure internal backbone using private IP addresses, not the VM public IP.',
      },
      {
        id: 'B',
        textJa: 'いいえ（No）',
        textEn: 'No',
        isCorrect: true,
        explanationJa:
          'VM1 と storage1 が同じ Azure リージョンにある場合、通信は Azure 内部ネットワークを経由し、Storage 側には VM のプライベート IP として到達します。そのため VM1 の静的パブリック IP を IP ファイアウォールに追加しても一致せず拒否されます。正しく許可するには VM1 のサブネットで `Microsoft.Storage` サービスエンドポイントを有効にし、storage1 側に VNet ルールを追加する（または Private Endpoint を使用する）必要があります。',
        explanationEn:
          'Because VM1 and storage1 are in the same Azure region, traffic uses private Azure IP addresses rather than the VM public IP, so a public IP firewall rule will not match. You must configure a Service Endpoint for Microsoft.Storage with a VNet rule (or use a Private Endpoint).',
      },
    ],
    overallExplanationJa:
      'Azure Storage のネットワークファイアウォールにおける重要な仕様として、**同一リージョン内（およびペアリージョン間の特定経路）**の Azure VM からストレージへの通信は Azure 内部のプライベート IP が使われるため、パブリック IP ベースの許可ルールでは許可できません。この場合はサブネット上でサービスエンドポイントを有効化して VNet ルールを追加するか、Private Endpoint を構成します。',
    overallExplanationEn:
      'A classic Azure Storage networking behavior: IP network rules only apply to traffic arriving via public IP addresses. Same-region Azure VMs communicate with Azure Storage over internal private IPs, requiring a VNet Service Endpoint rule or a Private Endpoint instead.',
    keyPointsJa: [
      '同一リージョン内の VM から Storage への通信は内部プライベート IP を使用するため、VM のパブリック IP ルールは機能しない',
      '同一リージョン VM を許可するには Microsoft.Storage サービスエンドポイント＋VNet ルールまたは Private Endpoint が必要',
    ],
    keyPointsEn: [
      'Same-region VM-to-Storage traffic uses private internal IPs, so public IP firewall rules do not apply',
      'Use a Microsoft.Storage Service Endpoint with VNet rules or a Private Endpoint',
    ],
    referenceTopic: 'Azure Storage IP ネットワークルールの制限（同一リージョン VM）',
  },
  {
    id: 'pdf-q157',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure API Management AI Gateway の llm-token-limit ポリシーによるサブスクリプション別トークン制限',
    titleEn: 'Enforcing Per-Subscription Token Limits Across APIs with APIM llm-token-limit',
    scenarioJa:
      '単一リージョンにデプロイされた Azure API Management（APIM1）を AI ゲートウェイとして使用し、Microsoft Foundry（旧 Azure AI Foundry）の複数のチャット API を公開しています。各クライアントアプリケーションは専用の APIM サブスクリプションを使用しています。APIM1 を通じて公開されているすべての API を合算し、アプリケーション（サブスクリプション）単位で 1 分あたりの合計トークン数（入力トークン＋出力トークンの合計）に上限を設ける必要があります。',
    scenarioEn:
      'You use a single-region Azure API Management instance (APIM1) as an AI Gateway exposing multiple Microsoft Foundry chat APIs. Each client application uses a dedicated APIM subscription. Across all APIs exposed through APIM1, you must enforce a 1-minute combined token limit (input tokens + output tokens) per application (subscription).',
    questionJa: 'どのポリシーとカウンタキー式（counter-key）の組み合わせを使用すべきですか？',
    questionEn: 'Which combination of policy and counter-key expression should you use?',
    options: [
      {
        id: 'A',
        textJa: 'ポリシー: rate-limit-by-key / キー式: @(context.Api.Id)',
        textEn: 'Policy: rate-limit-by-key / Counter-key: @(context.Api.Id)',
        isCorrect: false,
        explanationJa:
          'rate-limit-by-key は HTTP リクエスト回数を制限するポリシーであり、LLM のトークン消費量（入力＋出力トークン）は制限できません。また context.Api.Id は API 単位のキーです。',
        explanationEn:
          'rate-limit-by-key limits HTTP request counts rather than LLM tokens, and context.Api.Id scopes to API rather than application subscription.',
      },
      {
        id: 'B',
        textJa: 'ポリシー: rate-limit-by-key / キー式: @(context.Subscription.Id)',
        textEn: 'Policy: rate-limit-by-key / Counter-key: @(context.Subscription.Id)',
        isCorrect: false,
        explanationJa:
          'rate-limit-by-key はリクエスト回数制限用であり、トークン数ベースの制限には使用できません。',
        explanationEn:
          'rate-limit-by-key restricts request counts, not combined LLM input/output token usage.',
      },
      {
        id: 'C',
        textJa: 'ポリシー: llm-token-limit / キー式: @(context.Subscription.Id)',
        textEn: 'Policy: llm-token-limit / Counter-key: @(context.Subscription.Id)',
        isCorrect: true,
        explanationJa:
          'APIM の AI ゲートウェイ機能である `llm-token-limit` ポリシーは、LLM API 呼び出しの入力（prompt）トークンと出力（completion）トークンの合計をカウントして制限します。また `counter-key` に `@(context.Subscription.Id)` を指定してグローバル（All APIs）スコープに適用することで、すべての公開 API を横断してアプリケーション（サブスクリプション）単位で 1 分あたりのトークン上限を課すことができます。',
        explanationEn:
          'The APIM `llm-token-limit` policy enforces limits on combined prompt (input) and completion (output) tokens. Setting `counter-key="@(context.Subscription.Id)"` at global scope enforces the 1-minute token quota per subscription across all exposed APIs.',
      },
      {
        id: 'D',
        textJa: 'ポリシー: llm-token-limit / キー式: @(context.Api.Id)',
        textEn: 'Policy: llm-token-limit / Counter-key: @(context.Api.Id)',
        isCorrect: false,
        explanationJa:
          'context.Api.Id をキーにすると API ごとにカウントが分かれてしまい、全 API 合算かつアプリ（サブスクリプション）ごとの制限になりません。',
        explanationEn:
          'Using context.Api.Id tracks tokens per individual API rather than aggregating across all APIs per subscription.',
      },
    ],
    overallExplanationJa:
      'Azure API Management の AI ゲートウェイポリシー `llm-token-limit`（または `azure-openai-token-limit` の汎用版）は、LLM のプロンプト＋完了トークン合計を制御できます。複数の API を横断して利用側アプリケーション（専用サブスクリプション）ごとに制限をかける場合は、All APIs スコープで `counter-key="@(context.Subscription.Id)"` を指定します。',
    overallExplanationEn:
      'Azure APIM AI Gateway provides `llm-token-limit` to cap combined prompt and completion tokens over a sliding/fixed window (`tokens-per-minute`). Using `counter-key="@(context.Subscription.Id)"` aggregates consumption across all APIs per subscriber application.',
    keyPointsJa: [
      'トークン数（入力＋出力）の制限には llm-token-limit ポリシーを使用する（rate-limit-by-key はリクエスト数制限）',
      'アプリ（サブスクリプション）単位で全 API 合算制限するには counter-key="@(context.Subscription.Id)" を使用する',
    ],
    keyPointsEn: [
      'Use llm-token-limit (not rate-limit-by-key) to limit combined input and output LLM tokens',
      'Use @(context.Subscription.Id) as the counter-key to aggregate per application across all APIs',
    ],
    referenceTopic: 'APIM AI Gateway の llm-token-limit ポリシー',
  },
  {
    id: 'pdf-q158',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Defender for AI Services の「不審なプロンプトの証拠（Suspicious prompt evidence）」設定',
    titleEn: 'Enabling Suspicious Prompt Evidence in Defender for AI Services',
    scenarioJa:
      'Azure サブスクリプション Sub1 にデプロイされた Azure OpenAI リソース AOAI1 に対して、Microsoft Defender for AI Services が有効になっています。今後生成されるセキュリティアラートの詳細画面において、攻撃者となるユーザーが送信した実際のプロンプト内容をセキュリティアナリストが確認できるようにする必要があります。',
    scenarioEn:
      'Microsoft Defender for AI Services is enabled for an Azure OpenAI resource (AOAI1) deployed in subscription Sub1. You must ensure that security analysts can view the actual attacking user prompt content within the details of future security alerts.',
    questionJa: 'どの設定を有効にすべきですか？',
    questionEn: 'Which setting should you enable?',
    options: [
      {
        id: 'A',
        textJa: 'AOAI1 リソースを対象とした監査検索（Audit）設定を Microsoft Purview コンプライアンス側で有効にする',
        textEn: 'Enable audit log searching for AOAI1 prompts inside Microsoft Purview Audit',
        isCorrect: false,
        explanationJa:
          'Purview 監査は M365 等でのアクセス監査や Copilot 会話ログ等に使われますが、Defender for Cloud の AI セキュリティアラート詳細画面に攻撃プロンプト本文を埋め込む機能ではありません。',
        explanationEn:
          'Purview Audit does not populate raw attacking prompt content into Microsoft Defender for Cloud AI security alert details.',
      },
      {
        id: 'B',
        textJa: 'Defender for AI Services プランの設定で「不審なプロンプトの証拠（Suspicious prompt evidence）」を有効にする',
        textEn: 'Enable "Suspicious prompt evidence" in the Defender for AI Services plan settings',
        isCorrect: true,
        explanationJa:
          'Defender for AI Services はプライバシー保護のため、既定ではアラート詳細にユーザープロンプト本文を含めません。プラン設定で「不審なプロンプトの証拠（Suspicious prompt evidence）」を有効にすることで、プロンプトインジェクション等に関するアラートのエンティティ・証拠として攻撃者のプロンプト内容を確認できるようになります。',
        explanationEn:
          'For privacy protection, Defender for AI Services omits prompt text from alerts by default. Enabling "Suspicious prompt evidence" in the AI Services plan settings includes the triggering user prompt content in future alert details.',
      },
      {
        id: 'C',
        textJa: 'AOAI1 リソースに割り当てたコンテンツフィルターでプロンプトシールド（Prompt Shields）ブロックを有効にする',
        textEn: 'Enable Prompt Shields attack blocking in the content filter assigned to AOAI1',
        isCorrect: false,
        explanationJa:
          'プロンプトシールドはジェイルブレイクや間接プロンプトインジェクションをリアルタイムに遮断する機能であり、Defender アラート詳細へのプロンプト本文記録設定ではありません。',
        explanationEn:
          'Prompt Shields blocks jailbreak/injection attacks inline in the content filter rather than attaching prompt evidence to Defender for Cloud alerts.',
      },
      {
        id: 'D',
        textJa: 'AOAI1 の診断設定を使用してすべてのリソースログを Log Analytics ワークスペースに送信する',
        textEn: 'Send AOAI1 resource logs to a Log Analytics workspace using diagnostic settings',
        isCorrect: false,
        explanationJa:
          '診断設定のリソースログはリクエスト数・レイテンシ等の診断情報やメタデータを記録しますが、標準ではプロンプト本文そのものは含まれず、Defender アラート画面への統合表示にもなりません。',
        explanationEn:
          'Standard diagnostic resource logs capture telemetry/metadata without raw prompt text and do not add prompt evidence to Defender alert details.',
      },
    ],
    overallExplanationJa:
      'Microsoft Defender for Cloud の **Microsoft Defender for AI Services** プラン設定には、セキュリティアラート内で実際に攻撃を引き起こしたプロンプトの抜粋／内容を証拠として確認できるようにする「**不審なプロンプトの証拠（Suspicious prompt evidence）**」トグル（オプトイン機能）があります。',
    overallExplanationEn:
      'In Defender for Cloud, the **Microsoft Defender for AI Services** plan includes an opt-in **Suspicious prompt evidence** setting. When enabled, future AI threat alerts include the suspicious prompt snippet/content so SOC analysts can inspect the attack vector directly.',
    keyPointsJa: [
      'Defender for AI Services では既定でプロンプト本文がアラートに含まれない',
      'プラン設定の「Suspicious prompt evidence（不審なプロンプトの証拠）」を有効にするとアラート詳細で攻撃プロンプトを確認できる',
    ],
    keyPointsEn: [
      'Prompt content is excluded from Defender AI alerts by default for privacy',
      'Enable Suspicious prompt evidence in the Defender for AI Services plan settings to surface prompt text in alert details',
    ],
    referenceTopic: 'Defender for AI Services の Suspicious prompt evidence 設定',
  },
  {
    id: 'pdf-q159',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Microsoft 365 管理センターにおける Copilot エージェントの承認とグループ限定公開',
    titleEn: 'Approving and Restricting a Copilot Agent to a Specific Group in M365 Admin Center',
    scenarioJa:
      'セキュリティグループ Group1 のメンバーが Microsoft Copilot Studio でカスタムエージェント Agent1 を作成し、組織のカタログへの公開を申請しました。現在、Microsoft 365 管理センターの統合アプリ（エージェント）一覧で Agent1 のステータスは「レビュー待ち（Pending review）」となっています。管理者は Agent1 を承認して公開しつつ、Agent1 をインストールおよび使用できるユーザーを Group1 のメンバーのみに限定したいと考えています（ただし全メンバーへ自動事前インストールはしません）。',
    scenarioEn:
      'A member of security group Group1 created a custom agent (Agent1) in Microsoft Copilot Studio and submitted it for publishing. In the Microsoft 365 admin center, Agent1 currently has status "Pending review". You need to approve and publish Agent1 while restricting who can install and use it exclusively to members of Group1, without pre-installing it for them.',
    questionJa: 'Microsoft 365 管理センターでどの操作を実行すべきですか？',
    questionEn: 'Which action should you take in the Microsoft 365 admin center?',
    options: [
      {
        id: 'A',
        textJa: 'エージェントレジストリから Agent1 を直接インストールし、事前インストール配布対象としてセキュリティグループ Group1 を指定する',
        textEn: 'Install Agent1 directly from the Agent Registry in M365 admin center and deploy it to members of Group1',
        isCorrect: false,
        explanationJa:
          '「レビュー待ち（Pending review）」の申請を承認してユーザーがストアから選択インストールできるようにする手順とは異なり、これは強制展開・インストール操作になります。',
        explanationEn:
          'This deploys/installs the agent directly rather than publishing it for review approval without pre-installation.',
      },
      {
        id: 'B',
        textJa: 'Agent1 に対して「ストアに公開（Publish to store）」を実行し、インストール可能なユーザーとして Group1 を指定して（事前インストールなし）、公開を完了する',
        textEn: 'Select "Publish to store" for Agent1, specify Group1 as the users who can install (without pre-installing), and complete publishing',
        isCorrect: true,
        explanationJa:
          '「Pending review」のエージェントを承認・公開する場合、「ストアに公開（Publish to store）」ウィザードで「このエージェントをインストールして使用できるユーザー」を特定のグループ（Group1）に限定し、自動事前インストールを選択せずに公開することで、Group1 メンバーのみが利用可能になります。',
        explanationEn:
          'Choosing "Publish to store" for a pending agent, scoping the allowed users who can install/use it to Group1 without pre-installation, approves and restricts availability strictly to Group1 members.',
      },
      {
        id: 'C',
        textJa: 'Agent1 に対して全員向けに「ストアに公開（Publish to store）」を実行し、さらに Group1 を対象として事前インストール構成を適用する',
        textEn: 'Select "Publish to store" on Agent1 for everyone in the organization and enable pre-installation for Group1',
        isCorrect: false,
        explanationJa:
          '全員向けに公開すると Group1 以外のユーザーもインストール・利用できてしまい、また事前インストールしないという条件にも反します。',
        explanationEn:
          'Publishing to everyone allows non-Group1 users to install it and violates the no-pre-install requirement.',
      },
      {
        id: 'D',
        textJa: '全員向けに「ストアに公開（Publish to store）」して Group1 に事前インストールした後、組織全体の設定から Agent1 をブロックする',
        textEn: 'Publish Agent1 to the store for everyone, pre-install it for Group1, and then block Agent1 across the org',
        isCorrect: false,
        explanationJa:
          'Agent1 をブロック（Block）すると Group1 を含む組織全体で使用できなくなります。',
        explanationEn:
          'Blocking Agent1 prevents all users, including Group1, from using the agent.',
      },
    ],
    overallExplanationJa:
      'Microsoft 365 管理センターの統合アプリ／エージェント管理画面では、ユーザーが組織共有用に申請した Copilot Studio エージェントが「Pending review（レビュー待ち）」に表示されます。管理者が承認時に「ストアに公開（Publish to store）」を選択すると、利用可能ユーザーを特定のセキュリティグループ（Group1）に限定でき、強制展開（事前インストール）の有無も制御できます。',
    overallExplanationEn:
      'In the Microsoft 365 admin center, submitted Copilot Studio agents appear as "Pending review". Selecting "Publish to store" allows admins to scope visibility and installation rights to specific security groups (Group1) with or without pre-installation.',
    keyPointsJa: [
      '「Pending review」のエージェントを公開するには「Publish to store（ストアに公開）」を使用する',
      '公開ウィザード内で利用可能ユーザーを特定グループ（Group1）に限定し事前インストールをオフにできる',
    ],
    keyPointsEn: [
      'Use "Publish to store" to approve agents in Pending review status',
      'Scope allowed users to Group1 and skip pre-installation during the publish flow',
    ],
    referenceTopic: 'Microsoft 365 管理センターでの Copilot エージェント公開とアクセス制御',
  },
  {
    id: 'pdf-q160',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure VM におけるホストでの暗号化（Encryption at host）による OS/データ/キャッシュ/一時ディスク保護',
    titleEn: 'Encrypting OS, Data, Host Cache, and Temp Disks with Encryption at Host',
    scenarioJa:
      'Windows Server 仮想マシン VM1 をデプロイする予定です。VM1 には OS ディスク、データディスク、およびローカルの一時ディスク（Temp disk）が含まれます。要件として、OS ディスク、データディスク、ホストキャッシュ（Host cache）、および一時ディスクに保存されるすべてのデータを暗号化しつつ、暗号化処理に VM1 の CPU リソースを消費しない（パフォーマンス影響を与えない）方式を選択する必要があります。',
    scenarioEn:
      'You plan to deploy a Windows Server virtual machine (VM1) with an OS disk, data disks, and a local temporary disk. You must encrypt the OS disk, data disks, host cache, and temporary disk data without consuming VM1 CPU resources for encryption.',
    questionJa: 'どの暗号化方式を構成すべきですか？',
    questionEn: 'Which encryption configuration should you use?',
    options: [
      {
        id: 'A',
        textJa: 'マネージドディスクで保存データの二重暗号化（Double encryption at rest）を構成する',
        textEn: 'Configure double encryption at rest on the managed disks',
        isCorrect: false,
        explanationJa:
          'マネージドディスクの二重暗号化は、ストレージインフラとディスクレイヤーの二重暗号化を行いますが、VM のローカル一時ディスクやホスト側ディスクキャッシュまでは暗号化されません。',
        explanationEn:
          'Double encryption at rest on managed disks does not encrypt VM temporary disks or the VM host disk cache.',
      },
      {
        id: 'B',
        textJa: 'VM1 のセキュリティプロファイルで「ホストでの暗号化（Encryption at host）」を有効にする',
        textEn: 'Enable "Encryption at host" in the security profile of VM1',
        isCorrect: true,
        explanationJa:
          'ホストでの暗号化（Encryption at host）を有効にすると、OS ディスク・データディスクのストレージ送信前だけでなく、VM ホスト上の一時ディスクとホストキャッシュも VM ホスト側で暗号化されるため、VM1 自身の CPU リソースを消費せずにすべての要件を満たせます。',
        explanationEn:
          'Enabling "Encryption at host" encrypts data stored on the VM host—including temporary disks, OS/data disk host caches, and data flowing to Azure Storage—without utilizing the guest VM CPU.',
      },
      {
        id: 'C',
        textJa: 'VM1 内で Azure Disk Encryption（ADE / BitLocker）を有効にする',
        textEn: 'Enable Azure Disk Encryption (ADE / BitLocker) inside VM1',
        isCorrect: false,
        explanationJa:
          'Azure Disk Encryption はゲスト OS 内の BitLocker / dm-crypt を使って暗号化を行うため、暗号化処理に VM1 のゲスト CPU リソースを消費します。',
        explanationEn:
          'Azure Disk Encryption performs BitLocker/dm-crypt encryption inside the guest OS, consuming VM1 CPU resources.',
      },
      {
        id: 'D',
        textJa: 'マネージドディスクで顧客管理キーのサーバー側暗号化（SSE with CMK）を構成する',
        textEn: 'Configure Server-Side Encryption (SSE with CMK) on the disks',
        isCorrect: false,
        explanationJa:
          '通常のマネージドディスク SSE は Azure Storage へ書き込まれた後のディスクデータを暗号化しますが、VM ホスト上の一時ディスクやホストキャッシュは暗号化対象外です。',
        explanationEn:
          'Standard managed disk SSE encrypts data at rest in Azure Storage but leaves the VM temporary disk and host cache unencrypted unless Encryption at host is enabled.',
      },
    ],
    overallExplanationJa:
      'Azure VM の暗号化オプションには「SSE（ストレージ側）」「ADE（ゲスト OS 内 BitLocker 等）」「ホストでの暗号化（Encryption at host）」があります。**ホストでの暗号化**は、ゲスト VM の CPU に負荷をかけることなく（ADE と異なり）、マネージドディスクに加えて**一時ディスクとホストキャッシュまでエンドツーエンドにホスト側で暗号化**できるため第一推奨となっています。',
    overallExplanationEn:
      '**Encryption at host** encrypts data at the VM host layer before it reaches storage and covers the temporary disk and OS/data disk host caches without consuming guest VM CPU cycles (unlike Azure Disk Encryption).',
    keyPointsJa: [
      'ホストでの暗号化（Encryption at host）は一時ディスク＋ホストキャッシュ＋OS/データディスクを保護し VM の CPU を消費しない',
      'Azure Disk Encryption（ADE）はゲスト OS 内で動作するため VM の CPU を消費する',
      'SSE（サーバー側暗号化）のみでは一時ディスクとホストキャッシュが暗号化されない',
    ],
    keyPointsEn: [
      'Encryption at host covers OS/data disks, host caches, and temp disks without guest CPU overhead',
      'Azure Disk Encryption consumes guest VM CPU',
      'Managed disk SSE alone does not encrypt host caches or temporary disks',
    ],
    referenceTopic: 'Azure VM のホストでの暗号化（Encryption at host）',
  },
];
