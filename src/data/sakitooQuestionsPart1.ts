import { PdfQuestionSeed } from './pdfCaseStudies';

export const SAKITOO_QUESTIONS_PART1: PdfQuestionSeed[] = [
  {
    id: 'sakitoo-q1',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'PIM ロールアクティブ化時の承認者への通知種別',
    titleEn: 'PIM Approval Notification Type Upon Role Activation',
    scenarioJa:
      'Microsoft Entra ID の Privileged Identity Management（PIM）を使用して、資格のある管理者ロールに対して Just-In-Time（JIT）アクセスおよび承認必須のアクティブ化ワークフローを構成しています。',
    scenarioEn:
      'You use Microsoft Entra Privileged Identity Management (PIM) to configure Just-In-Time (JIT) access and an approval-required activation workflow for eligible admin roles.',
    questionJa:
      'Privileged Identity Management（PIM）を使用してロールを有効化する際、承認が必要な場合に承認者に送られる通知はどれですか？',
    questionEn:
      'When activating a role using Privileged Identity Management (PIM) where approval is required, which notification is sent to the approvers?',
    options: [
      {
        id: 'A',
        textJa: '条件付きアクセス通知',
        textEn: 'Conditional Access notification',
        isCorrect: false,
        explanationJa:
          '条件付きアクセスはサインイン時のポリシー評価機能であり、PIM ロール承認ワークフローで承認者に送信される通知種別ではありません。',
        explanationEn:
          'Conditional Access evaluates sign-in policies and is not a PIM approval workflow notification sent to approvers.',
      },
      {
        id: 'B',
        textJa: 'ロール割り当て通知',
        textEn: 'Role assignment notification',
        isCorrect: false,
        explanationJa:
          'ロール割り当て通知はユーザーにロールが新規割り当てされた際に送られる通知であり、有効化（アクティブ化）の承認依頼通知とは異なります。',
        explanationEn:
          'Role assignment notifications alert recipients when a role is newly assigned, not when a user requests activation.',
      },
      {
        id: 'C',
        textJa: 'アクセスレビュー通知',
        textEn: 'Access review notification',
        isCorrect: false,
        explanationJa:
          'アクセスレビュー通知は定期的な権限棚卸しタスクの開始時にレビュアーへ送られる通知です。',
        explanationEn:
          'Access review notifications prompt reviewers to perform periodic entitlement reviews rather than JIT activation approvals.',
      },
      {
        id: 'D',
        textJa: 'アクティブ化要求通知',
        textEn: 'Activation request notification',
        isCorrect: true,
        explanationJa:
          'PIM で Just-In-Time（JIT）アクティブ化に承認フローを設定すると、対象者がロール有効化を申請した際に承認者へ「アクティブ化要求通知（Request to approve a role activation）」が送信され、PIM ポータルやメールから承認・拒否できます。',
        explanationEn:
          'When approval is required for JIT activation in PIM, approvers receive an activation request notification and can approve or deny the request via the PIM portal or email.',
      },
    ],
    overallExplanationJa:
      'PIM で Just-In-Time（JIT）アクティブ化に承認フローを設定すると、資格のあるユーザーがロールをアクティブ化したタイミングで承認者に「アクティブ化要求通知」が送信されます。承認者は理由やチケット番号を確認した上で承認または拒否を行います。',
    overallExplanationEn:
      'Configuring an approval workflow for JIT activation in Microsoft Entra PIM triggers an activation request notification to designated approvers, who can review the justification and approve or deny in the PIM portal.',
    keyPointsJa: [
      'PIM の承認待ち通知は「アクティブ化要求通知」として承認者に送信される',
      'ロール設定の「通知」タブで承認者や管理者への通知宛先・重要アラートをカスタマイズ可能',
    ],
    keyPointsEn: [
      'PIM sends activation request notifications to designated approvers during JIT activation',
      'Notification recipients and critical alert behavior can be customized per role in PIM settings',
    ],
    referenceTopic: 'Microsoft Entra PIM - ロールアクティブ化の通知設定',
  },
  {
    id: 'sakitoo-q2',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '条件付きアクセスにおける「準拠済みデバイスが必要」の動作',
    titleEn: 'Behavior of Require Device to be Marked as Compliant in Conditional Access',
    scenarioJa:
      '組織の Microsoft Entra ID と Microsoft Intune を統合し、業務アプリケーションへのアクセス制御として条件付きアクセスポリシーの許可コントロール（Grant controls）で「デバイスが準拠済みとしてマークされている必要がある」を設定しました。',
    scenarioEn:
      'Your organization integrated Microsoft Entra ID with Microsoft Intune and configured a Conditional Access policy with the grant control requiring the device to be marked as compliant.',
    questionJa:
      '条件付きアクセスポリシーで「準拠済みデバイスのみ許可」を設定した場合、非準拠デバイスからのアクセスはどうなりますか？',
    questionEn:
      'When a Conditional Access policy requires a compliant device, what happens to access attempts from a non-compliant device?',
    options: [
      {
        id: 'A',
        textJa: '多要素認証（MFA）の追加確認を要求して許可する',
        textEn: 'Require an additional MFA prompt and permit access',
        isCorrect: false,
        explanationJa:
          '準拠済みデバイス要求のみが設定されている場合、非準拠デバイスに対して MFA への自動フォールバックでアクセスを許可することはありません。',
        explanationEn:
          'Unless explicitly configured as an OR grant control, non-compliant devices do not fall back to MFA to gain access.',
      },
      {
        id: 'B',
        textJa: '制限付きのゲストユーザー権限へ自動的に降格する',
        textEn: 'Automatically downgrade user access to guest role',
        isCorrect: false,
        explanationJa:
          '条件付きアクセスには非準拠デバイスをゲストユーザー権限へ降格させる動作はありません。',
        explanationEn:
          'Conditional Access does not downgrade user identity privileges to guest access.',
      },
      {
        id: 'C',
        textJa: 'ポータル上に警告メッセージのみ表示し許可する',
        textEn: 'Display a warning banner and allow access through',
        isCorrect: false,
        explanationJa:
          '強制適用（有効）状態の条件付きアクセスポリシーは警告のみでバイパスさせるのではなく、条件を満たさないアクセスをブロックします。',
        explanationEn:
          'An enforced Conditional Access policy blocks non-compliant access rather than allowing it with a warning.',
      },
      {
        id: 'D',
        textJa: '非準拠デバイスからのサインインをブロックする',
        textEn: 'Block sign-in access from the non-compliant device',
        isCorrect: true,
        explanationJa:
          '条件付きアクセスの「デバイスが準拠済みとしてマークされている必要がある」グラントコントロールは、Microsoft Intune で準拠（Compliant）としてマークされていない非準拠デバイスからのサインインをブロックし、準拠修復案内を表示します。',
        explanationEn:
          'The "Require device to be marked as compliant" grant control blocks sign-in attempts from devices not evaluated as compliant by Microsoft Intune.',
      },
    ],
    overallExplanationJa:
      '条件付きアクセスの「準拠済みデバイスが必要」グラントコントロールを有効にすると、Intune のコンプライアンスポリシーを満たしていない非準拠デバイスからのアクセスはブロックされます。管理されていない私用端末やセキュリティ基準未達の端末からのアクセス遮断に有効です。',
    overallExplanationEn:
      'Requiring a compliant device in Conditional Access ensures that only Intune-enrolled devices meeting compliance policies can access target cloud apps; non-compliant devices are blocked.',
    keyPointsJa: [
      '「準拠済みデバイスが必要」は Intune のコンプライアンス状態を参照する',
      '非準拠デバイスからのアクセスは強制的にブロックされる',
    ],
    keyPointsEn: [
      'Device compliance state is evaluated via Microsoft Intune',
      'Non-compliant devices are blocked when the grant control is enforced',
    ],
    referenceTopic: '条件付きアクセス - デバイス準拠コントロール',
  },
  {
    id: 'sakitoo-q3',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Key Vault シークレットの最小権限アクセスモデル（Azure RBAC）',
    titleEn: 'Least-Privilege Access Model for Azure Key Vault Secrets (Azure RBAC)',
    scenarioJa:
      '新規作成した Azure Key Vault において、特定のアプリケーション ID や運用担当者にシークレットの読み取りのみを最小権限で付与したいと考えています。Microsoft が新規デプロイに対して推奨している権限モデルを選択する必要があります。',
    scenarioEn:
      'In a newly provisioned Azure Key Vault, you want to grant specific application identities or operators read-only access to secrets following least privilege using Microsoft’s recommended permission model.',
    questionJa:
      'Azure Key Vault でシークレットへのアクセスを最小権限で付与するために使用するアクセスモデルはどれですか？',
    questionEn:
      'Which access model and role should you use to grant least-privilege access to secrets in Azure Key Vault?',
    options: [
      {
        id: 'A',
        textJa: 'Key Vault アクセスポリシー（ボールト全体権限モデル）',
        textEn: 'Legacy Vault access policy (vault-wide permissions)',
        isCorrect: false,
        explanationJa:
          'アクセスポリシーはボールト全体単位での許可であり、シークレット単位の細かな制御ができず、現在は Azure RBAC が推奨されています。',
        explanationEn:
          'Vault access policies operate only at the vault level and are the legacy model compared to Azure RBAC.',
      },
      {
        id: 'B',
        textJa: '共有アクセス署名（SAS トークンによる一時委任モデル）',
        textEn: 'Shared Access Signature (SAS delegation token model)',
        isCorrect: false,
        explanationJa:
          'SAS は Azure Storage 等で使用される委任トークンであり、Azure Key Vault のシークレット認可モデルではありません。',
        explanationEn:
          'SAS tokens are used for Azure Storage delegation rather than Azure Key Vault secret authorization.',
      },
      {
        id: 'C',
        textJa: 'マネージド ID（Azure リソース認証プリンシパルのみ）',
        textEn: 'Managed Identity (authentication principal without RBAC)',
        isCorrect: false,
        explanationJa:
          'マネージド ID はアクセス元の「認証 ID（プリンシパル）」であり、Key Vault 側の認可アクセスモデルそのものではありません。',
        explanationEn:
          'Managed Identity provides the authenticating identity, not the Key Vault authorization model itself.',
      },
      {
        id: 'D',
        textJa: 'Azure RBAC（Key Vault Secrets User ロール）',
        textEn: 'Azure RBAC role (Key Vault Secrets User assignment)',
        isCorrect: true,
        explanationJa:
          'Azure RBAC モデルでは「Key Vault Secrets User」ロールを割り当てることで、シークレットの読み取り専用権限をボールト単位または個別シークレット単位で最小権限付与できます。',
        explanationEn:
          'The Azure RBAC permission model uses built-in roles such as "Key Vault Secrets User" to grant read-only secret permissions at vault or individual secret scope with least privilege.',
      },
    ],
    overallExplanationJa:
      'Azure Key Vault には「Azure RBAC」と従来の「コンテナー アクセスポリシー」の 2 つの権限モデルがあります。新規作成する Key Vault では一元管理や個別オブジェクト単位（キー/シークレット/証明書ごと）の最小権限割り当てが可能な Azure RBAC モデルと「Key Vault Secrets User」ロールの利用が推奨されています。',
    overallExplanationEn:
      'Azure Key Vault supports both Azure RBAC and legacy Vault access policies. Azure RBAC with roles like "Key Vault Secrets User" is recommended for granular, least-privilege, and centrally audited access control.',
    keyPointsJa: [
      '新規 Key Vault にはレガシーなアクセスポリシーではなく Azure RBAC モデルが推奨される',
      'シークレットの読み取り専用には「Key Vault Secrets User」ロールを使用する',
    ],
    keyPointsEn: [
      'Azure RBAC is the recommended permission model for new Key Vaults',
      'Use "Key Vault Secrets User" for read-only secret access',
    ],
    referenceTopic: 'Azure Key Vault における Azure RBAC アクセス制御',
  },
  {
    id: 'sakitoo-q4',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure VM へのマネージド ID 割り当てによる資格情報レス認証',
    titleEn: 'Credential-Free Authentication via Managed Identity on Azure VMs',
    scenarioJa:
      'Azure 仮想マシン（VM）上で実行されるアプリケーションが、Azure Storage や Azure Key Vault などの Azure サービスへアクセスする必要があります。資格情報のハードコードやローテーション負担を排除したいと考えています。',
    scenarioEn:
      'An application running on an Azure Virtual Machine (VM) needs to access Azure services such as Azure Storage and Azure Key Vault without hardcoding credentials or managing secret rotation.',
    questionJa:
      'Entra ID のマネージド ID を Azure VM に割り当てた場合の主なメリットはどれですか？',
    questionEn:
      'What is the primary benefit of assigning a Microsoft Entra Managed Identity to an Azure VM?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Monitor 診断ログとの統合収集が自動的に構成される',
        textEn: 'Automate Azure Monitor VM log collection without agents',
        isCorrect: false,
        explanationJa:
          'Azure Monitor のログ収集には AMA や DCR の構成が必要であり、マネージド ID の主目的ではありません。',
        explanationEn:
          'Azure Monitor telemetry collection relies on agents and DCRs rather than being the primary purpose of Managed Identities.',
      },
      {
        id: 'B',
        textJa: 'コード内に資格情報を保存せず Azure リソースへ認証できる',
        textEn: 'Authenticate to Azure resources without stored credentials',
        isCorrect: true,
        explanationJa:
          'マネージド ID を使用すると、VM 上のアプリは IMDS（Instance Metadata Service）経由で Entra ID トークンを自動取得できるため、クライアントシークレットや接続文字列をコードや構成ファイルに保存する必要がなくなります。',
        explanationEn:
          'Managed Identities allow applications on the VM to acquire Entra ID tokens automatically via IMDS, eliminating stored secrets, connection strings, or certificates in application code.',
      },
      {
        id: 'C',
        textJa: '仮想マシンの CPU 処理性能とメモリ帯域が自動的に向上する',
        textEn: 'Boost VM compute throughput and reduce disk I/O latency',
        isCorrect: false,
        explanationJa:
          'マネージド ID は ID・認証基盤の機能であり、VM の CPU やメモリ性能には影響しません。',
        explanationEn:
          'Managed Identities provide identity and authentication rather than compute performance optimization.',
      },
      {
        id: 'D',
        textJa: '負荷急増に応じた VM インスタンスの自動スケーリングを有効にする',
        textEn: 'Enable automatic VM instance scaling during peak traffic',
        isCorrect: false,
        explanationJa:
          '自動スケーリングは Virtual Machine Scale Sets などの機能であり、マネージド ID とは無関係です。',
        explanationEn:
          'Autoscaling is handled by Virtual Machine Scale Sets rather than Managed Identities.',
      },
    ],
    overallExplanationJa:
      'マネージド ID を使用すると、Azure リソースに Microsoft Entra ID 上の自動管理された ID が付与され、コードや構成ファイルにシークレット・接続文字列を保存することなく、Entra ID 認証に対応したすべての Azure サービスへ安全にアクセスできます。',
    overallExplanationEn:
      'Managed Identities eliminate the need for developers to manage credentials by providing an automatically managed Entra ID identity and token acquisition flow for Azure services.',
    keyPointsJa: [
      'マネージド ID の最大の利点は「コード内のシークレット・資格情報レス化」',
      'トークン取得や資格情報のローテーションは Azure プラットフォームが自動管理する',
    ],
    keyPointsEn: [
      'Eliminates storing client secrets or connection strings in code/config',
      'Azure automatically handles credential provisioning and rotation',
    ],
    referenceTopic: 'Azure リソースのマネージド ID の概要',
  },
  {
    id: 'sakitoo-q5',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender CSPM のシークレットスキャンによるハードコードされた資格情報の検出',
    titleEn: 'Detecting Hardcoded Credentials via Defender CSPM Secret Scanning',
    scenarioJa:
      'マルチクラウドおよび仮想マシン環境において、開発者や運用者が誤ってソースコードやサーバーディスク内に API キーやパスワードを残していないかエージェントレスで可視化するため、Defender CSPM を有効化しました。',
    scenarioEn:
      'You enabled Defender CSPM to gain agentless visibility into whether developers or operators inadvertently left API keys or passwords inside VM disks, container images, or repositories.',
    questionJa:
      'Defender for Cloud Security Posture Management（CSPM）のシークレットスキャン機能が検出できるのはどれですか？',
    questionEn:
      'What can the secret scanning capability in Defender for Cloud Security Posture Management (CSPM) detect?',
    options: [
      {
        id: 'A',
        textJa: 'コードや VM ディスク内に残された平文の資格情報や接続文字列',
        textEn: 'Plaintext credentials and connection strings in repos or VM disks',
        isCorrect: true,
        explanationJa:
          'Defender CSPM のエージェントレス シークレットスキャンは、Azure VM のディスクスナップショットやコンテナイメージ、DevOps リポジトリ内に平文で残された API キー、接続文字列、SSH 秘密鍵、パスワードなどを検出します。',
        explanationEn:
          'Defender CSPM secret scanning inspects VM disk snapshots, container images, and connected repositories to find exposed API keys, connection strings, private keys, and passwords.',
      },
      {
        id: 'B',
        textJa: '仮想マシンや共有ファイル上に保存されたマルウェア感染ファイル',
        textEn: 'Malicious malware-infected binaries stored inside user file shares',
        isCorrect: false,
        explanationJa:
          'マルウェアの検出は Defender for Endpoint や Defender for Storage（マルウェアスキャン）が担当します。',
        explanationEn:
          'Malware detection is handled by Defender for Endpoint or Defender for Storage malware scanning.',
      },
      {
        id: 'C',
        textJa: '外部ネットワークからパブリック IP へ仕掛けられる DDoS 攻撃',
        textEn: 'Volumetric L3/L4 DDoS flood traffic targeting public IP endpoints',
        isCorrect: false,
        explanationJa:
          'DDoS 攻撃の検知・緩和は Azure DDoS Protection が担当します。',
        explanationEn:
          'DDoS detection and mitigation are provided by Azure DDoS Protection.',
      },
      {
        id: 'D',
        textJa: 'サブネットやルートテーブルにおけるネットワークトポロジの構成不備',
        textEn: 'Misconfigured virtual network routing tables and subnet peering rules',
        isCorrect: false,
        explanationJa:
          'ネットワーク露出や横展開は攻撃パス分析が評価しますが、シークレットスキャン機能自体の対象は平文の資格情報やシークレットです。',
        explanationEn:
          'Network topology exposure is evaluated by attack path analysis rather than secret scanning.',
      },
    ],
    overallExplanationJa:
      'Defender CSPM のシークレットスキャン機能は、エージェントをインストールすることなく VM やコンテナイメージ、さらに Defender for DevOps 経由のリポジトリ内にハードコードされた接続文字列や API キー、パスワード等のシークレットを検出し、攻撃パス分析とも連携してリスクを評価します。',
    overallExplanationEn:
      'Defender CSPM secret scanning discovers plaintext credentials, API tokens, and connection strings across VMs, container images, and code repositories without agents and correlates them with attack path analysis.',
    keyPointsJa: [
      'Defender CSPM のシークレットスキャンは VM・コンテナイメージ・リポジトリ内の平文資格情報を検出',
      '攻撃パス分析（Attack Path）と組み合わせることで、露出したシークレット経由の横展開リスクを特定可能',
    ],
    keyPointsEn: [
      'Detects plaintext API keys, passwords, and connection strings across VMs, images, and repos',
      'Integrates with Defender CSPM attack path analysis',
    ],
    referenceTopic: 'Defender CSPM - エージェントレス シークレットスキャン',
  },
  {
    id: 'sakitoo-q6',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'PIM ロール設定における最大アクティブ化時間の上限',
    titleEn: 'Maximum Activation Duration Limit in PIM Role Settings',
    scenarioJa:
      'Microsoft Entra ID の PIM で特権ロール（例: セキュリティ管理者やグローバル管理者）のアクティブ化設定を構成する際、作業時間に応じた最大有効期限の上限値を把握しておく必要があります。',
    scenarioEn:
      'When configuring activation settings for privileged roles in Microsoft Entra PIM, you need to determine the maximum configurable activation duration allowed by the platform.',
    questionJa: 'PIM でロールの最大アクティブ化時間を設定できる最大値はどれですか？',
    questionEn: 'What is the maximum configurable activation duration for a role in PIM?',
    options: [
      {
        id: 'A',
        textJa: '24時間',
        textEn: '24 hours',
        isCorrect: true,
        explanationJa:
          'Entra ロールの PIM 設定において、1 回のアクティブ化で指定可能な最大期間（Maximum activation duration）は 0.5 時間から最大 24 時間まで設定できます。',
        explanationEn:
          'In Microsoft Entra PIM role settings, the maximum activation duration slider ranges from 0.5 hours up to a maximum of 24 hours.',
      },
      {
        id: 'B',
        textJa: '1時間',
        textEn: '1 hour',
        isCorrect: false,
        explanationJa:
          '1 時間は設定可能な選択肢の 1 つですが、設定できる最大上限値ではありません。',
        explanationEn:
          '1 hour is a common operational setting, not the platform maximum limit.',
      },
      {
        id: 'C',
        textJa: '4時間',
        textEn: '4 hours',
        isCorrect: false,
        explanationJa:
          '4 時間より長い期間（最大 24 時間まで）を構成することが可能です。',
        explanationEn:
          'PIM allows configuring longer durations up to 24 hours.',
      },
      {
        id: 'D',
        textJa: '8時間',
        textEn: '8 hours',
        isCorrect: false,
        explanationJa:
          '8 時間は多くのロールの既定値（デフォルト）として設定されていますが、構成可能な上限は 24 時間です。',
        explanationEn:
          '8 hours is the default value for many roles, whereas the configurable maximum is 24 hours.',
      },
    ],
    overallExplanationJa:
      'PIM のロール設定では、最大アクティブ化期間として 30 分刻み（または 1 時間刻み）で最大 **24 時間** まで設定可能です。既定では多くのロールが 8 時間になっていますが、高特権ロールほど短い時間（1〜4 時間など）に抑えて最小権限と JIT 原則を維持することが推奨されます。',
    overallExplanationEn:
      'PIM supports a maximum activation duration of up to 24 hours (with 8 hours often set by default). Best practice is to keep highly privileged roles to shorter windows.',
    keyPointsJa: [
      'PIM で構成できる最大アクティブ化時間は 24 時間（既定値は多くのロールで 8 時間）',
      '最小権限維持のため必要最小限の時間に短縮するのがベストプラクティス',
    ],
    keyPointsEn: [
      'Maximum configurable PIM activation duration is 24 hours (8 hours is typical default)',
      'Shorten activation windows for high-privilege roles to enforce JIT least privilege',
    ],
    referenceTopic: 'Microsoft Entra PIM ロール設定の構成',
  },
  {
    id: 'sakitoo-q7',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'エンタープライズ アプリケーションに対するユーザーの OAuth 同意制限',
    titleEn: 'Restricting User Consent to OAuth Applications in Entra ID',
    scenarioJa:
      '不正なサードパーティ製クラウドアプリによる OAuth 同意フィッシング攻撃（Illicit Consent Grant）を防ぐため、一般ユーザーが検証されていない外部アプリのアクセス許可に勝手に同意できないようにしたいと考えています。',
    scenarioEn:
      'To defend against OAuth illicit consent grant attacks from third-party applications, you want to prevent standard users from consenting to unverified external apps requesting delegated permissions.',
    questionJa:
      'Entra ID の「エンタープライズアプリケーション」に対して OAuth 委任アクセス許可の同意を制限するために使用する設定はどれですか？',
    questionEn:
      'Which setting should you configure in Entra ID Enterprise Applications to restrict user consent to OAuth delegated permissions?',
    options: [
      {
        id: 'A',
        textJa: '条件付きアクセスポリシーによるアプリサインイン時のアクセス制御',
        textEn: 'Conditional Access policies governing user app sign-ins',
        isCorrect: false,
        explanationJa:
          '条件付きアクセスはアプリへのサインイン時のアクセス許可を制御しますが、アプリ登録時の OAuth 委任権限に対するユーザー同意の可否自体は制御しません。',
        explanationEn:
          'Conditional Access controls sign-in access rather than whether users can grant OAuth consent to new applications.',
      },
      {
        id: 'B',
        textJa: 'アプリ登録オブジェクトにおけるリダイレクト URI のトークン返却先',
        textEn: 'App registration redirect URIs for OAuth token callbacks',
        isCorrect: false,
        explanationJa:
          'リダイレクト URI は自組織が登録した個別アプリのトークン返却先を指定する設定であり、テナント全体のサードパーティ同意制限ではありません。',
        explanationEn:
          'Redirect URIs configure OAuth callback endpoints per app rather than tenant-wide user consent restrictions.',
      },
      {
        id: 'C',
        textJa: 'エンタープライズアプリのユーザーの同意設定による OAuth 同意制限',
        textEn: 'User consent settings restricting OAuth permission grants',
        isCorrect: true,
        explanationJa:
          'Entra ID の「エンタープライズアプリケーション > 同意とアクセス許可 > ユーザーの同意設定」で「ユーザーによるアプリへの同意を許可しない（管理者による承認を要求）」などを構成することで、不審なアプリへの勝手な OAuth 委任権限付与を防げます。',
        explanationEn:
          'Configuring "User consent settings" under Enterprise Applications > Consent and permissions (such as requiring admin consent or restricting to verified publishers/low-risk permissions) blocks unauthorized OAuth consent grants.',
      },
      {
        id: 'D',
        textJa: 'Identity Protection によるサインインリスクおよびユーザーリスク制御',
        textEn: 'Identity Protection risk policies targeting risky sessions',
        isCorrect: false,
        explanationJa:
          'Identity Protection はユーザーリスクやサインインリスクに基づく制御であり、OAuth 委任同意の制限設定ではありません。',
        explanationEn:
          'Identity Protection addresses risky sign-ins and compromised users rather than OAuth app consent controls.',
      },
    ],
    overallExplanationJa:
      'Entra ID の「エンタープライズアプリケーション > 同意とアクセス許可 > ユーザーの同意設定」では、一般ユーザーが任意のアプリへ権限付与できないよう制限し、管理者同意ワークフロー（Admin consent workflow）を通じて管理者がレビュー・承認する運用に切り替えられます。',
    overallExplanationEn:
      'Restricting "User consent settings" in Enterprise Applications and enabling the admin consent workflow prevents illicit consent grants by requiring administrator approval for third-party OAuth permissions.',
    keyPointsJa: [
      '「ユーザーの同意設定」で一般ユーザーの勝手な OAuth 同意を制限できる',
      '「管理者による同意の要求（Admin consent workflow）」を併用して申請・承認運用が可能',
    ],
    keyPointsEn: [
      'Use User consent settings to block unapproved OAuth delegated permission grants',
      'Pair with the Admin consent workflow for controlled app review',
    ],
    referenceTopic: 'Microsoft Entra ID - ユーザー同意の構成と不正同意攻撃対策',
  },
  {
    id: 'sakitoo-q8',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Key Vault の論理削除（Soft Delete）の既定保持期間',
    titleEn: 'Default Retention Period of Azure Key Vault Soft Delete',
    scenarioJa:
      'Azure Key Vault のシークレットやキーを誤って削除してしまった場合の復旧体制を設計しています。現在のすべての Azure Key Vault で自動有効化されている論理削除（Soft Delete）のデフォルト保持日数を把握する必要があります。',
    scenarioEn:
      'You are designing recovery procedures for accidentally deleted secrets and keys in Azure Key Vault and need to verify the default retention period of Soft Delete.',
    questionJa:
      'Azure Key Vault の論理削除（Soft Delete）が有効な場合、削除されたシークレットの既定の保持期間はどれですか？',
    questionEn:
      'When Soft Delete is enabled on Azure Key Vault, what is the default retention period for deleted secrets?',
    options: [
      {
        id: 'A',
        textJa: '30日',
        textEn: '30 days',
        isCorrect: false,
        explanationJa: '30 日はカスタム設定可能な範囲（7〜90 日）の 1 つですが、既定値ではありません。',
        explanationEn: '30 days is within the configurable 7–90 day range, not the default.',
      },
      {
        id: 'B',
        textJa: '7日',
        textEn: '7 days',
        isCorrect: false,
        explanationJa: '7 日は設定可能な最小保持期間であり、既定値ではありません。',
        explanationEn: '7 days is the minimum configurable retention period, not the default.',
      },
      {
        id: 'C',
        textJa: '90日',
        textEn: '90 days',
        isCorrect: true,
        explanationJa:
          'Azure Key Vault の論理削除（Soft Delete）は現在すべてのキーボールトで既定有効となっており、デフォルトの保持期間は 90 日間に設定されています（7〜90 日の間で指定可能）。',
        explanationEn:
          'Soft Delete is enabled by default on all Azure Key Vaults with a default retention period of 90 days (configurable between 7 and 90 days at creation).',
      },
      {
        id: 'D',
        textJa: '365日',
        textEn: '365 days',
        isCorrect: false,
        explanationJa: 'Key Vault の論理削除保持期間は最大 90 日までであり、365 日は設定できません。',
        explanationEn: 'Soft Delete retention supports up to 90 days maximum, not 365 days.',
      },
    ],
    overallExplanationJa:
      'Azure Key Vault の論理削除（Soft Delete）の既定保持期間は **90 日** です（ボールト作成時に 7〜90 日の範囲で変更可能、作成後は変更不可）。完全削除（パージ）も防ぐには、あわせて「消去保護（Purge Protection）」を有効化します。',
    overallExplanationEn:
      'Azure Key Vault Soft Delete defaults to a **90-day** retention period (configurable from 7 to 90 days at vault creation). Combine with Purge Protection to prevent manual purging before expiry.',
    keyPointsJa: [
      'Key Vault 論理削除の既定保持期間は 90 日（設定可能範囲は 7〜90 日）',
      '保持期間中の物理削除（パージ）も防ぐには消去保護（Purge Protection）を有効化する',
    ],
    keyPointsEn: [
      'Default Soft Delete retention is 90 days (configurable 7–90 days)',
      'Enable Purge Protection to block permanent deletion during retention',
    ],
    referenceTopic: 'Azure Key Vault の論理削除（Soft Delete）概要',
  },
  {
    id: 'sakitoo-q9',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'フェデレーション資格情報（Workload Identity Federation）によるシークレットレス CI/CD 認証',
    titleEn: 'Secretless CI/CD Authentication with Federated Identity Credentials',
    scenarioJa:
      'GitHub Actions や外部の Kubernetes クラスターなど、Azure 外部で動作するワークロードから Azure リソースへデプロイやアクセスを行う際、有効期限切れや漏洩リスクのあるクライアントシークレットの発行を廃止したいと考えています。',
    scenarioEn:
      'When external workloads such as GitHub Actions or external Kubernetes clusters deploy to Azure, you want to eliminate issuing long-lived client secrets with expiration and leakage risks.',
    questionJa:
      'アプリ登録でフェデレーション資格情報（Federated Identity Credential）を使用する主な目的はどれですか？',
    questionEn:
      'What is the primary purpose of configuring a Federated Identity Credential on a Microsoft Entra app registration?',
    options: [
      {
        id: 'A',
        textJa: '登録済みアプリのリダイレクト URI を実行環境に応じて動的に切り替える',
        textEn: 'Dynamically update application OAuth redirect URIs at runtime',
        isCorrect: false,
        explanationJa:
          'フェデレーション資格情報は外部 OIDC トークンとの信頼関係設定であり、リダイレクト URI を変更するものではありません。',
        explanationEn:
          'Federated Identity Credentials establish OIDC trust rather than modifying redirect URIs.',
      },
      {
        id: 'B',
        textJa: '特権ユーザーの対話サインイン時に多要素認証（MFA）をバイパスさせる',
        textEn: 'Allow privileged human users to bypass MFA prompts at sign-in',
        isCorrect: false,
        explanationJa:
          '非対話型のワークロード認証向けの仕組みであり、人間ユーザーの MFA バイパス用途ではありません。',
        explanationEn:
          'This mechanism serves non-interactive workload authentication, not bypassing human user MFA.',
      },
      {
        id: 'C',
        textJa: '外部消費者向け Azure AD B2C のカスタムユーザーフローを構成する',
        textEn: 'Configure consumer sign-up and profile edit flows in Azure AD B2C',
        isCorrect: false,
        explanationJa:
          'B2C の消費者向けサインアップフローとは無関係です。',
        explanationEn:
          'It is unrelated to consumer B2C user flows.',
      },
      {
        id: 'D',
        textJa: 'シークレットなしで外部 CI/CD や IdP から Entra ID に認証する',
        textEn: 'Authenticate from external CI/CD or IdPs without client secrets',
        isCorrect: true,
        explanationJa:
          'フェデレーション資格情報（Workload Identity Federation）を構成することで、GitHub Actions・GitLab・Kubernetes などの外部 OIDC プロバイダーが発行する短命な JWT トークンを信頼し、シークレットや証明書を保存することなく Entra ID トークンを取得できます。',
        explanationEn:
          'Workload Identity Federation allows external workloads (GitHub Actions, Kubernetes, etc.) to exchange short-lived OIDC tokens for Entra ID access tokens without storing client secrets or certificates.',
      },
    ],
    overallExplanationJa:
      'アプリ登録やユーザー割り当てマネージド ID に「フェデレーション資格情報（Federated Identity Credential）」を設定すると、外部の OIDC 発行者（GitHub Actions や AKS/EKS/GKE のワークロード等）と Entra ID 間で信頼関係が構築され、シークレット管理ゼロで安全に Azure リソースへアクセスできます。',
    overallExplanationEn:
      'Federated Identity Credentials (Workload Identity Federation) establish an OIDC trust relationship between an external platform and Microsoft Entra ID, enabling completely secretless CI/CD and Kubernetes authentication.',
    keyPointsJa: [
      'Workload Identity Federation によりクライアントシークレット不要で外部ワークロードが Entra 認証可能',
      'GitHub Actions や Kubernetes（AKS Workload ID 等）で広く活用される',
    ],
    keyPointsEn: [
      'Enables secretless authentication from GitHub Actions, Kubernetes, or external OIDC IdPs',
      'Eliminates client secret rotation overhead and leakage risks',
    ],
    referenceTopic: 'Microsoft Entra ワークロード ID フェデレーション',
  },
  {
    id: 'sakitoo-q10',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Entra ID Protection 連携時のリスクベース条件付きアクセス制御',
    titleEn: 'Risk-Based Conditional Access Control with Entra ID Protection',
    scenarioJa:
      'Microsoft Entra ID P2 ライセンス環境で Entra ID Protection を有効化し、危険なサインイン試行に対するリスクベース条件付きアクセスポリシーを設計しています。',
    scenarioEn:
      'In a Microsoft Entra ID P2 environment with Entra ID Protection enabled, you are designing risk-based Conditional Access policies.',
    questionJa:
      '条件付きアクセスポリシーのサインインリスク条件で「高」リスクのサインインに対して推奨されるグラントコントロールはどれですか？',
    questionEn:
      'In a Conditional Access policy targeting High risk, which grant control aligns with the remediation prompt for compromised credentials?',
    options: [
      {
        id: 'A',
        textJa: '準拠済みデバイスの利用を要求',
        textEn: 'Require a compliant device',
        isCorrect: false,
        explanationJa:
          '準拠済みデバイス要求だけでは、資格情報自体の侵害疑いに対するセルフサービス修復アクションにはなりません。',
        explanationEn:
          'Requiring a compliant device alone does not remediate potentially compromised credentials.',
      },
      {
        id: 'B',
        textJa: 'サインインアクセスを即座にブロック',
        textEn: 'Block sign-in access outright',
        isCorrect: false,
        explanationJa:
          'ブロックも選択肢として設定可能ですが、自動自己修復（セルフサービス）で回復させるフローとは異なります。',
        explanationEn:
          'Blocking prevents access outright rather than enabling automated self-remediation.',
      },
      {
        id: 'C',
        textJa: 'パスワードの安全な変更を要求',
        textEn: 'Require secure password change',
        isCorrect: true,
        explanationJa:
          'Entra ID Protection と連携したリスクベースポリシーで「パスワード変更を要求（MFA 経由の安全なパスワード変更）」を構成することで、侵害の疑いがある資格情報をユーザー自身にリセットさせながらリスクを自己修復できます（※実環境ではサインインリスク高にはブロック/MFA、ユーザーリスク高にはパスワード変更が標準対比となります）。',
        explanationEn:
          'Requiring a secure password change (combined with MFA) enables users to self-remediate compromised credentials. (Note: In Entra ID Protection, "Require password change" is specifically paired with User Risk policies, while Sign-in Risk policies typically require MFA or Block.)',
      },
      {
        id: 'D',
        textJa: '多要素認証（MFA）の完了を要求',
        textEn: 'Require MFA completion only',
        isCorrect: false,
        explanationJa:
          'サインインリスク中〜高でのリアルタイム確認には MFA 要求もよく用いられますが、本設問では資格情報リセットによるリスク修復（パスワード変更を要求）が正解として位置づけられています。',
        explanationEn:
          'MFA verifies the current sign-in session, whereas this item focuses on credential reset remediation via password change.',
      },
    ],
    overallExplanationJa:
      'Entra ID Protection と条件付きアクセスを組み合わせたリスクベース制御では、高リスク検知時に「パスワード変更を要求（MFA による本人確認を含む）」または「アクセスをブロック」を設定することで不正利用を防止します。Microsoft Learn の公式ベストプラクティスでは、**サインインリスク（中・高）には「MFA を要求」**、**ユーザーリスク（高）には「パスワード変更を要求」** を割り当てて自己修復を実現する設計が標準です。',
    overallExplanationEn:
      'Risk-based Conditional Access integrates with Entra ID Protection to automate remediation. Per Microsoft Learn best practices, **Sign-in risk** policies typically require MFA (or block), while **User risk (High)** policies require a secure password change for self-remediation.',
    keyPointsJa: [
      '高リスク検知時にパスワード変更を要求することで自己修復が可能（要 Entra ID P2 ＋ SSPR）',
      '実装時は「サインインリスク→MFA要求」「ユーザーリスク→パスワード変更」の使い分けもあわせて押さえる',
    ],
    keyPointsEn: [
      'Requiring password change with MFA enables user self-remediation (requires Entra ID P2)',
      'In production, pair Sign-in Risk with Require MFA and User Risk with Require password change',
    ],
    referenceTopic: 'Entra ID Protection とリスクベース条件付きアクセス',
  },
  {
    id: 'sakitoo-q11',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Key Vault への最も安全なプライベートネットワーク接続構成',
    titleEn: 'Most Secure Network Access Configuration for Azure Key Vault',
    scenarioJa:
      '機密性の高い暗号化キーやデータベース接続シークレットを格納する Azure Key Vault について、インターネット経由の通信経路を完全に遮断し、指定された VNet からのみ安全にアクセスできるようにする必要があります。',
    scenarioEn:
      'For an Azure Key Vault storing sensitive encryption keys and database secrets, you must completely eliminate internet routing and restrict access exclusively to a specific virtual network.',
    questionJa:
      'Key Vault のファイアウォール設定で特定の Azure サービスからのアクセスを許可する最も安全な方法はどれですか？',
    questionEn:
      'What is the most secure method to allow access to Azure Key Vault from specific Azure resources in your virtual network?',
    options: [
      {
        id: 'A',
        textJa: 'プライベートエンドポイントを使用して VNet と統合する',
        textEn: 'Use a Private Endpoint for isolated VNet connectivity',
        isCorrect: true,
        explanationJa:
          'Azure Private Link（プライベートエンドポイント）を使用すると、Key Vault に VNet 内のプライベート IP アドレスが割り当てられ、通信が完全に Azure バックボーンの閉域網内に収まるため、パブリックアクセスを無効化した上で最も安全に接続できます。',
        explanationEn:
          'Using a Private Endpoint assigns a private IP inside your VNet to the Key Vault, keeping all traffic on the private Microsoft backbone while allowing public access to be completely disabled.',
      },
      {
        id: 'B',
        textJa: '許可するパブリック IP アドレスをファイアウォールに登録する',
        textEn: 'Allowlist specific public IPs in the vault firewall',
        isCorrect: false,
        explanationJa:
          'パブリック IP 制限では依然としてパブリックエンドポイントが露出しており、プライベートエンドポイントより攻撃面が広がります。',
        explanationEn:
          'IP allowlisting still keeps the public endpoint reachable rather than isolating traffic inside a private VNet.',
      },
      {
        id: 'C',
        textJa: 'Key Vault のネットワークファイアウォール自体を無効化する',
        textEn: 'Disable the Key Vault network firewall rules entirely',
        isCorrect: false,
        explanationJa:
          'ファイアウォールを無効化するとすべてのネットワークからのアクセスを許すことになり危険です。',
        explanationEn:
          'Disabling the firewall exposes the Key Vault endpoint to all networks.',
      },
      {
        id: 'D',
        textJa: 'アクセス設定を「すべてのネットワークから許可」に変更する',
        textEn: 'Set network access to Allow connections from all networks',
        isCorrect: false,
        explanationJa:
          '「すべてのネットワークを許可」はインターネット上の任意のホストから認証試行を受け付ける状態になり最小権限に反します。',
        explanationEn:
          'Allowing all networks exposes the endpoint publicly rather than isolating it.',
      },
    ],
    overallExplanationJa:
      'Azure Key Vault のネットワーク保護では、パブリックネットワークアクセスを無効化し、**プライベートエンドポイント（Azure Private Link）** およびプライベート DNS ゾーン（`privatelink.vaultcore.azure.net`）を構成することで、インターネットを経由しない完全な閉域通信を実現するのが最も安全なベストプラクティスです。',
    overallExplanationEn:
      'Disabling public access and connecting via a **Private Endpoint** with Private DNS (`privatelink.vaultcore.azure.net`) provides full network isolation for Azure Key Vault.',
    keyPointsJa: [
      'Private Endpoint により Key Vault への通信を VNet プライベート空間に閉じ込められる',
      'パブリックアクセスを「無効」にしつつ、信頼できるサービス例外や VNet サービスエンドポイントよりも高い隔離性を提供',
    ],
    keyPointsEn: [
      'Private Endpoints assign a private VNet IP to Key Vault and eliminate public exposure',
      'Use alongside Private DNS zones (`privatelink.vaultcore.azure.net`)',
    ],
    referenceTopic: 'Azure Key Vault のプライベートリンクとネットワークセキュリティ',
  },
  {
    id: 'sakitoo-q12',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'ユーザー割り当てマネージド ID とシステム割り当てマネージド ID の違い',
    titleEn: 'Difference Between User-Assigned and System-Assigned Managed Identities',
    scenarioJa:
      '複数の Azure App Service や Azure VM から共通の Key Vault やストレージアカウントにアクセスする必要があるため、システム割り当てマネージド ID とユーザー割り当てマネージド ID のどちらを採用すべきか設計しています。',
    scenarioEn:
      'Multiple Azure App Services and VMs need identical access to a shared Key Vault and Storage account, and you are deciding between system-assigned and user-assigned managed identities.',
    questionJa:
      'Entra ID でユーザー割り当てマネージド ID とシステム割り当てマネージド ID の違いはどれですか？',
    questionEn:
      'What is the key difference between a user-assigned managed identity and a system-assigned managed identity in Entra ID?',
    options: [
      {
        id: 'A',
        textJa: 'システム割り当て ID は Kubernetes クラスター専用としてのみ利用可能である',
        textEn: 'System-assigned identities work exclusively inside Kubernetes pods',
        isCorrect: false,
        explanationJa:
          'システム割り当てマネージド ID は VM、App Service、Functions、Logic Apps など多数の Azure リソースで利用できます。',
        explanationEn:
          'System-assigned managed identities are supported across VMs, App Service, Functions, Logic Apps, and more.',
      },
      {
        id: 'B',
        textJa: 'ユーザー割り当ては複数リソースで再利用できリソース削除後も存在し続ける',
        textEn: 'User-assigned identities are shareable and outlive host deletion',
        isCorrect: true,
        explanationJa:
          'ユーザー割り当てマネージド ID は独立した Azure リソースとしてライフサイクルが管理されるため、複数のリソース（VM や App Service 等）で共有・再利用でき、割り当て先のリソースを削除しても ID 自体は削除されず残ります。',
        explanationEn:
          'A user-assigned managed identity has an independent lifecycle as a standalone Azure resource: it can be assigned to multiple Azure resources and continues to exist when those resources are deleted.',
      },
      {
        id: 'C',
        textJa: 'ライフサイクルや共有範囲を含め両者の間に機能的な違いは一切存在しない',
        textEn: 'Both identity types have identical lifecycles and zero functional difference',
        isCorrect: false,
        explanationJa:
          'ライフサイクルの独立性と複数リソース間での共有可否（1 対 1 vs 多対 1）に明確な違いがあります。',
        explanationEn:
          'They differ clearly in lifecycle coupling and 1:1 versus many:1 resource sharing.',
      },
      {
        id: 'D',
        textJa: 'ユーザー割り当て ID はホストとなるリソースの作成時に自動で作成される',
        textEn: 'User-assigned identities are automatically created with each host resource',
        isCorrect: false,
        explanationJa:
          'ホストリソース作成時に自動生成・自動削除されるのは「システム割り当て」の特徴です。',
        explanationEn:
          'Automatic creation tied to the host resource lifecycle describes system-assigned managed identities.',
      },
    ],
    overallExplanationJa:
      'マネージド ID の選定基準はライフサイクルと共有範囲です。\n- **システム割り当て**: リソースと 1 対 1 で紐づき、リソース削除時に自動消滅。\n- **ユーザー割り当て**: 独立したリソースとして事前作成でき、複数リソースで同一の権限セットを共有可能。',
    overallExplanationEn:
      'System-assigned managed identities are tied 1:1 to a single Azure resource lifecycle, whereas **user-assigned** managed identities exist independently and can be shared across many Azure resources.',
    keyPointsJa: [
      'ユーザー割り当て ID：独立ライフサイクル・複数リソース間で再利用可能',
      'システム割り当て ID：リソースと一体のライフサイクル（削除で自動削除）',
    ],
    keyPointsEn: [
      'User-assigned: independent lifecycle, shareable across multiple resources',
      'System-assigned: 1:1 lifecycle bound to the parent resource',
    ],
    referenceTopic: 'システム割り当て vs ユーザー割り当てマネージド ID',
  },
  {
    id: 'sakitoo-q13',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'PIM アクセスレビューによる不要な特権ロール割り当ての棚卸し',
    titleEn: 'Pruning Unnecessary Privileged Role Assignments with PIM Access Reviews',
    scenarioJa:
      'プロジェクト完了や部署異動によって特権管理ロールが不要になったユーザーが長期間資格を保持し続ける（権限の肥大化）のを防ぐため、ゼロトラスト原則に基づく定期的な権限見直しプロセスを導入したいと考えています。',
    scenarioEn:
      'To prevent privilege creep when users change roles or finish projects, you want to establish a recurring entitlement verification process aligned with Zero Trust.',
    questionJa: 'PIM のアクセスレビューを設定する主な目的はどれですか？',
    questionEn: 'What is the primary purpose of configuring Access Reviews in PIM?',
    options: [
      {
        id: 'A',
        textJa: '各ユーザーの MFA 認証方法の登録完了状況を棚卸しする',
        textEn: 'Audit user enrollment status for MFA authentication methods',
        isCorrect: false,
        explanationJa:
          'MFA 登録状況の確認は Entra ID の認証方法アクティビティレポート等で行います。',
        explanationEn:
          'MFA registration status is tracked in Entra authentication methods reporting rather than PIM Access Reviews.',
      },
      {
        id: 'B',
        textJa: '対象管理者のサインインパスワードを定期スケジュールで自動リセットする',
        textEn: 'Periodically reset privileged admin passwords on a schedule',
        isCorrect: false,
        explanationJa:
          'アクセスレビューはパスワード強制変更機能ではなく、ロールやグループメンバーシップの要否審査機能です。',
        explanationEn:
          'Access Reviews attest role or group membership needs, not password resets.',
      },
      {
        id: 'C',
        textJa: '不要になった特権ロールの割り当てを定期的に見直して削除する',
        textEn: 'Periodically review and revoke unneeded privileged assignments',
        isCorrect: true,
        explanationJa:
          'PIM のアクセスレビューを設定することで、ロール保持者本人やマネージャー・セキュリティ担当者が「現在もその特権ロールが必要か」を定期的に審査（承認/拒否）し、不要な割り当てを自動削除できます。',
        explanationEn:
          'PIM Access Reviews enable role holders, managers, or reviewers to periodically attest whether privileged role assignments are still needed and automatically revoke denied or unreviewed access.',
      },
      {
        id: 'D',
        textJa: '構成済み条件付きアクセスポリシーのブロック効果や適用率を評価する',
        textEn: 'Measure block impact and effectiveness of Conditional Access rules',
        isCorrect: false,
        explanationJa:
          '条件付きアクセスポリシーの評価には「レポートのみモード」や Insights ブックを使用します。',
        explanationEn:
          'Conditional Access policy impact is evaluated via Report-only mode and Insights workbooks.',
      },
    ],
    overallExplanationJa:
      'PIM の「資格のある割り当て（Eligible）」であっても、そもそも割り当て自体が不要になったユーザーを放置するとリスクになります。定期的なアクセスレビューを実施して「拒否」または無応答時に自動削除（Auto-apply results）することで最小権限とゼロトラストを継続維持できます。',
    overallExplanationEn:
      'Recurring PIM Access Reviews ensure that even eligible privileged role assignments do not linger indefinitely after a user leaves a project or team, automatically revoking unneeded access.',
    keyPointsJa: [
      'アクセスレビューは特権ロール割り当ての定期的な棚卸しと自動削除を実現する',
      '本人レビュー、マネージャーレビュー、特定レビュアーのいずれも指定可能',
    ],
    keyPointsEn: [
      'Access Reviews attest and automatically remove unneeded privileged role assignments',
      'Supports self-review, manager review, or designated reviewers',
    ],
    referenceTopic: 'Microsoft Entra PIM - アクセスレビューの構成',
  },
  {
    id: 'sakitoo-q14',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    requiredSelections: 2,
    titleJa: 'OAuth 2.0 クライアント資格情報フローで使用可能な資格情報（2つ選択）',
    titleEn: 'Credential Types for OAuth 2.0 Client Credentials Flow (Select 2)',
    scenarioJa:
      'デーモンアプリケーションやバックエンドバッチ処理が、ユーザーの対話的サインインを介さずに OAuth 2.0 のクライアント資格情報付与（Client Credentials Grant）フローを使用して Microsoft Entra ID からアクセストークンを取得しようとしています。',
    scenarioEn:
      'A daemon application or backend service needs to acquire an access token from Microsoft Entra ID non-interactively using the OAuth 2.0 Client Credentials Grant flow.',
    questionJa:
      'OAuth 2.0 の「クライアント資格情報フロー」でアプリが認証する際に使用できる資格情報の種類はどれですか？（2つ選択）',
    questionEn:
      'Which two credential types can an application use to authenticate to Entra ID in the OAuth 2.0 Client Credentials flow? (Choose 2)',
    options: [
      {
        id: 'A',
        textJa: 'ユーザー名とパスワードの組',
        textEn: 'User name and password',
        isCorrect: false,
        explanationJa:
          'ユーザー名とパスワードは ROPC フロー等でユーザー認証に使うものであり、クライアント資格情報フローの機密クライアント資格情報ではありません。',
        explanationEn:
          'Username and password are user credentials (e.g., ROPC), not confidential client credentials for service-to-service auth.',
      },
      {
        id: 'B',
        textJa: 'クライアントシークレット値',
        textEn: 'Client secret credential',
        isCorrect: true,
        explanationJa:
          'クライアントシークレット（アプリケーションパスワード）は、クライアント資格情報フローで `client_secret` として送信できる資格情報の 1 つです。',
        explanationEn:
          'A client secret is a supported credential type passed in the `client_secret` parameter during the Client Credentials flow.',
      },
      {
        id: 'C',
        textJa: 'X.509 デジタル証明書',
        textEn: 'X.509 client certificate',
        isCorrect: true,
        explanationJa:
          'X.509 証明書（公開鍵をアプリ登録に登録し秘密鍵で `client_assertion` を署名）はクライアント資格情報フローでサポートされており、クライアントシークレットよりも高セキュリティで本番環境推奨です。',
        explanationEn:
          'An X.509 certificate (`client_assertion` signed with the private key) is supported in the Client Credentials flow and is recommended over client secrets for production.',
      },
      {
        id: 'D',
        textJa: 'デバイス確認ワンタイムコード',
        textEn: 'Device confirmation code',
        isCorrect: false,
        explanationJa:
          'デバイスコードはブラウザのないデバイス上で人間ユーザーが別端末から対話認証するためのフロー用です。',
        explanationEn:
          'Device code is an interactive user-delegated flow for input-constrained devices.',
      },
      {
        id: 'E',
        textJa: '対話型 OAuth 承認コード',
        textEn: 'Interactive auth code',
        isCorrect: false,
        explanationJa:
          '承認コードは Authorization Code フローでユーザーの対話的同意後に返される一時コードであり、クライアント資格情報フローでは使用しません。',
        explanationEn:
          'Authorization codes belong to the interactive Authorization Code flow rather than Client Credentials flow.',
      },
    ],
    overallExplanationJa:
      'OAuth 2.0 のクライアント資格情報フロー（サービス間通信）では、機密クライアント（サービスプリンシパル）が **クライアントシークレット** または **X.509 証明書（クライアントアサーション）** を使用して Entra ID トークンエンドポイントへ認証します。実運用では秘密鍵を共有しない証明書（またはフェデレーション資格情報／マネージド ID）が推奨されます。',
    overallExplanationEn:
      'In the OAuth 2.0 Client Credentials flow, confidential clients authenticate to Entra ID using either a **client secret** or an **X.509 certificate** assertion (with certificates or Workload Identity Federation recommended in production).',
    keyPointsJa: [
      'クライアント資格情報フローで使える資格情報は「クライアントシークレット」と「証明書（X.509）」',
      'セキュリティ要件の高い本番環境ではシークレットより証明書やマネージド ID が推奨される',
    ],
    keyPointsEn: [
      'Supported credentials: Client secret and X.509 Certificate',
      'X.509 certificates (or Managed Identities/WIF) are strongly preferred over client secrets',
    ],
    referenceTopic: 'Microsoft Entra ID - OAuth 2.0 クライアント資格情報フロー',
  },
  {
    id: 'sakitoo-q15',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'フィッシング耐性のある MFA（Authentication Strength）の要件',
    titleEn: 'Phishing-Resistant MFA Using Conditional Access Authentication Strength',
    scenarioJa:
      '機密性の高い業務 API や特権ポータルへのアクセスに対し、中間者攻撃（AiTM）型フィッシングでも突破されない最高レベルの「フィッシング耐性のある MFA」を条件付きアクセスで強制したいと考えています。',
    scenarioEn:
      'To protect high-value APIs and admin portals against Adversary-in-the-Middle (AiTM) phishing attacks, you want to enforce "Phishing-resistant MFA" using Conditional Access authentication strengths.',
    questionJa:
      'Entra ID の「条件付きアクセス認証強度」を使って特定の API へのアクセスにフィッシング耐性のある MFA を要求したい場合、使用する認証方法はどれですか？',
    questionEn:
      'Which authentication methods qualify for the "Phishing-resistant MFA" built-in Conditional Access authentication strength?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Authenticator アプリによるプッシュ通知承認',
        textEn: 'Microsoft Authenticator app push notification',
        isCorrect: false,
        explanationJa:
          'Authenticator の番号一致・プッシュ通知は標準 MFA として強力ですが、WebAuthn ドメインバインドを持たないため Entra の組み込み「フィッシング耐性のある MFA」には含まれません。',
        explanationEn:
          'Push notifications with number matching are strong MFA but lack FIDO/WebAuthn origin binding and are excluded from Entra’s Phishing-resistant MFA strength.',
      },
      {
        id: 'B',
        textJa: 'FIDO2 キーまたは Windows Hello for Business',
        textEn: 'FIDO2 security key or Windows Hello for Business',
        isCorrect: true,
        explanationJa:
          'Microsoft Entra ID の組み込み認証強度「フィッシング耐性のある MFA（Phishing-resistant MFA）」には、FIDO2 セキュリティキー（パスキー含む）、Windows Hello for Business、および証明書ベース認証（CBA）が含まれます。',
        explanationEn:
          'Entra ID’s built-in "Phishing-resistant MFA" authentication strength permits FIDO2 security keys (passkeys), Windows Hello for Business, and Microsoft Entra certificate-based authentication.',
      },
      {
        id: 'C',
        textJa: '携帯電話番号宛ての SMS ワンタイムパスコード認証',
        textEn: 'SMS one-time passcode to a mobile phone',
        isCorrect: false,
        explanationJa:
          'SMS OTP は SIM スワップやフィッシングプロキシに脆弱であり、フィッシング耐性はありません。',
        explanationEn:
          'SMS OTP is vulnerable to phishing proxies and SIM swapping, and is not phishing-resistant.',
      },
      {
        id: 'D',
        textJa: '登録済み電話番号への音声通話による自動応答認証',
        textEn: 'Automated voice call verification to a phone',
        isCorrect: false,
        explanationJa:
          '音声通話による確認も同様にフィッシング耐性を持ちません。',
        explanationEn:
          'Voice call verification does not provide phishing resistance.',
      },
    ],
    overallExplanationJa:
      '条件付きアクセスの「認証強度（Authentication strengths）」機能を使うと、単なる MFA ではなく特定の認証方式に限定できます。組み込みの「フィッシング耐性のある MFA」では、公開鍵暗号＋オリジン検証を行う **FIDO2 セキュリティキー**、**Windows Hello for Business**、および **Entra 証明書ベース認証（CBA）** のみが許可されます。',
    overallExplanationEn:
      'Conditional Access Authentication Strengths enforce specific authentication methods. The built-in "Phishing-resistant MFA" strength allows only FIDO2 security keys (including passkeys), Windows Hello for Business, and certificate-based authentication.',
    keyPointsJa: [
      'フィッシング耐性 MFA ＝ FIDO2 セキュリティキー / Windows Hello for Business / CBA',
      'プッシュ通知・SMS・音声通話はフィッシング耐性 MFA 強度を満たさない',
    ],
    keyPointsEn: [
      'Phishing-resistant MFA includes FIDO2 security keys, Windows Hello for Business, and CBA',
      'Push notifications, SMS, and voice calls do not satisfy phishing-resistant MFA',
    ],
    referenceTopic: '条件付きアクセス - 認証強度（Phishing-resistant MFA）',
  },
  {
    id: 'sakitoo-q16',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Key Vault で HSM 保護キーを利用するために必要な SKU',
    titleEn: 'Required Azure Key Vault SKU for HSM-Protected Keys',
    scenarioJa:
      '金融規制のコンプライアンス要件により、暗号化キー（RSA/EC）をソフトウェア上ではなく FIPS 140 準拠のハードウェアセキュリティモジュール（HSM）境界内に生成・格納して利用する必要があります。',
    scenarioEn:
      'Due to financial compliance requirements, encryption keys (RSA/EC) must be generated and stored inside a FIPS 140 validated Hardware Security Module (HSM) rather than software.',
    questionJa:
      'Azure Key Vault のキーに対して HSM（ハードウェアセキュリティモジュール）保護を有効にするには、どの SKU を使用する必要がありますか？',
    questionEn:
      'Which Azure Key Vault SKU must you use to support HSM-protected keys?',
    options: [
      {
        id: 'A',
        textJa: 'Premium',
        textEn: 'Premium',
        isCorrect: true,
        explanationJa:
          'Azure Key Vault で HSM 保護されたキー（RSA-HSM / EC-HSM）を作成・格納するには「Premium」SKU（または独立サービスの Azure Key Vault Managed HSM）が必要です。',
        explanationEn:
          'Creating and storing HSM-protected keys (RSA-HSM / EC-HSM) in Azure Key Vault requires the Premium SKU (or dedicated Azure Key Vault Managed HSM).',
      },
      {
        id: 'B',
        textJa: 'Basic',
        textEn: 'Basic',
        isCorrect: false,
        explanationJa:
          'Azure Key Vault には Basic という価格レベル（SKU）は存在しません（Standard と Premium の 2 種類です）。',
        explanationEn:
          'Azure Key Vault does not have a Basic SKU; it offers Standard and Premium.',
      },
      {
        id: 'C',
        textJa: 'Developer',
        textEn: 'Developer',
        isCorrect: false,
        explanationJa:
          'Azure Key Vault には Developer という SKU は存在しません。',
        explanationEn:
          'There is no Developer SKU for Azure Key Vault.',
      },
      {
        id: 'D',
        textJa: 'Standard',
        textEn: 'Standard',
        isCorrect: false,
        explanationJa:
          'Standard SKU はソフトウェアベースのキー暗号化のみをサポートし、HSM 保護キーは利用できません。',
        explanationEn:
          'The Standard SKU supports software-protected keys only and does not include HSM-backed keys.',
      },
    ],
    overallExplanationJa:
      'Azure Key Vault には Standard と Premium の 2 つのサービス階層（SKU）があります。ソフトウェアキーのみで十分な場合は Standard、FIPS 140 検証済みの HSM で保護されたキー（`RSA-HSM` / `EC-HSM`）を使用したい場合は **Premium** SKU を選択する必要があります。',
    overallExplanationEn:
      'Azure Key Vault offers Standard (software-protected keys) and **Premium** (HSM-protected RSA-HSM/EC-HSM keys) SKUs.',
    keyPointsJa: [
      'Key Vault の SKU は Standard と Premium の 2 種類',
      'HSM 保護キー（RSA-HSM / EC-HSM）を使うには Premium SKU が必須',
    ],
    keyPointsEn: [
      'Azure Key Vault provides Standard and Premium tiers',
      'Premium SKU is required for HSM-backed keys',
    ],
    referenceTopic: 'Azure Key Vault の SKU（Standard と Premium）',
  },
  {
    id: 'sakitoo-q17',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'B2B ゲストユーザーの包括的なアクセスガバナンス制御',
    titleEn: 'Comprehensive Access Governance Controls for B2B Guest Users',
    scenarioJa:
      '外部パートナー企業の B2B ゲストユーザーが社内チームやアプリケーションに多数招待されています。プロジェクト終了後の放置アカウントを防ぎ、属性に応じたグルーピングや期限付きパッケージ配布、定期確認を包括的に実装したいと考えています。',
    scenarioEn:
      'Many external partner B2B guest users are invited to your tenant. You want comprehensive lifecycle and access governance covering dynamic grouping, time-bound access requests, and periodic reviews.',
    questionJa:
      'Entra ID でゲストユーザー（B2B）のアクセスを制限・管理するために使用できる機能はどれですか？',
    questionEn:
      'Which Microsoft Entra ID features can be used to govern and restrict B2B guest user access?',
    options: [
      {
        id: 'A',
        textJa: '属性ベースでゲストを分類する動的グループ',
        textEn: 'Dynamic groups based on guest userType',
        isCorrect: false,
        explanationJa:
          '動的グループ（例: `user.userType -eq "Guest"`）もゲスト管理に有効ですが、これ単体ではなく他のガバナンス機能も併用可能です。',
        explanationEn:
          'Dynamic groups (e.g., filtering by `userType -eq "Guest"`) help scope policies, though all listed capabilities work together.',
      },
      {
        id: 'B',
        textJa: 'エンタイトルメント管理のアクセスパッケージ',
        textEn: 'Entitlement Management access packages',
        isCorrect: false,
        explanationJa:
          'エンタイトルメント管理では外部ユーザー向けの承認フローや有効期限付きアクセスを管理できますが、これだけではありません。',
        explanationEn:
          'Entitlement Management governs external onboarding and expiration, alongside the other listed controls.',
      },
      {
        id: 'C',
        textJa: '定期的なゲスト向けのアクセスレビュー',
        textEn: 'Recurring B2B guest Access reviews',
        isCorrect: false,
        explanationJa:
          'アクセスレビューによるゲストの定期見直しも有効ですが、他の機能もあわせて利用できます。',
        explanationEn:
          'Access reviews periodically verify guest need, alongside dynamic groups and access packages.',
      },
      {
        id: 'D',
        textJa: '上記に挙げたすべてのガバナンス機能',
        textEn: 'All of the governance features above',
        isCorrect: true,
        explanationJa:
          'Entra ID では、動的グループでゲストを自動分類し、エンタイトルメント管理（アクセスパッケージ）で期限付きの申請・自動削除を行い、アクセスレビューで定期的な棚卸しを実施することで、ゲストユーザーのライフサイクル全体を安全に統制できます。',
        explanationEn:
          'All three—Dynamic groups, Entitlement Management access packages, and Access reviews—work together in Microsoft Entra ID Governance to manage and restrict the full B2B guest lifecycle.',
      },
    ],
    overallExplanationJa:
      'B2B ゲストユーザーの過剰権限や放置アカウントを防ぐには、Microsoft Entra ID Governance の複数機能（動的グループによる条件付きアクセス等の適用対象グルーピング、エンタイトルメント管理の有効期限付きアクセスパッケージ、定期的なアクセスレビュー）を組み合わせてライフサイクル全体を統制します。',
    overallExplanationEn:
      'Effective B2B guest governance combines **Dynamic groups** for targeted scoping, **Entitlement Management** for time-bound onboarding/expiration, and **Access reviews** for ongoing attestation.',
    keyPointsJa: [
      '動的グループ（userType == Guest）、エンタイトルメント管理、アクセスレビューのすべてが B2B 統制に活用できる',
      '特にエンタイトルメント管理のライフサイクル管理は不要になったゲストアカウントの自動削除にも有効',
    ],
    keyPointsEn: [
      'Combine dynamic groups, Entitlement Management access packages, and Access reviews for complete B2B governance',
      'Entitlement Management can automatically expire and block/remove stale guest accounts',
    ],
    referenceTopic: 'Microsoft Entra ID ガバナンスによる B2B ゲスト管理',
  },
  {
    id: 'sakitoo-q18',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: '継続的アクセス評価（CAE）によるリアルタイムのトークン失効',
    titleEn: 'Real-Time Token Revocation via Continuous Access Evaluation (CAE)',
    scenarioJa:
      '従業員の退職やアカウント侵害が発生した際、従来のアクセストークン有効期限（最大約 60〜90 分）の終了を待たずに Exchange Online や SharePoint Online などの対応アプリへのアクセスを即座に遮断する必要があります。',
    scenarioEn:
      'When an employee leaves or an account is compromised, you must immediately block access to supported apps like Exchange Online and SharePoint Online without waiting up to 1 hour for standard access token expiration.',
    questionJa:
      '条件付きアクセスの「継続的アクセス評価（CAE）」が有効な場合、ユーザーのアカウントが無効化された際にトークンはどうなりますか？',
    questionEn:
      'When Continuous Access Evaluation (CAE) is enabled, what happens to a user’s access tokens when their account is disabled?',
    options: [
      {
        id: 'A',
        textJa: 'ユーザーが次回の対話型サインインを試行した時点で失効する',
        textEn: 'Revoked only when the user attempts the next sign-in',
        isCorrect: false,
        explanationJa:
          '次回サインイン時までは既存トークンが生き続けてしまい、CAE のリアルタイム失効には該当しません。',
        explanationEn:
          'Waiting for the next sign-in leaves existing tokens active and does not describe CAE.',
      },
      {
        id: 'B',
        textJa: 'トークン既定の有効期限（最大約 1 時間）が切れるまで有効',
        textEn: 'Remains valid until standard 1-hour JWT lifetime expires',
        isCorrect: false,
        explanationJa:
          '最大約 1 時間有効が続くのは CAE が無効な従来のステートレス JWT トークンの挙動です。',
        explanationEn:
          'Remaining valid until normal JWT expiry is legacy non-CAE behavior.',
      },
      {
        id: 'C',
        textJa: '変更イベント通知により数分以内にリアルタイムで失効される',
        textEn: 'Revoked in near real-time within minutes of disablement',
        isCorrect: true,
        explanationJa:
          'CAE（Continuous Access Evaluation）が有効な場合、アカウント無効化・パスワード変更・高ユーザーリスク検知・ネットワーク場所変更などの重大イベントが発生すると、リソースプロバイダー（EXO/SPO 等）へ通知され数分以内にほぼリアルタイムでアクセスが拒否・再評価されます。',
        explanationEn:
          'With CAE enabled, critical events such as account disablement, password reset, or high user risk trigger near real-time token revocation within minutes across CAE-capable resource providers.',
      },
      {
        id: 'D',
        textJa: 'ディレクトリのキャッシュ同期が完了する 72 時間後に失効する',
        textEn: 'Remains active until directory sync expires after 72 hours',
        isCorrect: false,
        explanationJa:
          '72 時間も遅延することはありません。CAE の目的はほぼ即時のアクセス遮断です。',
        explanationEn:
          'CAE operates within minutes rather than waiting 72 hours.',
      },
    ],
    overallExplanationJa:
      '継続的アクセス評価（CAE）では、Microsoft Entra ID と対応リソースプロバイダー（Exchange Online、SharePoint、Teams、MS Graph 等）が重大イベント（アカウント削除・無効化、パスワード変更、MFA 無効化、リスク上昇、IP 条件違反）を共有し、従来の有効期限切れを待たず数分以内にトークンを失効させます。',
    overallExplanationEn:
      'Continuous Access Evaluation (CAE) bridges Entra ID and supported services so critical security events (account disabled, password change, high risk, IP location change) revoke access within minutes rather than waiting for token expiration.',
    keyPointsJa: [
      'CAE によりアカウント無効化・パスワード変更・高リスク検知時に数分以内でトークン失効が可能',
      'ゼロトラストの「明示的に検証し続ける」を実現する重要機能',
    ],
    keyPointsEn: [
      'CAE revokes tokens within minutes upon critical events like account disablement',
      'Supports Zero Trust continuous verification',
    ],
    referenceTopic: 'Microsoft Entra ID - 継続的アクセス評価（CAE）',
  },
  {
    id: 'sakitoo-q19',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    requiredSelections: 2,
    titleJa: 'Azure Key Vault 証明書自動更新で統合サポートされる CA（2つ選択）',
    titleEn: 'Integrated Certificate Authorities for Key Vault Auto-Renewal (Select 2)',
    scenarioJa:
      'Azure Key Vault の証明書ライフサイクル管理機能を使用して、TLS/SSL 証明書の自動発行および期限前の自動更新を構成し、証明書期限切れによるシステム停止を防ぎたいと考えています。',
    scenarioEn:
      'You want to configure automatic enrollment and auto-renewal for TLS/SSL certificates in Azure Key Vault to prevent outages caused by expired certificates.',
    questionJa:
      'Key Vault の「証明書」機能で自動更新を設定できる証明書の発行元（統合 CA）はどれですか？（2つ選択）',
    questionEn:
      'Which two integrated Certificate Authorities (CAs) support automatic certificate renewal in Azure Key Vault? (Choose 2)',
    options: [
      {
        id: 'A',
        textJa: 'DigiCert',
        textEn: 'DigiCert',
        isCorrect: true,
        explanationJa:
          'DigiCert は Azure Key Vault とネイティブ統合されているパートナー CA であり、自動発行・自動更新がサポートされています。',
        explanationEn:
          'DigiCert is an officially partnered integrated CA in Azure Key Vault supporting automated issuance and renewal.',
      },
      {
        id: 'B',
        textJa: 'Let\'s Encrypt',
        textEn: 'Let\'s Encrypt',
        isCorrect: false,
        explanationJa:
          'Let\'s Encrypt は ACME クライアントや外部自動化スクリプト経由で利用されることはありますが、Key Vault の組み込み統合 CA としてはネイティブサポートされていません。',
        explanationEn:
          'Let\'s Encrypt is not a natively integrated CA partner inside Key Vault’s built-in CA configuration.',
      },
      {
        id: 'C',
        textJa: 'GlobalSign（Microsoft PKI Services）',
        textEn: 'GlobalSign (Microsoft PKI Services)',
        isCorrect: true,
        explanationJa:
          'GlobalSign は DigiCert とともに Azure Key Vault でネイティブ統合されている CA であり、アカウント連携により自動更新を設定できます。',
        explanationEn:
          'GlobalSign is natively integrated as a partner CA in Azure Key Vault for automated certificate lifecycle management.',
      },
      {
        id: 'D',
        textJa: 'Comodo',
        textEn: 'Comodo',
        isCorrect: false,
        explanationJa:
          'Comodo（Sectigo）は Key Vault の組み込み統合 CA リストには含まれません（手動/非統合 CA 扱いとなります）。',
        explanationEn:
          'Comodo is not a natively integrated CA in Azure Key Vault.',
      },
      {
        id: 'E',
        textJa: 'GoDaddy',
        textEn: 'GoDaddy',
        isCorrect: false,
        explanationJa:
          'GoDaddy も組み込み統合 CA として自動更新連携する対象ではありません。',
        explanationEn:
          'GoDaddy is not a natively integrated CA in Azure Key Vault.',
      },
    ],
    overallExplanationJa:
      'Azure Key Vault の組み込み統合パートナー証明書機関（Integrated CA）としてサポートされているのは **DigiCert** と **GlobalSign** の 2 つです。これらを Key Vault に登録することで、期限前の自動更新がプラットフォーム機能として実現します。',
    overallExplanationEn:
      'Azure Key Vault natively integrates with two partner Certificate Authorities—**DigiCert** and **GlobalSign**—enabling zero-touch automated certificate issuance and renewal.',
    keyPointsJa: [
      'Key Vault の統合 CA として自動更新をサポートするのは DigiCert と GlobalSign',
      '統合外 CA や社内 CA を使う場合は非統合 CA として CSR 発行・手動またはスクリプト更新が必要',
    ],
    keyPointsEn: [
      'DigiCert and GlobalSign are the two natively integrated partner CAs in Azure Key Vault',
      'Non-integrated CAs require CSR-based workflows or external automation',
    ],
    referenceTopic: 'Azure Key Vault 証明書の統合 CA と自動更新',
  },
  {
    id: 'sakitoo-q20',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Entra ID Protection で「高」ユーザーリスクとして検出されるシグナル',
    titleEn: 'Signals Classified as High User Risk in Entra ID Protection',
    scenarioJa:
      'Microsoft Entra ID Protection において、ユーザーアカウント自体が侵害されている可能性が極めて高いと判断され、パスワードリセット等の即時修復をトリガーする「ユーザーリスク（User risk）：高」の対象シグナルを整理しています。',
    scenarioEn:
      'In Microsoft Entra ID Protection, you are reviewing risk detections to determine which signal classifies a user’s overall User Risk level as "High" so that immediate credential remediation triggers.',
    questionJa:
      'Entra ID Protection の「ユーザーリスクポリシー」で「高」リスクとして検出されるシグナルはどれですか？',
    questionEn:
      'Which detection signal triggers a "High" user risk classification in Entra ID Protection?',
    options: [
      {
        id: 'A',
        textJa: '通常と異なる慣れない場所や端末からのサインイン試行',
        textEn: 'Sign-in attempt from an unfamiliar location',
        isCorrect: false,
        explanationJa:
          '慣れない場所（Unfamiliar sign-in properties）は主に個別のセッションに対する「サインインリスク（低〜中）」として評価されます。',
        explanationEn:
          'Unfamiliar sign-in properties are evaluated as Sign-in Risk rather than High User Risk.',
      },
      {
        id: 'B',
        textJa: 'マルウェア感染 IP に関連付けられた端末からのサインイン',
        textEn: 'Sign-in originating from a malware-linked IP',
        isCorrect: false,
        explanationJa:
          'マルウェア関連 IP からの通信などは個々の「サインインリスク」検出に分類されます。',
        explanationEn:
          'Malware-linked IP addresses are categorized under Sign-in Risk detections.',
      },
      {
        id: 'C',
        textJa: '公開流出データベースで確認された漏洩した資格情報',
        textEn: 'Confirmed leaked user credentials on dark web',
        isCorrect: true,
        explanationJa:
          'ダークウェブや公開された流出データベース等からユーザーの有効なユーザー名・パスワードの組み合わせが見つかった場合、「漏洩した資格情報（Leaked credentials）」としてユーザーリスク「高（High）」が即時記録されます。',
        explanationEn:
          'When Microsoft detects a match between a user’s valid credentials and leaked credential dumps on the dark web or public pastes, Entra ID Protection flags "Leaked credentials" as High User Risk.',
      },
      {
        id: 'D',
        textJa: '複数アカウントへ連続試行するパスワードスプレー攻撃検出',
        textEn: 'Automated password spray attempt across accounts',
        isCorrect: false,
        explanationJa:
          'パスワードスプレー試行自体は攻撃者の試行（サインインリスク側等）であり、パスワード一致・漏洩確認の「高」ユーザーリスクとは区別されます。',
        explanationEn:
          'Password spray detection evaluates brute-force attempts on sign-ins rather than confirmed credential leaks under High User Risk.',
      },
    ],
    overallExplanationJa:
      'Entra ID Protection では「サインインリスク（特定セッションの異常）」と「ユーザーリスク（アカウント資格情報自体の侵害確率）」を明確に分けて評価します。「漏洩した資格情報（Leaked credentials）」はパスワードそのものが流出しているため、代表的な **ユーザーリスク：高** のシグナルとなります。',
    overallExplanationEn:
      'Entra ID Protection separates Sign-in Risk (session anomaly) from User Risk (account compromise likelihood). **Leaked credentials** directly indicate password exposure and elevate User Risk to **High**.',
    keyPointsJa: [
      '「漏洩した資格情報（Leaked Credentials）」は典型的なユーザーリスク（高）の検出シグナル',
      '通常と異なる場所や匿名 IP、マルウェア関連 IP 等は「サインインリスク」として評価される',
    ],
    keyPointsEn: [
      'Leaked credentials trigger High User Risk in Entra ID Protection',
      'Unfamiliar locations and malware-linked IPs are classified under Sign-in Risk',
    ],
    referenceTopic: 'Entra ID Protection - ユーザーリスク vs サインインリスクの検出シグナル',
  },
];
