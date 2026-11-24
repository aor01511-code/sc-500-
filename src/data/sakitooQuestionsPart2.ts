import { PdfQuestionSeed } from './pdfCaseStudies';

export const SAKITOO_QUESTIONS_PART2: PdfQuestionSeed[] = [
  {
    id: 'sakitoo-q21',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'PIM の「アクティブな割り当て」と「資格のある割り当て」の違い',
    titleEn: 'Difference Between Active and Eligible Role Assignments in PIM',
    scenarioJa:
      'Microsoft Entra ID の PIM を使って管理ロールを割り当てる際、日常運用での常時利用アカウントと Just-In-Time（JIT）昇格させる管理者アカウントの割り当て種別を使い分ける必要があります。',
    scenarioEn:
      'When assigning administrative roles in Microsoft Entra PIM, you need to distinguish between permanent/time-bound active assignments and Just-In-Time (JIT) eligible assignments.',
    questionJa:
      'PIM でロールを「アクティブな割り当て」と「資格のある割り当て」に分類した場合の違いはどれですか？',
    questionEn:
      'What is the difference between an Active assignment and an Eligible assignment in PIM?',
    options: [
      {
        id: 'A',
        textJa: '両者は名称が異なるだけで実際の権限状態やアクティブ化動作に差はない',
        textEn: 'There is no operational difference; the two terms are only UI display aliases',
        isCorrect: false,
        explanationJa:
          '常時権限を持つか、事前昇格（アクティブ化）を必要とするかでセキュリティ上の挙動が大きく異なります。',
        explanationEn:
          'They differ significantly in whether permissions are continuously active or require explicit JIT activation.',
      },
      {
        id: 'B',
        textJa: '資格のある割り当ては承認や MFA の検証なしで自動的に有効化される',
        textEn: 'Eligible assignments automatically activate without requiring MFA or approvals',
        isCorrect: false,
        explanationJa:
          '資格のある割り当てはロール設定に応じて MFA、理由入力、承認者による承認を要求するよう構成できます。',
        explanationEn:
          'Eligible assignments can enforce MFA, justification, and manual approver sign-off before activation.',
      },
      {
        id: 'C',
        textJa: 'アクティブは常時有効で、資格のある割り当ては必要時の昇格操作を要する',
        textEn: 'Active stays continuously enabled, while Eligible requires JIT activation',
        isCorrect: true,
        explanationJa:
          '「資格のある割り当て（Eligible）」は必要なときだけ MFA や承認を経てロールを一時昇格（アクティブ化）させる JIT アクセス用です。一方「アクティブな割り当て（Active）」はアクティブ化操作なしで常時権限が有効となります。',
        explanationEn:
          'Eligible assignments require users to activate the role on demand (JIT) with optional MFA and approval, whereas Active assignments grant continuous role permissions without an activation step.',
      },
      {
        id: 'D',
        textJa: 'アクティブな割り当ては日常運用の簡素化のため MFA 検証を省略できる',
        textEn: 'Active assignments bypass Conditional Access MFA checks for convenience',
        isCorrect: false,
        explanationJa:
          'アクティブな割り当てであっても、条件付きアクセスポリシーによるサインイン時の MFA 要求などは引き続き適用されます。',
        explanationEn:
          'Conditional Access MFA policies still apply to users with active role assignments.',
      },
    ],
    overallExplanationJa:
      'PIM の中核は常時特権（Standing access）を排除することにあります。通常の人間の管理者には **資格のある割り当て（Eligible）** を使い必要な時だけアクティブ化させ、JIT 操作が不可能な自動化プロセス等に限定して **アクティブな割り当て（Active）**（可能な限り期間限定）を使用します。',
    overallExplanationEn:
      'PIM eliminates standing administrative access by using **Eligible** assignments for human admins (requiring on-demand activation) and reserving **Active** assignments strictly for scenarios that cannot perform interactive activation.',
    keyPointsJa: [
      '資格のある割り当て（Eligible）：通常時は権限なし・必要時のみアクティブ化して JIT 昇格',
      'アクティブな割り当て（Active）：アクティブ化操作不要で有効期間中は常にロール権限を保持',
    ],
    keyPointsEn: [
      'Eligible: Zero standing permissions until activated JIT',
      'Active: Continuous permissions without requiring activation',
    ],
    referenceTopic: 'Microsoft Entra PIM - アクティブ vs 資格のある割り当て',
  },
  {
    id: 'sakitoo-q22',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Microsoft Graph PowerShell によるサービスプリンシパルのアプリ権限確認',
    titleEn: 'Listing Service Principal App Role Assignments via Microsoft Graph PowerShell',
    scenarioJa:
      '過剰な権限（例: Mail.ReadWrite や Directory.ReadWrite.All など）が付与されているエンタープライズアプリケーション（サービスプリンシパル）を監査するため、PowerShell スクリプトでアプリケーションレベルのアクセス許可一覧を取得する必要があります。',
    scenarioEn:
      'To audit enterprise applications (service principals) holding excessive application-level permissions (e.g., Mail.ReadWrite or Directory.ReadWrite.All), you need to retrieve their app role assignments via PowerShell.',
    questionJa:
      'Entra ID のサービスプリンシパルに付与されたアプリケーションアクセス許可（Application Permission）を一覧表示するコマンドはどれですか？',
    questionEn:
      'Which PowerShell cmdlet lists application permissions (app role assignments) granted to an Entra ID service principal?',
    options: [
      {
        id: 'A',
        textJa: 'Get-MgServicePrincipalAppRoleAssignment',
        textEn: 'Get-MgServicePrincipalAppRoleAssignment',
        isCorrect: true,
        explanationJa:
          'Microsoft Graph PowerShell SDK の `Get-MgServicePrincipalAppRoleAssignment` コマンドレットを使用すると、指定したサービスプリンシパルに割り当てられているアプリケーションアクセス許可（AppRoleAssignments）を一覧取得できます。',
        explanationEn:
          '`Get-MgServicePrincipalAppRoleAssignment` in the Microsoft Graph PowerShell SDK retrieves all application-level role assignments granted to a service principal.',
      },
      {
        id: 'B',
        textJa: 'Get-AzRoleAssignment',
        textEn: 'Get-AzRoleAssignment',
        isCorrect: false,
        explanationJa:
          '`Get-AzRoleAssignment` は Azure リソース（サブスクリプション/RG 等）の Azure RBAC ロール割り当てを取得する Az モジュールのコマンドであり、Entra/Graph のアプリ許可は取得できません。',
        explanationEn:
          '`Get-AzRoleAssignment` queries Azure control-plane RBAC assignments rather than Microsoft Entra / Graph application permissions.',
      },
      {
        id: 'C',
        textJa: 'Get-MgUserAppRoleAssignment',
        textEn: 'Get-MgUserAppRoleAssignment',
        isCorrect: false,
        explanationJa:
          '`Get-MgUserAppRoleAssignment` は「ユーザー」に割り当てられたエンタープライズアプリへのアクセス権を取得するコマンドです。',
        explanationEn:
          '`Get-MgUserAppRoleAssignment` retrieves app role assignments granted to a user, not to a service principal.',
      },
      {
        id: 'D',
        textJa: 'Get-AzADApplication',
        textEn: 'Get-AzADApplication',
        isCorrect: false,
        explanationJa:
          '`Get-AzADApplication` はアプリ登録オブジェクトのメタデータを取得するだけで、サービスプリンシパルへ実際に同意・付与された AppRoleAssignment 一覧は返しません。',
        explanationEn:
          '`Get-AzADApplication` reads application registration properties rather than granted service principal app role assignments.',
      },
    ],
    overallExplanationJa:
      'Entra ID の API アクセス許可にはユーザー代理の「委任されたアクセス許可（OAuth2PermissionGrants）」とアプリ自身の「アプリケーションアクセス許可（AppRoleAssignments）」があります。Microsoft Graph PowerShell でサービスプリンシパルに付与されたアプリケーション許可を棚卸しするには `Get-MgServicePrincipalAppRoleAssignment` を使用します。',
    overallExplanationEn:
      'Using Microsoft Graph PowerShell, `Get-MgServicePrincipalAppRoleAssignment` audits application-level permissions (`appRoleAssignments`) assigned to service principals, complementing `Get-MgOauth2PermissionGrant` for delegated permissions.',
    keyPointsJa: [
      'サービスプリンシパルのアプリケーション許可一覧取得は Get-MgServicePrincipalAppRoleAssignment',
      'Get-AzRoleAssignment は Azure RBAC（ARM）向けであり Graph API 権限とは別',
    ],
    keyPointsEn: [
      'Use Get-MgServicePrincipalAppRoleAssignment to inspect application permissions on a service principal',
      'Get-AzRoleAssignment applies to Azure resource RBAC, not Graph app permissions',
    ],
    referenceTopic: 'Microsoft Graph PowerShell によるサービスプリンシパル権限監査',
  },
  {
    id: 'sakitoo-q23',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '条件付きアクセスの「レポートのみ（Report-only）」モードによる事前影響評価',
    titleEn: 'Pre-Deployment Impact Assessment with Conditional Access Report-Only Mode',
    scenarioJa:
      '全社員や外部ゲストに適用される新しい厳格な条件付きアクセスポリシーを作成するにあたり、意図しない業務ロックアウトが起きないか本番適用前に検証したいと考えています。',
    scenarioEn:
      'Before enforcing a strict new Conditional Access policy across employees and guests, you want to verify that it will not cause unexpected lockouts in production.',
    questionJa: '条件付きアクセスポリシーの「レポートのみモード」の用途はどれですか？',
    questionEn: 'What is the purpose of Report-only mode in a Conditional Access policy?',
    options: [
      {
        id: 'A',
        textJa: '本番適用前に実際のサインインへの影響を検証しログへ記録する',
        textEn: 'Evaluate and log impact on real sign-ins before enforcement',
        isCorrect: true,
        explanationJa:
          '「レポートのみ（Report-only）」モードに設定すると、実際にはアクセスをブロックしたり MFA を要求したりすることなく、適用された場合の仮想的な評価結果だけをサインインログや Conditional Access Insights ブックに記録して影響範囲を安全に検証できます。',
        explanationEn:
          'Report-only mode evaluates the policy on real sign-ins and logs what would happen into Sign-in logs and the Conditional Access Insights workbook without blocking or prompting users.',
      },
      {
        id: 'B',
        textJa: 'ゲストユーザーや外部アカウントのみに対象を限定して強制適用する',
        textEn: 'Enforce policy restrictions exclusively on external guest accounts',
        isCorrect: false,
        explanationJa:
          '適用対象ユーザー（ゲスト含む）は「割り当て > ユーザー」設定で指定します。',
        explanationEn:
          'Target user scoping (such as guests) is configured in policy Assignments, not via Report-only mode.',
      },
      {
        id: 'C',
        textJa: 'パフォーマンス向上のためサインインの詳細診断ログ記録を無効化する',
        textEn: 'Disable diagnostic sign-in telemetry to reduce workspace ingestion',
        isCorrect: false,
        explanationJa:
          '逆であり、レポートのみモードはログへの評価結果記録を積極的に行うためのモードです。',
        explanationEn:
          'Report-only mode explicitly records policy evaluation outcomes in sign-in logs rather than disabling logging.',
      },
      {
        id: 'D',
        textJa: '既存ポリシーで設定された多要素認証の要求を一時的に省略する',
        textEn: 'Temporarily bypass MFA prompts enforced by other active policies',
        isCorrect: false,
        explanationJa:
          '既存の他ポリシーの MFA 要求をバイパスする機能ではありません。',
        explanationEn:
          'It does not override or bypass MFA enforced by other active policies.',
      },
    ],
    overallExplanationJa:
      '新しい条件付きアクセスポリシーを本番環境にいきなり「オン」で展開すると、レガシーアプリや緊急アカウントが遮断されるリスクがあります。まず「レポートのみ（Report-only）」モードで数日間運用し、Insights とサインインログで影響を確認してから「オン」に切り替えるのがベストプラクティスです。',
    overallExplanationEn:
      'Deploying new Conditional Access policies in **Report-only** mode first lets admins monitor real-world evaluation impacts in Conditional Access Insights and Sign-in logs before switching to On.',
    keyPointsJa: [
      '「レポートのみ」モードではブロックや MFA 強制は行われず、サインインログとブックに結果のみ記録される',
      '本番適用前の安全性検証の必須ステップ',
    ],
    keyPointsEn: [
      'Report-only logs simulated evaluation outcomes without disrupting user sign-ins',
      'Review impact in Sign-in logs or Conditional Access Insights before enabling',
    ],
    referenceTopic: '条件付きアクセス - レポートのみ（Report-only）モード',
  },
  {
    id: 'sakitoo-q24',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Key Vault キーを用いた Azure Storage のカスタマー管理キー（CMK）暗号化',
    titleEn: 'Customer-Managed Key (CMK) Encryption for Azure Storage Using Key Vault',
    scenarioJa:
      'Azure Storage アカウントに保存するすべてのデータについて、Microsoft 管理キーによる既定暗号化ではなく、自組織が Azure Key Vault で保有・ローテーション・失効制御できる暗号化キーを使いたいと考えています。',
    scenarioEn:
      'For an Azure Storage account, compliance requires using encryption keys whose lifecycle, rotation, and revocation your organization controls in Azure Key Vault instead of default Microsoft-managed keys.',
    questionJa:
      'Azure Key Vault のキーを使って Azure Storage のデータを暗号化する機能はどれですか？',
    questionEn:
      'Which feature uses a key stored in Azure Key Vault to encrypt data in Azure Storage?',
    options: [
      {
        id: 'A',
        textJa: 'Storage Service Encryption（SSE）のカスタマー管理キー',
        textEn: 'Storage Service Encryption (SSE) using Customer-Managed Keys',
        isCorrect: true,
        explanationJa:
          'Azure Storage のサーバー側暗号化（SSE）では既定で Microsoft 管理キーが使われますが、カスタマー管理キー（CMK）を構成することで、Azure Key Vault（または Managed HSM）内のキーを参照して保存データの暗号化キーを制御できます。',
        explanationEn:
          'Azure Storage Service Encryption (SSE) supports Customer-Managed Keys (CMK), allowing the storage account to use a key stored in Azure Key Vault to protect at-rest encryption.',
      },
      {
        id: 'B',
        textJa: '仮想マシンディスク向けの Azure Disk Encryption（ADE）',
        textEn: 'Azure Disk Encryption (ADE) for VM OS and data volumes',
        isCorrect: false,
        explanationJa:
          'Azure Disk Encryption（ADE）は IaaS VM の OS/データディスクをゲスト OS 内（BitLocker/dm-crypt）で暗号化する機能です。',
        explanationEn:
          'Azure Disk Encryption encrypts VM OS/data disks inside the guest OS rather than Storage accounts.',
      },
      {
        id: 'C',
        textJa: 'データベースファイル向けの透過的データ暗号化（TDE）',
        textEn: 'Transparent Data Encryption (TDE) for SQL database files',
        isCorrect: false,
        explanationJa:
          'TDE は Azure SQL Database / SQL Managed Instance などのデータベースファイルを暗号化する機能です。',
        explanationEn:
          'TDE encrypts Azure SQL databases rather than Azure Storage accounts.',
      },
      {
        id: 'D',
        textJa: '機密データベース列向けのクライアント側 Always Encrypted',
        textEn: 'Client-side Always Encrypted for sensitive SQL table columns',
        isCorrect: false,
        explanationJa:
          'Always Encrypted は SQL データベース内の特定の機密列をクライアント側で暗号化する機能です。',
        explanationEn:
          'Always Encrypted protects specific SQL columns client-side, not Azure Storage accounts.',
      },
    ],
    overallExplanationJa:
      'Azure Storage サービスでは保存データの暗号化（SSE）が常に有効ですが、鍵の所有・失効権を顧客側で管理したい場合は Key Vault（論理削除および消去保護が有効であることが必須）に作成した RSA キーを指定して **SSE のカスタマー管理キー（CMK）** を構成します。',
    overallExplanationEn:
      'Azure Storage Service Encryption (SSE) uses Microsoft-managed keys by default and supports **Customer-Managed Keys (CMK)** backed by an Azure Key Vault (with Soft Delete and Purge Protection enabled).',
    keyPointsJa: [
      'Azure Storage の CMK は「Storage Service Encryption（SSE）」で構成する',
      'CMK 用 Key Vault では論理削除（Soft Delete）と消去保護（Purge Protection）の有効化が必須',
    ],
    keyPointsEn: [
      'Configure CMK under Storage Service Encryption (SSE) using Azure Key Vault',
      'The Key Vault must have Soft Delete and Purge Protection enabled',
    ],
    referenceTopic: 'Azure Storage のカスタマー管理キー（CMK）暗号化',
  },
  {
    id: 'sakitoo-q25',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '緊急アクセス（ブレークグラス）アカウントの目的と構成要件',
    titleEn: 'Purpose of Break-Glass Emergency Access Accounts in Entra ID',
    scenarioJa:
      'Microsoft Entra テナント全体を対象とした条件付きアクセスポリシーの変更や外部 IdP 連携・MFA 障害が発生した場合でも、管理者がテナントから完全にロックアウトされる事態を防ぐ体制を構築します。',
    scenarioEn:
      'You are designing safeguards to ensure administrators can never be completely locked out of your Microsoft Entra tenant due to Conditional Access misconfigurations or MFA/federation outages.',
    questionJa:
      'Entra ID で「ブレークグラスアカウント（緊急アクセスアカウント）」を設定する主な目的はどれですか？',
    questionEn:
      'What is the primary purpose of configuring break-glass (emergency access) accounts in Entra ID?',
    options: [
      {
        id: 'A',
        textJa: '外部パートナー向け B2B ゲストユーザーの招待プロセスを自動化する',
        textEn: 'Automate bulk B2B guest user invitations and onboarding workflows',
        isCorrect: false,
        explanationJa:
          'ゲストの招待管理はエンタイトルメント管理や外部コラボレーション設定の役割です。',
        explanationEn:
          'Guest invitations are handled by Entitlement Management or B2B collaboration workflows.',
      },
      {
        id: 'B',
        textJa: '条件付きアクセスの障害や誤設定時に緊急復旧用アクセスを確保する',
        textEn: 'Ensure emergency tenant access during Conditional Access outages',
        isCorrect: true,
        explanationJa:
          'ブレークグラスアカウント（2 つ以上推奨・クラウド専用ドメイン `*.onmicrosoft.com`・全条件付きアクセスから除外・FIDO2 等物理トークンまたは超長パスワード管理）を用意することで、誤設定や MFA サービス障害時でもテナント復旧のアクセスを確保できます。',
        explanationEn:
          'Break-glass accounts (cloud-only Global Admins excluded from Conditional Access policies) guarantee emergency tenant recovery if misconfigured policies or MFA outages lock out regular admins.',
      },
      {
        id: 'C',
        textJa: '管理者の日常的な運用作業における MFA 検証の手間を恒常的に省く',
        textEn: 'Eliminate MFA prompts for administrators during daily routine tasks',
        isCorrect: false,
        explanationJa:
          '日常業務での MFA 回避目的ではなく、緊急時専用アカウントであり使用時は即座にアラートが発報されるよう監視すべきです。',
        explanationEn:
          'Emergency accounts must never be used for routine tasks and should trigger high-severity alerts when signed into.',
      },
      {
        id: 'D',
        textJa: 'グローバル管理者による定常的な権限管理業務の作業効率を高める',
        textEn: 'Streamline routine daily management tasks across Azure resources',
        isCorrect: false,
        explanationJa:
          '日常運用には PIM による通常の管理者アカウントを使用し、緊急アカウントは非常時以外一切使用しません。',
        explanationEn:
          'Routine admin work should use standard PIM-protected accounts, never break-glass accounts.',
      },
    ],
    overallExplanationJa:
      'Microsoft では少なくとも 2 つのクラウド専用（`*.onmicrosoft.com`）緊急アクセスアカウント（グローバル管理者）を作成し、すべての条件付きアクセスポリシーから除外、さらに Log Analytics / Sentinel でサインイン発生時に即座にアラート通知されるよう設定することを強く推奨しています。',
    overallExplanationEn:
      'Microsoft recommends maintaining at least two cloud-only (`*.onmicrosoft.com`) Global Administrator emergency access accounts excluded from Conditional Access and monitored with real-time sign-in alerts.',
    keyPointsJa: [
      'ロックアウト防止のため 2 つ以上のクラウド専用ブレークグラスアカウントを作成し全 CA ポリシーから除外する',
      '日常使用は厳禁とし、サインイン発生時に監視アラートを即時発報させる',
    ],
    keyPointsEn: [
      'Maintain 2+ cloud-only emergency accounts excluded from Conditional Access',
      'Monitor sign-in logs so any break-glass usage fires an immediate alert',
    ],
    referenceTopic: 'Microsoft Entra ID - 緊急アクセス（ブレークグラス）アカウントの管理',
  },
  {
    id: 'sakitoo-q26',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Key Vault アクセスポリシーと比較した Azure RBAC モデルのきめ細かい制御',
    titleEn: 'Granular Access Control Advantage of Azure RBAC Over Key Vault Access Policies',
    scenarioJa:
      '1 つの共有 Azure Key Vault に複数のマイクロサービス用シークレットを格納していますが、サービス A には「secret-a」のみ、サービス B には「secret-b」のみを読み取らせ、互いに他のシークレットを参照できないよう分離したいと考えています。',
    scenarioEn:
      'Multiple microservices share one Azure Key Vault, and you need to isolate permissions so Service A can only read secret-a and Service B can only read secret-b.',
    questionJa:
      'Key Vault のアクセスポリシーと Azure RBAC モデルを比較した場合、Azure RBAC モデルの利点はどれですか？',
    questionEn:
      'Compared to legacy Vault access policies, what is a key advantage of the Azure RBAC model for Key Vault?',
    options: [
      {
        id: 'A',
        textJa: '権限構成の選択肢が少なくシンプルな画面で一括設定のみを行える',
        textEn: 'Uses a simplified single-pane UI with fewer configurable parameters',
        isCorrect: false,
        explanationJa:
          'RBAC は管理プレーンとデータプレーンを統一管理できますが、最大の特徴はオブジェクト単位の細粒度な権限制御と PIM 連携です。',
        explanationEn:
          'The core technical advantage is granular per-object permission scoping and unified Azure IAM governance.',
      },
      {
        id: 'B',
        textJa: 'ボールト全体ではなく個別のシークレットやキー単位で権限制御できる',
        textEn: 'Scopes permissions to individual secrets or keys instead of the vault',
        isCorrect: true,
        explanationJa:
          '従来のアクセスポリシーは Key Vault 全体に対する権限しか付与できませんでしたが、Azure RBAC モデルでは特定のシークレット・キー・証明書リソーススコープに対して直接ロール割り当てを行えます。',
        explanationEn:
          'Whereas legacy access policies apply across the entire vault, Azure RBAC supports role assignments scoped down to an individual secret, key, or certificate.',
      },
      {
        id: 'C',
        textJa: '外部消費者向け Azure AD B2C ディレクトリとの認可統合が容易である',
        textEn: 'Simplifies built-in consumer authorization with Azure AD B2C flows',
        isCorrect: false,
        explanationJa:
          'Key Vault の認可モデルは B2C 統合を目的としたものではありません。',
        explanationEn:
          'Key Vault permission models are unrelated to Azure AD B2C integration.',
      },
      {
        id: 'D',
        textJa: '管理プレーンと統合される代わりにカスタムロールの作成が制限される',
        textEn: 'Prevents creating custom role definitions in favor of built-in roles',
        isCorrect: false,
        explanationJa:
          'Azure RBAC モデルではむしろデータアクション単位でカスタムロールを作成できる点も利点です。',
        explanationEn:
          'Azure RBAC actually allows creating custom roles with granular data actions.',
      },
    ],
    overallExplanationJa:
      'Azure Key Vault の Azure RBAC モデルでは、サブスクリプション／RG／ボールトのスコープに加えて、**個々のキー・シークレット・証明書単位**でロール割り当てが可能です。さらに PIM for Azure Resources による JIT 昇格や Azure IAM の一元監査にも対応します。',
    overallExplanationEn:
      'The Azure RBAC model enables per-secret, per-key, and per-certificate role assignments, PIM JIT integration, and unified IAM management across Azure.',
    keyPointsJa: [
      'Azure RBAC：個別シークレット/キー/証明書単位で最小権限を設定でき PIM とも連携可能',
      'アクセスポリシー（レガシー）：Key Vault 全体単位の制御のみ',
    ],
    keyPointsEn: [
      'Azure RBAC supports per-object scoping (individual secrets/keys/certs) and PIM',
      'Legacy access policies apply only at the entire vault level',
    ],
    referenceTopic: 'Azure Key Vault における RBAC vs アクセスポリシー',
  },
  {
    id: 'sakitoo-q27',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '一時アクセスパス（TAP）によるパスワードレス認証のブートストラップ',
    titleEn: 'Bootstrapping Passwordless Authentication with Temporary Access Pass (TAP)',
    scenarioJa:
      '新入社員が初めてパスワードレス認証（FIDO2 セキュリティキーや Microsoft Authenticator の電話サインイン）を登録する際や、既存の MFA デバイスを紛失・破損したユーザーに安全に再登録させる仕組みが必要です。',
    scenarioEn:
      'You need a secure mechanism for new employees to register passwordless credentials (FIDO2 keys or Authenticator) on first onboarding, or for existing users to recover after losing their MFA device.',
    questionJa:
      'Entra ID の「認証方法ポリシー」で TAP（一時アクセスパス）を有効にする主な用途はどれですか？',
    questionEn:
      'What is the primary use case for enabling Temporary Access Pass (TAP) in Entra ID authentication methods?',
    options: [
      {
        id: 'A',
        textJa: '複数の Entra テナント間でシームレスなシングルサインオンを構成する',
        textEn: 'Configure cross-tenant single sign-on federation across directories',
        isCorrect: false,
        explanationJa:
          'マルチテナント間の連携は外部 ID（B2B / テナント間アクセス設定）で行います。',
        explanationEn:
          'Multi-tenant trust is configured in Cross-tenant access settings.',
      },
      {
        id: 'B',
        textJa: 'パスワードレス認証方式の初期登録（ブートストラップ）や緊急復旧',
        textEn: 'Bootstrap passwordless credential enrollment and handle emergency recovery',
        isCorrect: true,
        explanationJa:
          '一時アクセスパス（TAP）は管理者が発行する時間制限付きの強力なワンタイム/複数回利用パスコードです。強い認証（Strong authentication）要件を満たすため、ユーザーが FIDO2 キーや Windows Hello、Authenticator を初期登録（ブートストラップ）したり、認証器紛失時に復旧したりする用途に最適です。',
        explanationEn:
          'A Temporary Access Pass (TAP) is a time-limited passcode issued by an admin that satisfies strong authentication requirements, enabling users to bootstrap FIDO2/Authenticator/Windows Hello or recover from lost devices.',
      },
      {
        id: 'C',
        textJa: '従業員が日常業務で利用する対話型サインイン手順を恒常的に簡素化する',
        textEn: 'Serve as a permanent simplified sign-in method for daily operations',
        isCorrect: false,
        explanationJa:
          'TAP は最短数分〜数時間単位の一時コードであり、日常のサインイン手段として継続利用するものではありません。',
        explanationEn:
          'TAP is short-lived and strictly for onboarding or recovery, not daily sign-ins.',
      },
      {
        id: 'D',
        textJa: '外部組織の B2B ゲストユーザーを新規招待してアクセス権を配布する',
        textEn: 'Invite external B2B guest collaborators and assign access packages',
        isCorrect: false,
        explanationJa:
          'ゲスト招待は B2B コラボレーションやエンタイトルメント管理で行います。',
        explanationEn:
          'B2B guests are invited via Entra External ID / Entitlement Management.',
      },
    ],
    overallExplanationJa:
      '一時アクセスパス（Temporary Access Pass: TAP）は、パスワードをユーザーに渡すことなくパスワードレス認証方式（FIDO2・Windows Hello・Authenticator）の初期セットアップを完了させるための仕組みです。条件付きアクセスの MFA 要求も満たす強い認証要素として扱われます。',
    overallExplanationEn:
      'Temporary Access Pass (TAP) provides a secure, time-bound onboarding and recovery passcode that satisfies MFA/strong-auth checks so users can register passwordless methods without ever needing a traditional password.',
    keyPointsJa: [
      'TAP は「認証方法ポリシー」で対象ユーザーに有効化して使用する時間制限付きパスコード',
      'パスワードレス認証の初期登録（ブートストラップ）および認証器紛失時の緊急復旧に利用する',
    ],
    keyPointsEn: [
      'Configured under Authentication methods policy with configurable lifetime and one-time use options',
      'Used to bootstrap FIDO2/WHfB/Authenticator and recover lost MFA devices',
    ],
    referenceTopic: 'Microsoft Entra ID - 一時アクセスパス（TAP）',
  },
  {
    id: 'sakitoo-q28',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'サービスプリンシパルの証明書資格情報のベストプラクティス管理',
    titleEn: 'Best Practices for Managing Service Principal Certificate Credentials',
    scenarioJa:
      '自動バッチ処理や基幹連携アプリケーションが Entra ID サービスプリンシパルとして X.509 証明書を使って認証しています。秘密鍵の漏洩や有効期限切れによる突発的な停止を防ぐ必要があります。',
    scenarioEn:
      'Automated batch jobs and enterprise apps authenticate as Entra ID service principals using X.509 certificates. You must protect private keys and avoid sudden outages from expired certificates.',
    questionJa:
      'サービスプリンシパルの証明書資格情報を使用する際のセキュリティベストプラクティスはどれですか？',
    questionEn:
      'What is the security best practice when using certificate credentials for an Entra ID service principal?',
    options: [
      {
        id: 'A',
        textJa: '秘密鍵ファイルを Azure Blob Storage コンテナーにそのまま保存する',
        textEn: 'Store the certificate private key inside an Azure Blob Storage container',
        isCorrect: false,
        explanationJa:
          '秘密鍵を通常の Blob Storage に置くのは HSM 保護・鍵管理ポリシー・自動ローテーションの面で不適切です。',
        explanationEn:
          'Blob Storage lacks dedicated HSM protection and certificate lifecycle management.',
      },
      {
        id: 'B',
        textJa: '更新漏れを防ぐため証明書の有効期限を 100 年など長期に設定する',
        textEn: 'Set the certificate validity period to 100 years to avoid expiration',
        isCorrect: false,
        explanationJa:
          '長すぎる有効期限は侵害時の影響期間を伸ばし、セキュリティおよび公開/標準 PKI 要件に反します。',
        explanationEn:
          'Excessively long certificate lifetimes drastically increase risk exposure if compromised.',
      },
      {
        id: 'C',
        textJa: '可用性維持のためクライアントシークレットと証明書を両方有効にする',
        textEn: 'Keep both client secrets and certificates active together for redundancy',
        isCorrect: false,
        explanationJa:
          'シークレットを併用すると攻撃対象面が最も弱いシークレット側に引き下げられてしまいます。',
        explanationEn:
          'Keeping client secrets enabled undermines the higher security posture of certificate-based auth.',
      },
      {
        id: 'D',
        textJa: 'Azure Key Vault で証明書を管理し有効期限アラートや更新を設定する',
        textEn: 'Manage the certificate in Azure Key Vault with expiration alerts configured',
        isCorrect: true,
        explanationJa:
          'Azure Key Vault の「証明書」機能に格納して秘密鍵を保護・監査し、有効期限通知（ライフサイクルアクション）や自動更新を設定することで、秘密鍵漏洩と有効期限切れによる障害の両方を防止できます。',
        explanationEn:
          'Storing certificates in Azure Key Vault protects private keys, logs all access, and supports automated expiration alerts and renewal policies.',
      },
    ],
    overallExplanationJa:
      'サービスプリンシパルで証明書資格情報（または可能な場合はマネージド ID / フェデレーション資格情報）を使用する場合、秘密鍵は Azure Key Vault に安全に保管し、Key Vault の有効期限通知・自動更新ポリシーや Microsoft Entra 推奨事項による期限監視を組み合わせるのが推奨プラクティスです。',
    overallExplanationEn:
      'Manage service principal certificates inside **Azure Key Vault** with lifecycle alerts and auto-rotation policies (or migrate to Managed Identities / Workload Identity Federation when possible).',
    keyPointsJa: [
      '秘密鍵を含む証明書は Azure Key Vault で集中管理し、期限前の通知・更新を設定する',
      '可能であればそもそも証明書やシークレットを持たないマネージド ID やフェデレーション資格情報への移行を検討する',
    ],
    keyPointsEn: [
      'Store private keys in Azure Key Vault and configure lifecycle expiration alerts',
      'Remove redundant client secrets when using certificate authentication',
    ],
    referenceTopic: 'サービスプリンシパル資格情報と Key Vault 証明書管理',
  },
  {
    id: 'sakitoo-q29',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: '外部 ID のテナント間アクセス設定（Cross-tenant Access Settings）による MFA/デバイス信頼',
    titleEn: 'Trusting Partner MFA and Device Compliance via Cross-Tenant Access Settings',
    scenarioJa:
      '提携企業（パートナーテナント）の社員が B2B ゲストとして自社テナントの SharePoint や Teams にアクセスする際、パートナー側で既に完了している MFA や Intune デバイス準拠状態を自社でも信頼し、二重の MFA 登録を不要にしたいと考えています。',
    scenarioEn:
      'When external partner employees access your SharePoint and Teams as B2B guests, you want to trust the MFA and device compliance claims already satisfied in their home tenant so they do not have to re-register MFA in your tenant.',
    questionJa:
      'Entra ID の外部 ID で「テナント間アクセス設定（Cross-tenant Access Settings）」を使用する目的はどれですか？',
    questionEn:
      'What is the purpose of configuring Cross-tenant Access Settings in Microsoft Entra External ID?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft 365 ライセンスや課金枠を外部のパートナーテナントと共有する',
        textEn: 'Share Microsoft 365 subscription licenses directly with partner tenants',
        isCorrect: false,
        explanationJa:
          'テナント間アクセス設定は認証・信頼・B2B コラボレーション境界を制御するものであり、ライセンス共有機能ではありません。',
        explanationEn:
          'Cross-tenant access settings govern authentication trust and B2B collaboration boundaries, not licensing.',
      },
      {
        id: 'B',
        textJa: '招待された B2B ゲストを自動的に自社テナントの内部メンバーへ変換する',
        textEn: 'Automatically convert invited B2B guests into internal member accounts',
        isCorrect: false,
        explanationJa:
          'userType の自動変換を行う設定ではありません（社内メンバーとゲストの区分は維持されます）。',
        explanationEn:
          'It does not convert B2B guests into internal member accounts.',
      },
      {
        id: 'C',
        textJa: '指定したパートナーテナントの MFA 信頼やデバイス準拠の受け入れを構成する',
        textEn: 'Configure inbound trust for MFA and compliant devices per partner tenant',
        isCorrect: true,
        explanationJa:
          'テナント間アクセス設定（受信信頼設定 / Inbound trust settings）を使うと、特定のパートナー組織からの B2B ユーザーについて、相手側テナントで実施された MFA や準拠デバイス評価をそのまま信頼でき、二重の MFA 登録なしで条件付きアクセスを通過させられます。',
        explanationEn:
          'Cross-tenant access inbound trust settings allow your tenant to accept MFA claims, compliant device claims, and Microsoft Entra hybrid joined claims from trusted partner organizations.',
      },
      {
        id: 'D',
        textJa: '組織間の境界を守るため全外部テナントとの B2B 連携を一律で禁止する',
        textEn: 'Enforce a uniform blanket block on B2B collaboration for every external org',
        isCorrect: false,
        explanationJa:
          '一律ブロックも既定設定で可能ですが、特定の組織ごとの信頼設定（MFA・デバイス・アプリ単位制御）を柔軟に行えるのが本機能の主要目的です。',
        explanationEn:
          'While blocking is possible, the key capability is granular per-organization collaboration and claim trust.',
      },
    ],
    overallExplanationJa:
      'Entra ID 外部コラボレーションの「テナント間アクセス設定」では、既定設定またはパートナーテナント固有設定（Inbound/Outbound）ごとに B2B コラボレーション・B2B ダイレクト接続の許可/拒否だけでなく、**ホームテナントの MFA 要求・準拠デバイス要求を受け入れる信頼設定**を行えます。',
    overallExplanationEn:
      'Microsoft Entra Cross-tenant Access Settings give granular inbound/outbound control over B2B collaboration and B2B direct connect, including trusting MFA and device compliance claims from partner home tenants.',
    keyPointsJa: [
      '「受信信頼設定（Trust settings）」で相手テナントの MFA・準拠デバイス・Hybrid Joined 状態を信頼可能',
      'パートナーユーザーに自テナント専用の MFA を再登録させる手間と管理負荷を削減できる',
    ],
    keyPointsEn: [
      'Inbound trust settings accept MFA, compliant device, and hybrid join claims from partner tenants',
      'Avoids forcing B2B guests to enroll a second MFA method in the resource tenant',
    ],
    referenceTopic: 'Microsoft Entra 外部 ID - テナント間アクセス設定（Cross-tenant access settings）',
  },
  {
    id: 'sakitoo-q30',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'PIM ロールアクティブ化履歴を確認するための監査ログカテゴリ',
    titleEn: 'Audit Log Category for Reviewing PIM Role Activation History',
    scenarioJa:
      'セキュリティ監査において、過去 30 日間にどの管理者がいつ、どのような理由で特権ロールをアクティブ化したかの履歴を Entra ID ログから抽出・調査する必要があります。',
    scenarioEn:
      'During a security audit, you need to extract the past 30 days of records showing which administrators activated privileged roles, when, and with what justification.',
    questionJa:
      'Entra ID の PIM レポートで「過去 30 日間のロールのアクティブ化履歴」を確認する際に使用するログカテゴリはどれですか？',
    questionEn:
      'Which Entra ID log and category records the past 30 days of PIM role activation history?',
    options: [
      {
        id: 'A',
        textJa: 'サインインログ（ユーザーの認証試行履歴を記録）',
        textEn: 'Sign-in logs (tracking user authentication attempts)',
        isCorrect: false,
        explanationJa:
          'サインインログはユーザーの認証試行（IP、CA 結果、MFA 状況等）を記録するものであり、PIM ロールの昇格承認やアクティブ化履歴は記録されません。',
        explanationEn:
          'Sign-in logs track authentication events rather than PIM role activation approvals and justifications.',
      },
      {
        id: 'B',
        textJa: 'アプリ登録ログ（アプリケーション設定変更専用）',
        textEn: 'App registration logs (for application changes only)',
        isCorrect: false,
        explanationJa:
          'Entra ID に「アプリ登録ログ」という独立した標準診断カテゴリはなく、監査ログ内の ApplicationManagement カテゴリで管理されます。',
        explanationEn:
          'Application management actions fall under the AuditLogs table, not a separate PIM activation log.',
      },
      {
        id: 'C',
        textJa: '監査ログ（PIM / RoleManagement カテゴリ記録）',
        textEn: 'Audit logs (Privileged Identity Management category)',
        isCorrect: true,
        explanationJa:
          'PIM におけるロールのアクティブ化要求・承認・完了や割り当て変更履歴はすべて Entra ID の「監査ログ（AuditLogs）」に記録され、リソース監査画面や Log Analytics でカテゴリフィルターを用いて 30 日間（またはアーカイブ延長期間）確認できます。',
        explanationEn:
          'PIM role activation requests, approvals, and assignment changes are recorded in Entra ID Audit logs (AuditLogs) under Privileged Identity Management / RoleManagement categories.',
      },
      {
        id: 'D',
        textJa: '条件付きアクセスログ（サインインポリシー評価専用）',
        textEn: 'Conditional Access logs (sign-in policy evaluation)',
        isCorrect: false,
        explanationJa:
          '条件付きアクセスの評価結果はサインインログ内で記録されるものであり、PIM のロールアクティブ化履歴そのものではありません。',
        explanationEn:
          'Conditional Access evaluation details live inside Sign-in logs rather than tracking PIM role activations.',
      },
    ],
    overallExplanationJa:
      'PIM の「リソース監査」画面や Entra ID の「監査ログ（Audit logs）」では、既定で過去 30 日間のロールアクティブ化・割り当て変更・承認イベント（理由や対象ロール含む）を確認できます。30 日を超える長期保管や KQL 分析が必要な場合は診断設定で Log Analytics（`AuditLogs` テーブル）へ転送します。',
    overallExplanationEn:
      'PIM activation and approval history is stored in Entra ID **Audit logs** for 30 days by default. Forward `AuditLogs` via Diagnostic Settings to Log Analytics or Sentinel for long-term retention and KQL hunting.',
    keyPointsJa: [
      'PIM のアクティブ化履歴は Entra ID の「監査ログ（AuditLogs）」に記録される（既定保持 30 日）',
      '長期保管・アラート検知には診断設定で Log Analytics / Sentinel へ転送する',
    ],
    keyPointsEn: [
      'PIM activation events are stored in Entra ID Audit logs (30-day default retention)',
      'Stream AuditLogs to Log Analytics/Sentinel for long-term auditing and alerting',
    ],
    referenceTopic: 'Microsoft Entra PIM - 監査履歴の確認と AuditLogs',
  },
  {
    id: 'sakitoo-q31',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'VNet サービスエンドポイントとストレージファイアウォールによる閉域許可',
    titleEn: 'Restricting Azure Storage to Specific VNets Using Service Endpoints',
    scenarioJa:
      'Azure Storage アカウントへのインターネットからのパブリックアクセスを遮断しつつ、特定の仮想ネットワーク（VNet）サブネット内に配置された VM やアプリからのみアクセスを許可したいと考えています。',
    scenarioEn:
      'You want to block public internet access to an Azure Storage account while allowing access exclusively from resources inside a specific virtual network (VNet) subnet.',
    questionJa:
      'Azure Storage アカウントへのパブリックアクセスを無効化しながら、特定の VNet からのアクセスのみを許可するために設定すべき項目はどれですか？',
    questionEn:
      'What should you configure to block public access to an Azure Storage account while permitting access from a specific VNet?',
    options: [
      {
        id: 'A',
        textJa: 'VNet サービスエンドポイントを有効化し選択されたネットワークからのみ許可する',
        textEn: 'Enable a VNet Service Endpoint and restrict the firewall to selected networks',
        isCorrect: true,
        explanationJa:
          'ストレージアカウントのネットワーク設定で「選択された仮想ネットワークと IP アドレスから有効（既定アクション: Deny）」を選択し、対象サブネットの `Microsoft.Storage` サービスエンドポイントを追加することで、パブリックアクセスを拒否しつつ指定 VNet からの通信のみを許可できます。',
        explanationEn:
          'Enabling the `Microsoft.Storage` Service Endpoint on the subnet and setting the storage firewall to "Enabled from selected virtual networks and IP addresses" blocks general public access while permitting traffic from that VNet.',
      },
      {
        id: 'B',
        textJa: 'ストレージアカウントの共有アクセスキーを無効化して Entra 認証に限定する',
        textEn: 'Disable storage account Shared Key access to enforce Microsoft Entra auth',
        isCorrect: false,
        explanationJa:
          'アカウントキー無効化（allowSharedKeyAccess=false）は認証方式を Entra ID に制限する設定であり、ネットワーク経路の制限にはなりません。',
        explanationEn:
          'Disabling shared key access controls authentication methods rather than restricting network paths.',
      },
      {
        id: 'C',
        textJa: 'コンテナー単位で有効期限付きの共有アクセス署名（SAS）トークンを発行する',
        textEn: 'Issue time-limited Shared Access Signature (SAS) tokens per container',
        isCorrect: false,
        explanationJa:
          'SAS トークンはデータアクセス認可の仕組みであり、パブリックネットワークを閉じる設定ではありません。',
        explanationEn:
          'SAS tokens provide delegated authorization rather than blocking public network access.',
      },
      {
        id: 'D',
        textJa: 'ファイアウォール例外で Azure の信頼済みサービスからの接続のみを許可する',
        textEn: 'Enable only the firewall exception allowing trusted Microsoft Azure services',
        isCorrect: false,
        explanationJa:
          '信頼された Microsoft サービスの例外だけでは、特定 VNet 内の一般的な VM やアプリからの接続は許可されません。',
        explanationEn:
          'The trusted Microsoft services exception does not allow general VMs in a specific VNet.',
      },
    ],
    overallExplanationJa:
      'Azure Storage で特定の VNet からのみアクセスを許可する代表的な方法は 2 つあります。\n1. **サービスエンドポイント + ストレージファイアウォール（選択されたネットワーク）**: 既存サブネットで `Microsoft.Storage` を有効化して登録。\n2. **プライベートエンドポイント（Private Link）**: パブリックネットワークアクセス自体を完全無効化し、VNet 内にプライベート IP を割り当て（最も推奨）。',
    overallExplanationEn:
      'To permit only specific VNets to reach Azure Storage, configure **Enabled from selected virtual networks** with a `Microsoft.Storage` Service Endpoint (or disable public access completely and deploy a Private Endpoint).',
    keyPointsJa: [
      '選択されたネットワーク＋VNet サービスエンドポイントにより一般インターネットからの接続を拒否可能',
      'パブリックエンドポイント自体を完全に閉じる要件では Private Endpoint を使用する',
    ],
    keyPointsEn: [
      'Selected virtual networks + Microsoft.Storage Service Endpoint blocks public traffic',
      'For complete elimination of the public endpoint, use a Private Endpoint',
    ],
    referenceTopic: 'Azure Storage ファイアウォールと VNet サービスエンドポイント',
  },
  {
    id: 'sakitoo-q32',
    domain: 'Purview & コンプライアンス監査',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Blob Storage 不変ポリシー（WORM）による改ざん・削除防止',
    titleEn: 'Preventing Tampering and Deletion with Azure Blob Storage Immutability Policies',
    scenarioJa:
      '金融監査ログや法的証拠データを保存する Azure Blob コンテナーにおいて、指定した保持期間中はいかなるユーザー（サブスクリプション所有者や管理者を含む）であってもデータの上書き・変更・削除ができない WORM 状態を強制する必要があります。',
    scenarioEn:
      'An Azure Blob container stores financial audit records and legal evidence. Regulations require WORM (Write-Once-Read-Many) enforcement so no one—including administrators—can modify or delete blobs during the retention period.',
    questionJa:
      'Azure Blob Storage の「不変ポリシー（Immutability Policy）」を設定する主な用途はどれですか？',
    questionEn:
      'What is the primary use case for configuring an Immutability Policy on Azure Blob Storage?',
    options: [
      {
        id: 'A',
        textJa: 'アクセス頻度の低いデータをアーカイブ層へ移しストレージ料金を抑える',
        textEn: 'Move infrequently accessed blobs to cool tiers to lower storage costs',
        isCorrect: false,
        explanationJa:
          'ストレージコストの削減にはライフサイクル管理による Cool / Cold / Archive 層への移行を使用します。',
        explanationEn:
          'Lifecycle management tiering (Cool/Archive) reduces storage costs, not immutability policies.',
      },
      {
        id: 'B',
        textJa: 'インデックス最適化により大量の Blob オブジェクトへの読み取りを高速化する',
        textEn: 'Accelerate parallel blob read throughput across hot storage partitions',
        isCorrect: false,
        explanationJa:
          '不変ポリシーは読み取りパフォーマンス向上ではなくデータ保護（改ざん・削除防止）機能です。',
        explanationEn:
          'Immutability enforces data protection rather than read performance optimization.',
      },
      {
        id: 'C',
        textJa: 'WORM 要件に準拠し保持期間中のデータ改ざんや削除を完全に禁止する',
        textEn: 'Enforce WORM compliance to block data modification and deletion during retention',
        isCorrect: true,
        explanationJa:
          '不変ストレージ（時間ベースの保持ポリシーや訴訟ホールド）を有効にしてロックすることで、WORM 状態を実現し、期間満了や訴訟ホールド解除まで削除・上書きを確実に防止（ランサムウェア対策にも有効）できます。',
        explanationEn:
          'Immutability policies (time-based retention and legal holds) enforce WORM protection, blocking overwrites and deletions during retention or legal hold for regulatory compliance and ransomware defense.',
      },
      {
        id: 'D',
        textJa: '経過日数に応じてホット・クール・アーカイブ間のデータ階層移行を自動化する',
        textEn: 'Automate storage access tier transitions between Hot, Cool, and Archive',
        isCorrect: false,
        explanationJa:
          'アクセス層の自動移行はライフサイクル管理ポリシーの機能です。',
        explanationEn:
          'Automated tiering is performed by Lifecycle Management rules.',
      },
    ],
    overallExplanationJa:
      'Azure Blob Storage の不変ポリシー（Immutable storage）は「時間ベースの保持ポリシー（Time-based retention）」と「訴訟ホールド（Legal hold）」の 2 種類を提供します。一度ポリシーをロックすると保持期間の短縮や削除ができなくなり、SEC 17a-4・FINRA 等の厳格なコンプライアンス要件およびランサムウェアによる証跡消去対策に対応します。',
    overallExplanationEn:
      'Azure Blob Storage immutable storage supports **time-based retention policies** and **legal holds**. Locking a policy guarantees strict WORM protection against both compliance violations and ransomware.',
    keyPointsJa: [
      '不変ポリシー ＝ WORM（Write Once Read Many）による変更・削除の禁止',
      '時間ベースの保持ポリシーと訴訟ホールド（Legal hold）の 2 種類がある',
    ],
    keyPointsEn: [
      'Immutability enforces WORM protection against modification and deletion',
      'Supports both time-based retention policies and legal holds',
    ],
    referenceTopic: 'Azure Blob Storage 不変ストレージ（WORM）',
  },
  {
    id: 'sakitoo-q33',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Defender for Storage による異常検知とマルウェア・資格情報検出',
    titleEn: 'Threats Detected by Microsoft Defender for Storage',
    scenarioJa:
      '業務データやユーザーアップロードファイルを格納する Azure Storage アカウントに対して Microsoft Defender for Storage プランを有効化し、リアルタイムの脅威検出アラートを SOC へ連携しています。',
    scenarioEn:
      'You enabled Microsoft Defender for Storage on accounts holding business data and user uploads to stream real-time threat alerts to your SOC.',
    questionJa: 'Defender for Storage が検出する脅威はどれですか？',
    questionEn: 'Which types of threats does Microsoft Defender for Storage detect?',
    options: [
      {
        id: 'A',
        textJa: 'IOPS 上限到達やスロットリングに伴うストレージ応答レイテンシの悪化',
        textEn: 'Storage IOPS throttling and latency spikes affecting applications',
        isCorrect: false,
        explanationJa:
          'スループットやレイテンシの監視は Azure Monitor メトリクスが担当します。',
        explanationEn:
          'Performance and latency telemetry are monitored via Azure Monitor metrics.',
      },
      {
        id: 'B',
        textJa: '匿名アクセス急増やマルウェアアップロード・資格情報列挙などの異常操作',
        textEn: 'Anomalous access such as Tor logins, credential enumeration, or malware uploads',
        isCorrect: true,
        explanationJa:
          'Defender for Storage は、通常とは異なる場所や Tor 出口ノードからのアクセス、匿名アクセスの急増、資格情報/SAS 列挙、不正な権限変更、およびアップロード時のマルウェア・機密データ露出リスクを検出してアラートを発報します。',
        explanationEn:
          'Defender for Storage detects suspicious activity including anomalous anonymous access, access from Tor/malicious IPs, storage enumeration, malware uploads, and sensitive data exfiltration attempts.',
      },
      {
        id: 'C',
        textJa: '月間データ転送量やトランザクション増加によるストレージ課金予算の超過',
        textEn: 'Unexpected monthly storage billing overruns from high transaction volume',
        isCorrect: false,
        explanationJa:
          'コスト監視は Microsoft Cost Management（予算アラート）の機能です。',
        explanationEn:
          'Cost overruns are tracked by Microsoft Cost Management budgets.',
      },
      {
        id: 'D',
        textJa: 'スケジュールされた Azure Backup スナップショット取得ジョブの実行失敗',
        textEn: 'Scheduled Azure Backup snapshot job failures across protected file shares',
        isCorrect: false,
        explanationJa:
          'バックアップの失敗は Azure Backup / Recovery Services の運用アラートです。',
        explanationEn:
          'Backup failures are reported by Azure Backup operational alerts.',
      },
    ],
    overallExplanationJa:
      'Microsoft Defender for Storage は Azure Blob Storage、Azure Files、Data Lake Storage を保護し、不審な匿名アクセス、Tor からのアクセス、大量ダウンロードによるデータ持ち出しの疑い、資格情報の列挙、さらにアップロード時マルウェアスキャン（アドオン）によって悪意あるファイルをリアルタイム検知します。',
    overallExplanationEn:
      'Defender for Storage protects Azure Blob Storage, Azure Files, and ADLS Gen2 by alerting on anomalous access patterns, Tor/malicious IP connections, data exfiltration, enumeration, and malicious file uploads.',
    keyPointsJa: [
      '匿名アクセス急増、Tor/悪意ある IP アクセス、権限変更、データ持ち出し疑い等を検知',
      'マルウェアスキャン（On-upload）や機密データ検出と組み合わせて多層防御が可能',
    ],
    keyPointsEn: [
      'Alerts on anonymous access spikes, malicious IPs, enumeration, and exfiltration patterns',
      'Supports optional on-upload malware scanning and sensitive data threat detection',
    ],
    referenceTopic: 'Microsoft Defender for Storage の脅威検知機能',
  },
  {
    id: 'sakitoo-q34',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL TDE でカスタマー管理キー（CMK）を運用する際の最重要注意点',
    titleEn: 'Critical Operational Risk of Customer-Managed Key TDE on Azure SQL Database',
    scenarioJa:
      'Azure SQL Database の透過的データ暗号化（TDE）をサービス管理キーから Azure Key Vault 上のカスタマー管理キー（CMK）へ移行し、キーのライフサイクル運用手順を策定しています。',
    scenarioEn:
      'You are migrating Azure SQL Database Transparent Data Encryption (TDE) from service-managed keys to a Customer-Managed Key (CMK) stored in Azure Key Vault and drafting operational runbooks.',
    questionJa:
      'Azure SQL Database の「透過的データ暗号化（TDE）」でカスタマー管理キー（CMK）を使用する場合の注意点はどれですか？',
    questionEn:
      'What critical consideration applies when using Customer-Managed Keys (CMK) for Transparent Data Encryption (TDE) on Azure SQL Database?',
    options: [
      {
        id: 'A',
        textJa: 'Azure SQL Database の TDE ではカスタマー管理キー自体がサポートされない',
        textEn: 'Azure SQL Database TDE does not support Customer-Managed Keys at all',
        isCorrect: false,
        explanationJa:
          'Azure SQL Database および SQL Managed Instance の TDE は Azure Key Vault / Managed HSM の CMK（BYOK）を標準サポートしています。',
        explanationEn:
          'Azure SQL TDE natively supports Customer-Managed Keys stored in Azure Key Vault or Managed HSM.',
      },
      {
        id: 'B',
        textJa: 'キーを削除または無効化するとデータベース全体がアクセス不能になり停止する',
        textEn: 'Deleting or disabling the key renders protected databases completely inaccessible',
        isCorrect: true,
        explanationJa:
          'TDE プロテクターとして指定した Key Vault のキーが削除・無効化・期限切れ、または SQL Server マネージド ID からのアクセス権が剥奪されると、約 10 分以内にデータベースが「アクセス不能（Inaccessible）」となり一切の読み書きができなくなります。',
        explanationEn:
          'If the Key Vault key used as the TDE protector is deleted, disabled, or its vault permissions are revoked, protected databases become Inaccessible within minutes until the key access is restored.',
      },
      {
        id: 'C',
        textJa: 'CMK へ切り替えると既定の保存時 AES-256 暗号化保護が無効にリセットされる',
        textEn: 'Switching to a CMK temporarily disables AES-256 at-rest encryption coverage',
        isCorrect: false,
        explanationJa:
          'データベース暗号化キー（DEK）を保護するキーが顧客管理キーに切り替わるだけで、AES-256 保存時暗号化自体は維持されます。',
        explanationEn:
          'At-rest AES-256 encryption remains active; only the key-encrypting key (TDE protector) changes.',
      },
      {
        id: 'D',
        textJa: 'カスタマー管理キー構成は最上位の Premium サービス層でのみ利用可能である',
        textEn: 'Customer-Managed Key TDE is restricted exclusively to the Premium service tier',
        isCorrect: false,
        explanationJa:
          'TDE with CMK は Standard / General Purpose などの幅広いサービス層で利用可能です。',
        explanationEn:
          'TDE with CMK is supported across DTU and vCore tiers, not solely Premium.',
      },
    ],
    overallExplanationJa:
      'BYOK（CMK）による TDE では、データの復旧可能性が Key Vault キーの可用性に直結します。そのため CMK を利用する Key Vault には必ず **論理削除（Soft Delete）** と **消去保護（Purge Protection）**、さらにキーのバックアップおよび権限変更に対する厳格な保護・ロックを適用する必要があります。',
    overallExplanationEn:
      'With CMK TDE, database availability depends directly on the Key Vault key. Always enable Soft Delete, Purge Protection, regular key backups, and strict RBAC/locks on the Key Vault.',
    keyPointsJa: [
      'CMK の削除・無効化・権限剥奪 ＝ データベースがアクセス不能（Inaccessible）になる',
      '消去保護（Purge Protection）有効化とキーバックアップ、ジオ冗長保護が不可欠',
    ],
    keyPointsEn: [
      'Revoking or deleting the TDE protector key makes the database inaccessible',
      'Enable Purge Protection and maintain offline key backups',
    ],
    referenceTopic: 'Azure SQL TDE with Customer-Managed Keys の運用注意点',
  },
  {
    id: 'sakitoo-q35',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Databases（SQL）による SQL インジェクションと異常アクセス検知',
    titleEn: 'Detecting SQL Injection and Anomalous Access with Defender for Databases',
    scenarioJa:
      '重要な顧客情報を保持する Azure SQL Database に対して、データベース設定の誤りだけでなく、リアルタイムの攻撃試行（アプリケーション脆弱性を突いた不正クエリなど）を検知したいと考えています。',
    scenarioEn:
      'For an Azure SQL Database storing sensitive customer records, you want real-time threat detection against attacks such as query manipulation and anomalous client logins.',
    questionJa:
      'Azure SQL Database の Defender for Databases が有効な場合に検出できるのはどれですか？',
    questionEn:
      'What can Microsoft Defender for Databases detect when enabled for Azure SQL Database?',
    options: [
      {
        id: 'A',
        textJa: 'CPU や DTU 飽和によるデータベースのパフォーマンス低下原因',
        textEn: 'CPU and DTU resource saturation causing performance bottlenecks',
        isCorrect: false,
        explanationJa:
          'パフォーマンスチューニングやクエリ遅延分析は Query Performance Insight や Azure SQL Analytics が担当します。',
        explanationEn:
          'Performance diagnostics are handled by Query Performance Insight rather than Defender.',
      },
      {
        id: 'B',
        textJa: 'テーブル設計におけるクラスタ化インデックスの欠落や断片化',
        textEn: 'Missing table indexes and heavy index fragmentation across schemas',
        isCorrect: false,
        explanationJa:
          'インデックス推奨は Azure SQL の自動チューニング機能です。',
        explanationEn:
          'Index recommendations come from Azure SQL Automatic Tuning.',
      },
      {
        id: 'C',
        textJa: '同時実行競合により長時間のロック待ちを引き起こすスロークエリ',
        textEn: 'Long-running slow queries causing blocking locks under concurrency',
        isCorrect: false,
        explanationJa:
          'スロークエリの抽出は Query Store の機能です。',
        explanationEn:
          'Slow query diagnostics are tracked by Query Store.',
      },
      {
        id: 'D',
        textJa: 'SQL インジェクション攻撃の試みや通常と異なる異常なデータアクセス',
        textEn: 'SQL injection attack attempts and anomalous client database access',
        isCorrect: true,
        explanationJa:
          'Defender for Azure SQL Databases（Advanced Threat Protection）は、SQL インジェクション攻撃の試み、ブルートフォース試行、通常とは異なる場所・プリンシパル・アプリケーションからのアクセスなどの脅威をリアルタイム検出し、Defender for Cloud / Sentinel へアラートを送信します。',
        explanationEn:
          'Defender for Azure SQL Databases detects SQL injection attempts, brute-force attacks, and anomalous database access from unusual locations, principals, or applications.',
      },
    ],
    overallExplanationJa:
      'Defender for Azure SQL Databases を有効にすると、潜在的脆弱性を見つける「脆弱性評価（Vulnerability Assessment）」と、SQL インジェクション・異常クライアント接続・大量データ抽出等の攻撃を検知する「Advanced Threat Protection（ATP）」の両方が利用可能になります。',
    overallExplanationEn:
      'Defender for Azure SQL Databases combines proactive **Vulnerability Assessment** with real-time **Advanced Threat Protection** alerts for SQL injection, brute-force logins, and anomalous access.',
    keyPointsJa: [
      'Defender for Azure SQL Databases は SQL インジェクションや異常アクセス、ブルートフォースをリアルタイム検知する',
      '脆弱性評価（設定・権限チェック）とセットで提供される',
    ],
    keyPointsEn: [
      'Detects SQL injection, anomalous access, and brute-force attacks in real time',
      'Includes SQL Vulnerability Assessment alongside threat alerts',
    ],
    referenceTopic: 'Microsoft Defender for Azure SQL Databases',
  },
  {
    id: 'sakitoo-q36',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'NSG サービスタグによる Azure サービス宛て通信管理の簡素化',
    titleEn: 'Simplifying NSG Rules Using Azure Service Tags',
    scenarioJa:
      'サブネットのネットワークセキュリティグループ（NSG）において、VM から Azure Storage や Azure Key Vault、Azure Monitor などへのアウトバウンド通信を許可する必要があります。各リージョンの Azure サービス IP レンジは頻繁に増減するため、手動更新を不要にしたいと考えています。',
    scenarioEn:
      'In a subnet NSG, you need to allow outbound traffic to Azure Storage, Key Vault, and Azure Monitor without manually maintaining constantly changing regional IP address prefixes.',
    questionJa: 'ネットワークセキュリティグループ（NSG）の「サービスタグ」を使うメリットはどれですか？',
    questionEn: 'What is the main benefit of using Service Tags in Network Security Groups (NSGs)?',
    options: [
      {
        id: 'A',
        textJa: '個別の単一外部パブリック IP アドレスをピンポイントで明示的に遮断できる',
        textEn: 'Explicitly block individual external client public IP addresses',
        isCorrect: false,
        explanationJa:
          '特定の単一外部 IP を指定したい場合は通常の CIDR / IP アドレスプレフィックスを指定します。',
        explanationEn:
          'Specific individual external IPs are entered directly as IP prefixes rather than Service Tags.',
      },
      {
        id: 'B',
        textJa: '複数リージョン間にまたがる VNet ピアリング接続構成を自動化できる',
        textEn: 'Automatically provision VNet peering links across Azure regions',
        isCorrect: false,
        explanationJa:
          'サービスタグは NSG ルールやルートテーブルの宛先・送信元識別子であり、VNet ピアリングを作成する機能ではありません。',
        explanationEn:
          'Service Tags represent IP address groups in rules and do not create VNet peerings.',
      },
      {
        id: 'C',
        textJa: '個別 IP を記述せずに Microsoft 管理の Azure サービス IP 群を制御できる',
        textEn: 'Manage Microsoft-updated Azure service IP ranges without manual IP lists',
        isCorrect: true,
        explanationJa:
          'サービスタグ（例: `Storage`、`Sql.JapanEast`、`AzureKeyVault`、`AzureMonitor`）は Microsoft が管理・自動更新する IP プレフィックス群を表すため、IP 変更のたびに NSG ルールを手動修正する必要がなくなります。',
        explanationEn:
          'Service Tags (such as `Storage`, `Sql`, `AzureKeyVault`, `AzureMonitor`) represent Microsoft-managed IP ranges that are updated automatically, eliminating manual NSG prefix maintenance.',
      },
      {
        id: 'D',
        textJa: 'セキュリティ規則の評価処理が高速化されパケット転送性能が向上する',
        textEn: 'Accelerate NSG rule evaluation to increase VM packet throughput',
        isCorrect: false,
        explanationJa:
          'パフォーマンス向上ではなく、運用管理負荷の軽減と IP 変更追従の自動化が目的です。',
        explanationEn:
          'Service Tags simplify rule management rather than changing packet-forwarding throughput.',
      },
    ],
    overallExplanationJa:
      'NSG のサービスタグは Azure クラウドサービスが使用するパブリック IP アドレス範囲の論理名です。グローバル（例: `Storage`）または特定リージョン限定（例: `Storage.JapanEast`）で指定でき、Microsoft 側で IP 追加・変更が自動反映されるため設定ミスや通信断を防げます。',
    overallExplanationEn:
      'Azure Service Tags abstract dynamic Azure service IP prefixes (globally or per region like `Storage.JapanEast`), automatically staying current as Microsoft updates underlying IP ranges.',
    keyPointsJa: [
      'サービスタグは Microsoft が自動更新する Azure サービス IP 集合を表す（例: Storage, Sql, AzureMonitor）',
      'リージョン単位（例: Storage.EastUS）での絞り込みも可能',
    ],
    keyPointsEn: [
      'Service Tags eliminate manual IP range maintenance for Azure services',
      'Can be scoped globally or by region (e.g., `Sql.JapanEast`)',
    ],
    referenceTopic: 'Azure 仮想ネットワークのサービスタグ',
  },
  {
    id: 'sakitoo-q37',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'アプリケーションセキュリティグループ（ASG）による論理的な NSG ルール定義',
    titleEn: 'Defining Logical NSG Rules Using Application Security Groups (ASGs)',
    scenarioJa:
      '同一 VNet 内に Web サーバー、AP サーバー、DB サーバーが混在・オートスケールしています。VM が増減して IP アドレスが追加・変更されるたびに NSG ルールを書き換える運用を解消したいと考えています。',
    scenarioEn:
      'Web, application, and database VMs share a VNet and scale dynamically. You want to avoid rewriting NSG rules whenever VM private IP addresses are added or changed.',
    questionJa: 'アプリケーションセキュリティグループ（ASG）の主な利点はどれですか？',
    questionEn: 'What is the primary advantage of Application Security Groups (ASGs)?',
    options: [
      {
        id: 'A',
        textJa: 'L7 インスペクションを担う Azure Firewall の導入を完全に不要にする',
        textEn: 'Eliminate the need for Azure Firewall L7 inspection in hub VNets',
        isCorrect: false,
        explanationJa:
          'ASG は L3/L4 の NSG ルールを論理グループ化する機能であり、L7 FQDN フィルタリングや TLS 検査を行う Azure Firewall の代替にはなりません。',
        explanationEn:
          'ASGs group NICs for L3/L4 NSG rules and do not replace L7 inspection from Azure Firewall.',
      },
      {
        id: 'B',
        textJa: '1 つの NSG に登録可能なセキュリティルール数のプラットフォーム上限を増やす',
        textEn: 'Raise the maximum platform quota of security rules per NSG resource',
        isCorrect: false,
        explanationJa:
          'NSG のルール数上限自体は変わりませんが、複数 IP を 1 つの ASG にまとめることで結果的にルール数を抑えられます。',
        explanationEn:
          'ASGs do not raise the Azure NSG rule quota itself, though they help consolidate rules.',
      },
      {
        id: 'C',
        textJa: 'IP アドレスではなく論理的なワークロードグループ名で NSG ルールを定義できる',
        textEn: 'Define NSG rules using logical workload groups instead of explicit IPs',
        isCorrect: true,
        explanationJa:
          'VM のネットワークインターフェース（NIC）を `ASG-Web` や `ASG-DB` に所属させることで、「送信元: ASG-Web → 宛先: ASG-DB ポート 1433 許可」のようにワークロード役割ベースで NSG ルールを定義でき、IP アドレス管理から解放されます。',
        explanationEn:
          'By associating VM NICs with ASGs like `ASG-Web` and `ASG-DB`, you can write NSG rules by workload tier rather than hardcoding private IP addresses.',
      },
      {
        id: 'D',
        textJa: '異なる仮想ネットワーク間を通過する通信ペイロードを自動暗号化できる',
        textEn: 'Automatically encrypt packet payloads flowing between different VNets',
        isCorrect: false,
        explanationJa:
          '通信暗号化の機能ではなく、NSG のアクセス制御ルールの抽象化・グルーピング機能です。',
        explanationEn:
          'ASGs do not encrypt traffic; they abstract NSG filtering targets.',
      },
    ],
    overallExplanationJa:
      'アプリケーションセキュリティグループ（ASG）を使うと、ネットワーク構造や個別 IP アドレスからアプリケーションの論理的な階層（Web / App / DB など）を分離してマイクロセグメンテーションを簡潔に実装できます（※同一リージョン・同一 VNet 内の NIC で利用可能）。',
    overallExplanationEn:
      'ASGs decouple network security policies from explicit IP prefixes, enabling clean micro-segmentation across application tiers within a VNet.',
    keyPointsJa: [
      'ASG は VM の NIC を論理グループ化し、IP アドレスではなくグループ名で NSG ルールを記述できる',
      'サービスタグ（Azure PaaS 向け）と対比して自組織 VM グループの抽象化に使う',
    ],
    keyPointsEn: [
      'Associate VM NICs to ASGs to write IP-agnostic NSG rules',
      'Service Tags represent Azure PaaS services; ASGs represent your own VMs/workloads',
    ],
    referenceTopic: 'Azure アプリケーションセキュリティグループ（ASG）',
  },
  {
    id: 'sakitoo-q38',
    domain: 'Purview & コンプライアンス監査',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL 監査ログのリアルタイム分析・アラート向け保存先',
    titleEn: 'Recommended Destination for Azure SQL Auditing Real-Time Analysis',
    scenarioJa:
      'Azure SQL Database の監査（Auditing）を有効化し、取得したログイン失敗やクエリ実行イベントに対して KQL でのリアルタイム検索、可視化、および異常時の即時セキュリティアラート検知を行いたいと考えています。',
    scenarioEn:
      'You are enabling Azure SQL Database Auditing and want to perform real-time KQL queries, visualization, and immediate security alerting on login failures and query events.',
    questionJa: 'Azure SQL のデータベース監査（Auditing）を有効化する際の推奨保存先はどれですか？',
    questionEn:
      'Which destination should you configure for Azure SQL Auditing when real-time analysis and alerting are required?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Cosmos DB（リアルタイム NoSQL 分析向け）',
        textEn: 'Azure Cosmos DB (for real-time NoSQL log indexing)',
        isCorrect: false,
        explanationJa:
          'Azure SQL 監査の組み込み送信先に Cosmos DB はサポートされていません。',
        explanationEn:
          'Azure Cosmos DB is not a supported built-in destination for Azure SQL Auditing.',
      },
      {
        id: 'B',
        textJa: 'Azure Blob Storage のみ（長期アーカイブ保管向け）',
        textEn: 'Azure Blob Storage only (for long-term archive retention)',
        isCorrect: false,
        explanationJa:
          'Blob Storage は長期低コスト保管（アーカイブ）には適していますが、即時 KQL クエリやリアルタイムアラートには向きません。',
        explanationEn:
          'Blob Storage is suited for low-cost long-term retention, not real-time KQL querying or alerting.',
      },
      {
        id: 'C',
        textJa: 'Log Analytics ワークスペースまたは Event Hub（即時分析向け）',
        textEn: 'Log Analytics workspace or Event Hub (for real-time analysis)',
        isCorrect: true,
        explanationJa:
          'リアルタイム分析・KQL クエリ・Sentinel 連携やアラート発報を行う場合は、監査ログの送信先に「Log Analytics ワークスペース」（または外部 SIEM 連携用の Event Hub）を選択するのが推奨です。',
        explanationEn:
          'Sending SQL audit logs to a Log Analytics workspace (for KQL analytics and Sentinel) or Event Hub (for external SIEM streaming) is recommended for real-time monitoring and alerting.',
      },
      {
        id: 'D',
        textJa: 'Azure Files 共有（SMB ベースのログファイル直接参照向け）',
        textEn: 'Azure Files shares (for SMB-mounted audit log browsing)',
        isCorrect: false,
        explanationJa:
          'Azure Files 共有は SQL 監査の保存先オプションには含まれません。',
        explanationEn:
          'Azure Files is not a supported SQL Auditing destination.',
      },
    ],
    overallExplanationJa:
      'Azure SQL Auditing では送信先として「Storage（長期安価保存・コンプライアンス）」「Log Analytics（KQL 検索・Sentinel アラート・可視化）」「Event Hub（サードパーティ SIEM 連携）」の 3 つから複数併用も可能です。リアルタイム分析・検知には Log Analytics / Event Hub を指定します。',
    overallExplanationEn:
      'Azure SQL Auditing supports sending events to Storage (archive), **Log Analytics** (KQL queries, Sentinel, alerting), and **Event Hub** (SIEM ingestion)—and multiple targets can be enabled simultaneously.',
    keyPointsJa: [
      'KQL 分析・アラート・Sentinel 統合には「Log Analytics ワークスペース」へ送信する',
      '長期保管が必要なら Blob Storage への送信も同時に併用可能',
    ],
    keyPointsEn: [
      'Send to Log Analytics workspace (or Event Hub) for real-time KQL analysis and alerting',
      'Can be combined with Blob Storage for inexpensive long-term archival',
    ],
    referenceTopic: 'Azure SQL Database 監査ログの出力先',
  },
  {
    id: 'sakitoo-q39',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Virtual Network Manager（AVNM）による VNet トポロジとセキュリティ管理の一元化',
    titleEn: 'Centralizing VNet Topology and Security Policy Management with AVNM',
    scenarioJa:
      '多数のサブスクリプションやリージョンにまたがる何十もの仮想ネットワーク（VNet）を運用しており、ハブ＆スポーク接続や全社共通の強制拒否（Deny）セキュリティ管理ルールを個別の VNet ごとに設定する運用から脱却したいと考えています。',
    scenarioEn:
      'Your enterprise operates dozens of VNets across multiple subscriptions and regions, and you want to centrally manage hub-and-spoke connectivity and mandatory security admin rules without per-VNet manual edits.',
    questionJa: 'Azure Virtual Network Manager を使用する主な目的はどれですか？',
    questionEn: 'What is the primary purpose of Azure Virtual Network Manager (AVNM)?',
    options: [
      {
        id: 'A',
        textJa: 'オンプレミス拠点と接続する ExpressRoute 回線を自動構築する',
        textEn: 'Provision and configure dedicated ExpressRoute circuits to on-premises',
        isCorrect: false,
        explanationJa:
          'ExpressRoute 回線のプロビジョニング機能ではありません。',
        explanationEn:
          'AVNM does not provision ExpressRoute circuits.',
      },
      {
        id: 'B',
        textJa: '多数の VNet 間でセキュリティ規則や接続トポロジを一元管理する',
        textEn: 'Centrally manage connectivity topologies and security rules across VNets',
        isCorrect: true,
        explanationJa:
          'Azure Virtual Network Manager（AVNM）を使用すると、ネットワークグループにまとめた多数の VNet（クロスサブスクリプション・クロスリージョン対応）に対し、メッシュ/ハブ＆スポーク接続構成や NSG より先に評価されるセキュリティ管理規則を一括適用できます。',
        explanationEn:
          'AVNM lets you group VNets across subscriptions and regions to centrally deploy hub-and-spoke/mesh connectivity topologies and security admin rules evaluated ahead of NSGs.',
      },
      {
        id: 'C',
        textJa: 'VNet ゲートウェイのスループット上限と VPN 帯域幅を動的に拡張する',
        textEn: 'Scale out VPN Gateway encryption bandwidth and tunnel throughput',
        isCorrect: false,
        explanationJa:
          'VPN Gateway の帯域は SKU（VpnGw1〜5 等）によって決まり、AVNM では変更できません。',
        explanationEn:
          'VPN Gateway bandwidth depends on the gateway SKU rather than AVNM.',
      },
      {
        id: 'D',
        textJa: 'カスタム DNS ゾーン内の A レコードや転送ルールを一括登録する',
        textEn: 'Manage DNS A records and conditional forwarding rules in Azure DNS',
        isCorrect: false,
        explanationJa:
          'DNS レコード管理は Azure DNS / Azure Private DNS Resolver が担当します。',
        explanationEn:
          'DNS zones and resolution are managed by Azure DNS and Private DNS Resolver.',
      },
    ],
    overallExplanationJa:
      'Azure Virtual Network Manager（AVNM）は、大規模ネットワークにおける「接続管理（ハブ＆スポーク／メッシュの自動ピアリング）」と「セキュリティ管理規則（NSG の評価前に強制 Deny / Always allow / Allow を適用）」を単一のコントロールプレーンから一括展開・管理できるサービスです。',
    overallExplanationEn:
      'Azure Virtual Network Manager centrally manages both network connectivity topologies (hub-and-spoke, mesh) and security admin rules across large sets of VNets.',
    keyPointsJa: [
      'AVNM の 2 大機能：「接続構成（Connectivity）」と「セキュリティ管理構成（Security admin rules）」',
      'セキュリティ管理規則は各サブネットの NSG より先に強制評価される',
    ],
    keyPointsEn: [
      'Two core AVNM capabilities: Connectivity topologies and Security admin rules',
      'Security admin rules take precedence before subnet/NIC NSG evaluation',
    ],
    referenceTopic: 'Azure Virtual Network Manager（AVNM）の概要',
  },
  {
    id: 'sakitoo-q40',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'プライベートエンドポイントとサービスエンドポイントのアーキテクチャ上の違い',
    titleEn: 'Architectural Differences Between Private Endpoints and Service Endpoints',
    scenarioJa:
      'Azure Storage や Azure SQL Database を VNet から安全に接続する方式として、VNet サービスエンドポイントを採用するか、プライベートエンドポイント（Azure Private Link）を採用するかセキュリティアーキテクチャを比較検討しています。',
    scenarioEn:
      'You are comparing VNet Service Endpoints and Private Endpoints (Azure Private Link) for securing VNet connectivity to Azure Storage and Azure SQL Database.',
    questionJa: 'プライベートエンドポイントとサービスエンドポイントの違いはどれですか？',
    questionEn: 'What is the key difference between a Private Endpoint and a Service Endpoint?',
    options: [
      {
        id: 'A',
        textJa: 'プライベート側はパブリック IP を用い、サービスエンドポイント側がプライベート IP を持つ',
        textEn: 'Private Endpoints use public IPs while Service Endpoints allocate private IPs',
        isCorrect: false,
        explanationJa:
          '役割が逆です。プライベートエンドポイントこそが VNet 内のプライベート IP アドレスを使用します。',
        explanationEn:
          'This is reversed: Private Endpoints assign a private VNet IP, while Service Endpoints still target the service public IP.',
      },
      {
        id: 'B',
        textJa: '両者は実装アーキテクチャ上まったく同じ機能であり、ポータル上の名称だけが異なる',
        textEn: 'They share identical routing architecture and differ only by portal naming',
        isCorrect: false,
        explanationJa:
          'IP 割り当て、DNS 解決、オンプレミスからの到達性（VPN/ER 経由の接続可否）、データ流出防止の観点で大きく異なります。',
        explanationEn:
          'They differ substantially in IP addressing, DNS resolution, on-premises reachability, and exfiltration protection.',
      },
      {
        id: 'C',
        textJa: 'プライベートエンドポイントは VNet 内に専用 IP を割り当て、パブリック経路を完全遮断できる',
        textEn: 'Private Endpoints assign a private VNet IP so public access can be fully disabled',
        isCorrect: true,
        explanationJa:
          'プライベートエンドポイントは対象 PaaS リソース専用の NIC（プライベート IP）を VNet 内に作成するため、パブリックアクセスを完全無効化しつつ、さらにオンプレミス（VPN/ExpressRoute）からもプライベート IP 経由で接続できます。一方、サービスエンドポイントは VNet→PaaS 間の Azure バックボーン経路最適化のみであり、サービスの宛先はパブリック IP のまま残ります。',
        explanationEn:
          'A Private Endpoint places a dedicated private IP NIC inside your VNet so public access can be fully disabled and on-premises traffic can traverse VPN/ExpressRoute. Service Endpoints optimize VNet-to-public-IP routing without assigning a private IP.',
      },
      {
        id: 'D',
        textJa: '他テナントのサービスも経路最適化対象とするためサービスエンドポイントの方が隔離性が高い',
        textEn: 'Service Endpoints provide stronger isolation because they route to public endpoints',
        isCorrect: false,
        explanationJa:
          '一般には、特定のリソースインスタンス単位でプライベート IP を割り当てられパブリックエンドポイントを完全遮断できるプライベートエンドポイントの方が高いセキュリティを提供します。',
        explanationEn:
          'Private Endpoints provide stronger isolation by targeting a single resource instance via a private IP and blocking all public access.',
      },
    ],
    overallExplanationJa:
      'サービスエンドポイントは「VNet サブネットから PaaS サービスのパブリック IP への通信を Azure 内部網へ切り替える機能」であるのに対し、**プライベートエンドポイント**は「特定 PaaS リソースを VNet 内のプライベート IP アドレスとして直接引き込む機能」です。パブリックアクセス完全遮断・オンプレミスからの直接アクセス・データ流出リスク低減が必要な場合はプライベートエンドポイントを選択します。',
    overallExplanationEn:
      'Service Endpoints route VNet traffic over the Azure backbone to the service’s public endpoint, whereas **Private Endpoints** map a single PaaS resource to a private IP inside your VNet, enabling full public-access disablement and on-premises access.',
    keyPointsJa: [
      'プライベートエンドポイント：VNet 内にプライベート IP 作成・パブリックアクセス完全無効化可・オンプレミスから到達可・特定インスタンス限定',
      'サービスエンドポイント：宛先はパブリック IP のまま・オンプレミス VPN/ER からは利用不可・サービス全体への経路最適化',
    ],
    keyPointsEn: [
      'Private Endpoint: private VNet IP, supports disabling public access completely, reachable from on-premises',
      'Service Endpoint: targets public IP over backbone, not reachable from on-premises directly',
    ],
    referenceTopic: 'Azure Private Endpoint と Service Endpoint の比較',
  },
];
