import { Question } from '../types/quiz';

export const CORE_QUESTIONS_BATCH7: Question[] = [
  {
    id: 'sc500-q102',
    number: 102,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Defender for Cloud Apps による Copilot Studio エージェントのランタイム保護',
    titleEn: 'Real-Time Runtime Protection for Microsoft Copilot Studio Agents',
    scenarioJa: `Contoso 社は、従業員が社内ナレッジ ベースや生成 AI の応答と対話するために使用する複数の Microsoft Copilot Studio エージェントを公開しました。セキュリティ チームは、監査ログで事後にアクティビティを確認するのではなく、セッションの実行中に Microsoft がユーザー プロンプトとツール呼び出し (Tool invocations) を検査し、要求に直接的または間接的なプロンプト インジェクション、安全でないツールの使用、またはデータ持ち出しの兆候が見られる場合に、ツール呼び出しが実行される前にブロックすることを望んでいます。`,
    scenarioEn: `Contoso has published several Microsoft Copilot Studio agents that employees use to interact with internal knowledge bases and generative AI responses. The security team wants Microsoft to inspect user prompts and tool invocations while a session is running, and to block a tool invocation before it executes when the request shows signs of direct or indirect prompt injection, unsafe tool use or data exfiltration, rather than reviewing the activity afterwards in audit logs.`,
    questionJa: 'この要件を満たすために、セキュリティ チームはどのアクションを実行すべきですか？',
    questionEn: 'Which action should the security team perform to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Cloud Apps で Copilot Studio エージェントの「エージェント ランタイム中のリアルタイム保護」(Real-time protection during agent runtime) をオンにし、同じ Microsoft Entra アプリケーション ID を使用して Power Platform 管理者に外部脅威検出のオンボーディングを完了してもらう',
        textEn: 'Turn on real-time protection during agent runtime for Copilot Studio agents in Microsoft Defender for Cloud Apps, and have a Power Platform administrator complete the matching external threat detection onboarding using the same Microsoft Entra application ID',
        isCorrect: true,
        explanationJa: '【正解】エージェント ランタイム中のリアルタイム保護は、Copilot Studio のすべてのツール呼び出しを実行前に検査のために Microsoft Defender へルーティングし、プロンプトが不審と判断された場合は呼び出しをブロックしてユーザーに通知し、Defender XDR アラートを発生させます。有効化するには、Defender ポータルでの構成に加えて、同じ Entra アプリ ID を使用して Power Platform 側で対応する外部脅威検出オンボーディングを完了する必要があります。',
        explanationEn: 'Real-time protection during agent runtime routes every Copilot Studio tool invocation through Microsoft Defender for inspection before it runs, and blocks the invocation, notifies the user and raises a Defender XDR alert when the prompt is judged suspicious. Enabling it requires configuration in the Defender portal plus matching onboarding in Power Platform using the same Entra app ID.'
      },
      {
        id: 'B',
        textJa: 'Microsoft Purview インサイダー リスク管理で Copilot Studio エージェントの利用およびユーザー プロンプトを監視する専用ポリシーを有効化し、プロンプト インジェクションや機密データ持ち出しの兆候が検出された際、Power Platform 管理者が調査・事後レビューを行えるようアラートを生成する',
        textEn: 'Enable a Microsoft Purview Insider Risk Management policy that continuously monitors user prompts and Copilot Studio agent usage across the tenant, generating investigation alerts for analysts whenever unsafe tool activity or exfiltration occurs',
        isCorrect: false,
        explanationJa: '【不正解】インサイダー リスク管理はアクティビティ発生後にアナリストのレビュー用アラートを生成するものであり、人間のユーザー リスクを対象としているため、エージェントの動作をセッション内でリアルタイムにブロックする機能はありません。',
        explanationEn: 'Insider Risk Management produces alerts for analyst review after the activity happens and is scoped to human user risk, so it provides no in-session blocking of agent behaviour.'
      },
      {
        id: 'C',
        textJa: 'Microsoft Defender for Cloud Apps で公開済みの Copilot Studio エージェントを接続済みアプリ コネクタとして登録・統合し、収集されたユーザー プロンプトおよびツール呼び出しのアクティビティ ログをスケジュール実行のレビューで検査して不審なセッションやデータ持ち出しを特定する',
        textEn: 'Register each published Copilot Studio agent as an app connector in Microsoft Defender for Cloud Apps, configure continuous activity log ingestion for prompts and tools, and have security analysts review the generated logs on a regular schedule',
        isCorrect: false,
        explanationJa: '【不正解】アプリ コネクタとして登録するだけでは事後にレビューするアクティビティ ログしか得られず、まさにチームが脱却したいと考えている事後対応型アプローチになってしまいます。',
        explanationEn: 'Registering the agent as an app connector only yields activity logs that are reviewed after the fact, which is precisely the reactive approach the team wants to move away from.'
      },
      {
        id: 'D',
        textJa: 'Microsoft Copilot Studio エージェントが社内ナレッジ ベースやダウンストリーム ツールに接続する際に使用できるコネクタの種類を制限し、未承認データ ソースへの持ち出しを遮断する Power Platform 向け Microsoft Purview データ損失防止 (DLP) ポリシーを構成する',
        textEn: 'Create a Microsoft Purview Data Loss Prevention (DLP) policy for Power Platform environments that strictly classifies connectors into business and non-business groups to restrict which downstream data sources Copilot Studio agents are permitted to invoke',
        isCorrect: false,
        explanationJa: '【不正解】Power Platform の DLP ポリシーは設計時にどのコネクタをエージェントが使用できるかを制御するものであり、ライブ プロンプトの内容を検査したり、実行時に個々のツール呼び出しを動的にブロックしたりすることはできません。',
        explanationEn: 'A Power Platform DLP policy governs which connectors an agent may use at design time; it cannot inspect the content of a live prompt or block an individual tool invocation at runtime.'
      }
    ],
    overallExplanationJa: `**エージェント ランタイム中のリアルタイム保護 (Real-time protection during agent runtime)** は、Microsoft Copilot Studio で作成されたローコード エージェント専用に構築された Microsoft Defender for Cloud Apps の保護機能です。

有効化すると、エージェントが実行するすべてのツール呼び出しが実行前に Defender の検査エンドポイントへルーティングされ、プロンプト インジェクションや悪意あるパラメーターが検知された場合はツール呼び出しを即座にブロックし、Defender XDR インシデント/アラートを表面化します。有効化には Defender ポータルでの設定と、同じ Microsoft Entra アプリ ID を用いた Power Platform 管理センターでの外部脅威検出オンボーディングの両側構成が必要です。`,
    overallExplanationEn: `Real-time protection during agent runtime is the Microsoft Defender for Cloud Apps capability built specifically for low-code agents created in Microsoft Copilot Studio. Once enabled, every tool invocation an agent makes is routed to Defender's inspection endpoint before it executes, and if the prompt or parameters look malicious the invocation is blocked, the user is told their message was blocked, and an alert surfaces in Defender XDR incidents and alerts. Enabling it is a two-sided task: turn on the setting in the Defender portal and have a Power Platform administrator complete the external threat detection onboarding using the same Microsoft Entra application ID. Power Platform DLP, Insider Risk Management and app connector activity logs all operate at design time or after the fact and cannot stop an action mid-session.`,
    keyPointsJa: [
      'Copilot Studio のツール実行前インライン検査・ブロック ＝ Defender for Cloud Apps のランタイム保護 ＋ Power Platform 外部脅威検出オンボーディング (同一 Entra App ID)',
      '直接/間接プロンプト インジェクションや不正ツール呼び出しを実行前に遮断し、Defender XDR アラートを発報する',
      'Power Platform DLP は設計時のコネクタ利用可否制御のみ、監査ログやインサイダー リスク管理は事後検知'
    ],
    keyPointsEn: [
      'Enable Defender for Cloud Apps real-time protection during agent runtime + Power Platform external threat detection with the same Entra app ID',
      'Inspects prompts and blocks malicious Copilot Studio tool invocations inline before execution',
      'Raises Defender XDR alerts rather than relying on post-event audit log review'
    ],
    referenceTopic: 'Copilot Studio エージェントのランタイム リアルタイム保護'
  },
  {
    id: 'sc500-q103',
    number: 103,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Key Vault キーの自動ローテーション ポリシーと Event Grid 有効期限間近通知',
    titleEn: 'Automating Key Vault Key Rotation and Near-Expiry Notifications',
    scenarioJa: `あるアプリケーションは、app-signing-key という名前の RSA キーを Azure Key Vault に格納しています。Contoso 社の暗号標準では、管理者の操作なしで 12 か月ごとにキーを自動的にローテーションすること、および利用側アプリケーションが新しいバージョンを取得しているか検証できるように、プラットフォーム チームがキーの有効期限の 30 日前に通知を受け取ることを義務付けています。`,
    scenarioEn: `An application stores an RSA key named app-signing-key in an Azure key vault. Contoso's cryptographic standard requires that the key be rotated automatically every 12 months without any administrator action, and that the platform team receive a notification 30 days before the key's expiry date so they can validate that consuming applications pick up the new version.`,
    questionJa: 'キー コンテナーで何を構成すべきですか？',
    questionEn: 'What should you configure on the key vault?',
    options: [
      {
        id: 'A',
        textJa: '12 か月ごとにキーをローテーションする app-signing-key のキー ローテーション ポリシー (Key rotation policy) と、Azure Event Grid 経由で配信される有効期限間近イベント通知 (Near-expiry event notification)',
        textEn: 'A key rotation policy on app-signing-key that rotates the key every 12 months, together with a near-expiry event notification delivered through Azure Event Grid.',
        isCorrect: true,
        explanationJa: '【正解】キー ローテーション ポリシーはキーごとに定義され、指定したスケジュールで新しいキー バージョンを自動生成するよう Key Vault に指示します。さらに Key Vault は有効期限間近イベントを Azure Event Grid に発行するため、そのイベントのサブスクリプションにより有効期限前の通知をプラットフォーム チームへ配信できます。',
        explanationEn: 'A key rotation policy is defined per key and instructs Key Vault to generate a new key version automatically on the schedule you specify. Key Vault also publishes near-expiry events to Azure Event Grid, so a subscription on that event can notify the platform team ahead of the expiry date.'
      },
      {
        id: 'B',
        textJa: '作成または最後の更新から 12 か月以上経過した app-signing-key などの RSA キーを非準拠として検出・監査し、コンプライアンス ダッシュボード上で期限切れ間近のキーを一覧報告する Azure Policy 割り当て',
        textEn: 'An Azure Policy assignment configured with Audit effect to detect RSA keys older than 12 months and surface upcoming expirations in compliance reporting.',
        isCorrect: false,
        explanationJa: '【不正解】監査ポリシーは経過日数のしきい値を超えたキーを事後に報告するのみであり、キーを自動ローテーションしたり有効期限前に事前警告したりする機能はありません。',
        explanationEn: 'An audit policy reports on keys that have exceeded the age threshold after the fact. It neither rotates the key nor warns the team in advance of expiry.'
      },
      {
        id: 'C',
        textJa: '90 日間の論理的な削除保持期間を伴う消去保護 (Purge protection) と定期的なキー アクセス監査診断ログの Log Analytics 転送を有効化して、キーのライフサイクルを保護・追跡する構成',
        textEn: 'Purge protection with a 90-day soft-delete retention period together with Key Vault diagnostic log forwarding to monitor key versions and access events.',
        isCorrect: false,
        explanationJa: '【不正解】消去保護は保持期間中にコンテナー オブジェクトが永久削除されるのを防ぐ機能であり、新しいキー バージョンの生成や有効期限通知の送信には関与しません。',
        explanationEn: 'Purge protection prevents permanent deletion of vault objects during the retention window. It plays no part in generating new key versions or in producing expiry notifications.'
      },
      {
        id: 'D',
        textJa: 'app-signing-key の新しいキー バージョンを作成し、有効期限の 30 日前にプラットフォーム チームへ電子メール通知を送信するよう年次スケジュールで構成された Azure Automation Runbook',
        textEn: 'An Azure Automation runbook scheduled annually to generate a new key version in the vault and send a 30-day advance email alert to the platform team.',
        isCorrect: false,
        explanationJa: '【不正解】Runbook は技術的にはキー バージョンを作成できますが、ネイティブの Key Vault 機能を重複実装することになり、資格情報やコード・障害ポイントの保守が増えます。また追加のカスタム開発なしでは有効期限間近通知も提供できません。',
        explanationEn: 'A runbook can technically create key versions, but it duplicates a native Key Vault feature and adds credentials, code, and failure modes to maintain. It also provides no near-expiry notification without further custom development.'
      }
    ],
    overallExplanationJa: `Azure Key Vault は個別のキー レベルでの**自動ローテーション ポリシー (Key rotation policy)** をサポートしており、ローテーション間隔 (12 か月など) と各生成バージョンの有効期限を定義できます。ポリシーが実行されると、以前のバージョンを保持したまま新しいバージョンのキーが自動生成されます。

また、Key Vault は有効期限の指定日数前 (例: 30 日前) に発火する **KeyNearExpiry** などのライフサイクル イベントを **Azure Event Grid** へ発行するため、これら 2 つのネイティブ機能を組み合わせることで、カスタム スクリプトや手動介入なしに標準要件を完全に満たせます。`,
    overallExplanationEn: `Azure Key Vault supports rotation policies at the level of an individual key, which define both the rotation interval and the expiry time for each generated version. When the policy fires, Key Vault creates a new version of the key while retaining previous versions, so applications referencing the versionless key identifier pick up the new material automatically. Key Vault also emits lifecycle events to Azure Event Grid, including a near-expiry event that can be configured to fire a set number of days before expiry and routed to email, Logic Apps, or a webhook. Together these two features satisfy the standard without any scheduled scripts or manual intervention. Purge protection and audit policies address deletion resilience and reporting respectively, neither of which performs rotation.`,
    keyPointsJa: [
      'Key Vault キーの自動定期ローテーション ＝ キー単位の Key rotation policy を構成',
      '有効期限の N 日前アラート通知 ＝ Azure Event Grid の Key Vault 有効期限間近イベント (KeyNearExpiry) をサブスクライブ',
      'バージョンレス キー URI をアプリが参照していれば新しいバージョンを自動取得できる'
    ],
    keyPointsEn: [
      'Configure a Key Vault key rotation policy on app-signing-key for zero-touch 12-month rotation',
      'Use Azure Event Grid subscriptions on Key Vault near-expiry events for 30-day advance notifications',
      'Native alternative to custom Azure Automation runbooks and audit-only Azure Policies'
    ],
    referenceTopic: 'Azure Key Vault 自動キー ローテーションと Event Grid 通知'
  },
  {
    id: 'sc500-q104',
    number: 104,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'AWS アカウントの Defender for Cloud へのキーレス接続 (CloudFormation + フェデレーション信頼)',
    titleEn: 'Keyless AWS Onboarding in Defender for Cloud via CloudFormation Trust Policy',
    scenarioJa: `ある企業は Microsoft Azure と Amazon Web Services (AWS) の両方でワークロードを稼働させています。セキュリティ チームは、AWS リソース上で Defender for Servers および Defender for Containers を有効にするため、AWS アカウントを Microsoft Defender for Cloud にオンボーディングしたいと考えています。

同社のセキュリティ ポリシーでは、Defender for Cloud に長期的な AWS アクセス キーやシークレット キーを一切保存してはならず、Defender for Cloud に付与される AWS IAM 権限は信頼関係 (Trust relationship) を通じて一時的に引き受け (Assume) られる必要があると定められています。

この要件を満たすように Defender for Cloud で AWS コネクタを構成する必要があります。`,
    scenarioEn: `A company runs workloads on both Microsoft Azure and Amazon Web Services (AWS). The security team wants to onboard the AWS account to Microsoft Defender for Cloud so they can enable Defender for Servers and Defender for Containers on the AWS resources. The company's security policy states that Defender for Cloud must never store long-term AWS access keys or secret keys, and that any AWS IAM permissions granted to Defender for Cloud must be assumed temporarily through a trust relationship.

You need to configure the AWS connector in Defender for Cloud to meet this requirement.`,
    questionJa: 'コネクタの作成時にどのアクションを実行すべきですか？',
    questionEn: 'Which action should you perform when creating the connector?',
    options: [
      {
        id: 'A',
        textJa: 'Defender for Cloud で保護対象となるすべての AWS EC2 インスタンスに Azure Arc Connected Machine エージェントをインストールし、各インスタンスを個別に Microsoft Entra ID と Azure サブスクリプションへオンボーディングして接続する',
        textEn: 'Install the Azure Arc Connected Machine agent on every AWS EC2 instance in the account and onboard each instance individually into Microsoft Entra ID and your Azure subscription for security management.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Arc 対応サーバーは特定のシナリオで個々の AWS EC2 インスタンスをオンボーディングするために使用されますが、AWS アカウント全体とその IAM 権限を Defender for Cloud に接続してプラン管理するための仕組みではなく、資格情報／信頼関係要件にも対処しません。',
        explanationEn: 'While Azure Arc-enabled servers can be used to onboard individual AWS EC2 instances for certain scenarios, this is not the mechanism used to connect an entire AWS account and its IAM permissions to Defender for Cloud, and it does not address the credential/trust requirement described.'
      },
      {
        id: 'B',
        textJa: 'Defender for Cloud が提供する AWS CloudFormation テンプレートをデプロイし、フェデレーション資格情報を使用して Defender for Cloud がロールを引き受ける (Assume) ことを許可する信頼ポリシーを持つ IAM ロールを作成する',
        textEn: 'Deploy the AWS CloudFormation template provided by Defender for Cloud, which creates an IAM role with a trust policy that allows Defender for Cloud to assume the role using federated credentials.',
        isCorrect: true,
        explanationJa: '【正解】Defender for Cloud の AWS 向けネイティブ マルチクラウド コネクタは、CloudFormation テンプレートを使用してフェデレーション (OIDC ベース) アクセスを確立する信頼ポリシー付きの IAM ロールをデプロイし、静的な資格情報を保存することなく Defender for Cloud が一時的にロールを引き受けられるようにします。',
        explanationEn: 'Defender for Cloud\'s native multicloud connector for AWS uses a CloudFormation template to deploy an IAM role with a trust policy that establishes federated (OIDC-based) access, allowing Defender for Cloud to assume the role temporarily without storing static credentials.'
      },
      {
        id: 'C',
        textJa: 'AWS アカウント内でプログラム アクセス権限を持つ専用の AWS IAM ユーザーを手動作成し、アクセス キーとシークレット キーのペアを生成した上で、それらの資格情報を Defender for Cloud の AWS 環境コネクタ設定に入力して接続する',
        textEn: 'Manually create an AWS IAM user with programmatic access, generate an access key and secret access key pair, and enter those credentials into the Defender for Cloud AWS connector environment settings.',
        isCorrect: false,
        explanationJa: '【不正解】IAM アクセス キーとシークレット キーを使用すると長期的な資格情報を Defender for Cloud に保存することになり、永続的な AWS 資格情報を避ける要件に直接違反します。',
        explanationEn: 'Using an IAM access key and secret key requires storing long-term credentials in Defender for Cloud, which directly violates the requirement to avoid persistent AWS credentials. This was the legacy method and is not the recommended or default approach for the native connector.'
      },
      {
        id: 'D',
        textJa: 'AWS アカウントに既存の IAM ロールとユーザーおよびポリシー割り当てを Microsoft Entra ID テナント内へ自動的に複製・同期するように、Microsoft Entra ID Connect Cloud Sync のプロビジョニング構成を作成する',
        textEn: 'Configure Microsoft Entra ID Connect Cloud Sync provisioning to continuously synchronize AWS IAM roles, users, and permission assignments from the AWS account into your Microsoft Entra ID tenant directory.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Entra Connect Cloud Sync はオンプレミス ディレクトリと Microsoft Entra ID 間のハイブリッド ID 同期に使用されるものであり、AWS アカウントを Defender for Cloud に接続する機能はありません。',
        explanationEn: 'Microsoft Entra Connect Cloud Sync is used for hybrid identity synchronization between on-premises directories and Microsoft Entra ID; it has no role in connecting AWS accounts to Defender for Cloud or managing AWS IAM trust relationships.'
      }
    ],
    overallExplanationJa: `ネイティブ コネクタを通じて AWS アカウントを Microsoft Defender for Cloud に接続する際は、Defender for Cloud からダウンロードした **AWS CloudFormation テンプレート**を AWS 側にデプロイします。

これにより、長期のアクセス キー／シークレット キーを保存する代わりに、フェデレーション信頼ポリシー (OIDC / AssumeRole) を通じて Defender for Cloud に一時的な権限を引き受けさせる **IAM ロール**が作成され、マルチクラウド環境の最小権限・キーレス オンボーディングを実現できます。`,
    overallExplanationEn: `Connecting AWS to Defender for Cloud through the native connector involves deploying a CloudFormation template that creates an IAM role with a trust policy enabling Defender for Cloud to assume the role via federated credentials, eliminating the need to store long-term access keys. This approach aligns with least-privilege and secure onboarding practices for multicloud environments in Defender for Cloud.`,
    keyPointsJa: [
      '静的 AWS アクセス キーを保存せずに AWS アカウントを Defender for Cloud へオンボーディング ＝ 提供された CloudFormation テンプレートでフェデレーション信頼ポリシー付き IAM ロールを作成',
      'IAM ユーザー＋アクセス キー/シークレット キーの手動入力は長期資格情報となるため NG',
      '一時的かつ自動ローテーションされるフェデレーション トークンでロールを Assume して保護・CSPM 評価を実行する'
    ],
    keyPointsEn: [
      'Deploy Defender for Cloud\'s provided AWS CloudFormation template to establish an IAM role with federated trust',
      'Eliminates long-term AWS access keys and secret keys via temporary AssumeRole/OIDC tokens',
      'Native onboarding prerequisite for Defender for Servers and Defender for Containers across AWS'
    ],
    referenceTopic: 'Defender for Cloud の AWS マルチクラウド コネクタ (CloudFormation)'
  },
  {
    id: 'sc500-q105',
    number: 105,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Bicep と CI/CD パイプラインを用いた Azure Policy の Infrastructure as Code 管理',
    titleEn: 'Managing Azure Policy as Code with Bicep Templates and CI/CD Pipelines',
    scenarioJa: `Contoso Ltd. には、開発 (Development)、テスト (Test)、および本番 (Production) の 3 つの Azure サブスクリプションがあります。セキュリティ チームは、保存時の暗号化を要求し許可されるリソース リージョンを制限する定義を含む同じ Azure Policy 定義セットが 3 つのサブスクリプションすべてに一貫して適用されるようにする必要があります。

チームは、ポリシーの変更をバージョン管理で追跡し、デプロイ前にピア レビューを行い、変更が承認されるたびにすべてのサブスクリプションへ自動的にデプロイされることを要求しています。コンプライアンス監査上の理由から、Azure portal での手動構成は認められません。

Infrastructure as Code (IaC) を使用してこれらの要件を満たすソリューションを実装する必要があります。`,
    scenarioEn: `Contoso Ltd. has three Azure subscriptions: Development, Test, and Production. The security team must ensure that the same set of Azure Policy definitions—including definitions that require encryption at rest and restrict allowed resource locations—are consistently applied across all three subscriptions. The team requires that policy changes be tracked in version control, peer-reviewed before deployment, and automatically deployed to all subscriptions whenever a change is approved. Manual configuration through the Azure portal is not acceptable for compliance audit purposes.

You need to implement a solution that meets these requirements by using infrastructure as code.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Cloud で各サブスクリプションの規制コンプライアンス ダッシュボードを定期的に確認し、必要なポリシー基準に対して非準拠として識別された項目へ手動で「クイック修正」(Quick Fix) 修復アクションを順次適用して一貫性を確保する',
        textEn: 'In Microsoft Defender for Cloud, regularly review the regulatory compliance dashboard for each Azure subscription and manually apply the "Quick Fix" remediation actions for any policy definition identified as noncompliant across environments.',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Cloud の規制コンプライアンス ダッシュボードは非準拠リソースを事後的に特定・修復するのに役立ちますが、ポリシー定義をコードとして作成、バージョン管理、またはサブスクリプション間で一貫デプロイする仕組みではありません。',
        explanationEn: 'The Defender for Cloud regulatory compliance dashboard helps identify and remediate noncompliant resources reactively, but it is not a mechanism for authoring, version-controlling, or consistently deploying policy definitions as code across subscriptions.'
      },
      {
        id: 'B',
        textJa: '各サブスクリプションに対して Azure portal で手動で必要なポリシーを構成し、設定を PowerShell Desired State Configuration (DSC) スクリプトにエクスポートして、監査参照用にドキュメント ライブラリに保存する',
        textEn: 'Configure the required policies manually in the Azure portal for each subscription, then export the settings to PowerShell Desired State Configuration (DSC) scripts and store the scripts in a document library for audit reference.',
        isCorrect: false,
        explanationJa: '【不正解】ポータルで手動構成することは IaC 要件を満たさず、また DSC スクリプトは Azure Policy 定義や割り当てを定義・デプロイするためのものではなく、仮想マシン内部の OS 状態を構成するためのものです。',
        explanationEn: 'Manually configuring policies in the portal does not meet the infrastructure as code requirement, and DSC scripts are designed for configuring operating system state on virtual machines, not for defining or deploying Azure Policy definitions and assignments.'
      },
      {
        id: 'C',
        textJa: 'Git リポジトリに格納された Bicep テンプレートとして Azure Policy 定義と割り当てを作成し、プル リクエストの承認後に Azure Resource Manager デプロイ コマンドを実行して各サブスクリプションにテンプレートをデプロイする Azure DevOps パイプラインを構成する',
        textEn: 'Author the Azure Policy definitions and assignments as Bicep templates stored in a Git repository, and configure an Azure DevOps pipeline that runs Azure Resource Manager deployment commands to deploy the templates to each subscription after a pull request is approved.',
        isCorrect: true,
        explanationJa: '【正解】ポリシー定義と割り当てを Git リポジトリ内の Bicep コードとして定義し、ピア レビュー (PR 承認) と自動デプロイを強制するパイプラインを組み合わせることで、バージョン管理、変更承認、および IaC を用いたサブスクリプション間の一貫した反復可能デプロイというすべての要件を満たします。',
        explanationEn: 'Defining policy definitions and assignments as Bicep code in a Git repository, combined with a pipeline that enforces peer review and automated deployment, satisfies all the stated requirements: version control, change approval, and consistent, repeatable deployment across subscriptions using infrastructure as code.'
      },
      {
        id: 'D',
        textJa: '必要なポリシー定義と割り当てを適用する PowerShell コマンドを含む Azure Automation Runbook を作成し、各コンプライアンス監査サイクルの前にアナリストが 3 つのサブスクリプションそれぞれに対して Runbook を手動トリガーで実行する',
        textEn: 'Create an Azure Automation runbook containing PowerShell commands to deploy and assign the required policies, and have a compliance analyst manually trigger the runbook against all three Azure subscriptions prior to each scheduled audit cycle.',
        isCorrect: false,
        explanationJa: '【不正解】Automation Runbook は PowerShell を実行できますが、各監査サイクル前に手動トリガーを要求する方法では、変更承認時に自動的にデプロイされるパイプライン要件や、コードとしてのバージョン管理・PR レビュー要件を満たせません。',
        explanationEn: 'While Automation runbooks can execute PowerShell, requiring a manual trigger before each audit cycle does not provide the automated, approval-gated deployment on change that the scenario requires, and it does not inherently provide version control of the policy definitions themselves.'
      }
    ],
    overallExplanationJa: `Infrastructure as Code (IaC) を用いてガバナンス・セキュリティ制御を実装するとは、Azure Policy 定義および割り当てを宣言的なテンプレート ファイル (**Bicep** や ARM JSON など) として定義し、ソース管理 (**Git**) に保管した上で、プル リクエストによるピア レビューを経て **CI/CD パイプライン** (Azure DevOps / GitHub Actions) から自動デプロイすることを意味します。

これにより、手作業のポータル設定や属人的な Runbook 実行を排除し、すべての環境 (Dev / Test / Prod) で完全な監査証跡と一貫性を保証できます。`,
    overallExplanationEn: `Implementing security controls by using infrastructure as code means defining Azure Policy definitions and assignments in template files (such as Bicep or ARM JSON) that are stored in source control and deployed through an automated CI/CD pipeline, ensuring consistency, auditability, and repeatable governance across environments. Authoring Bicep templates in Git with a PR-gated CI/CD pipeline is the only choice that fully satisfies the version control, approval, and automated deployment requirements described in the scenario.`,
    keyPointsJa: [
      'Azure Policy の IaC 管理・PR ピア レビュー・複数サブスクリプションへの自動展開 ＝ Git 上の Bicep テンプレート ＋ Azure DevOps パイプライン',
      'PowerShell DSC は VM 内の OS 構成管理用であり Azure Policy 割り当て用ではない',
      'ポータル手作業や監査前だけの Runbook 手動実行は継続的 IaC 要件に不適合'
    ],
    keyPointsEn: [
      'Define Azure Policy definitions and assignments as Bicep templates in Git with PR-gated CI/CD deployment',
      'Ensures version history, peer review, auditability, and consistency across Dev, Test, and Prod subscriptions',
      'DSC configures VM OS state, not Azure Policy resources'
    ],
    referenceTopic: 'Bicep と CI/CD による Azure Policy as Code'
  },
  {
    id: 'sc500-q106',
    number: 106,
    domain: 'Purview & コンプライアンス監査',
    difficulty: '標準 (Medium)',
    titleJa: 'Purview 監査 (Audit) による Security Copilot 利用履歴の耐改ざん証跡取得',
    titleEn: 'Retrieving Tamper-Resistant Security Copilot Activity Logs in Purview Audit',
    scenarioJa: `Contoso 社のコンプライアンス チームは、任意の月について、誰がいつ Microsoft Security Copilot でプロンプトを実行し、どのプラグインが呼び出されたかを証明できなければなりません。その証拠は、Security Copilot セッション履歴のスクリーンショットではなく、改ざん耐性があり一元的に保持されたログから取得する必要があります。`,
    scenarioEn: `Contoso's compliance team must be able to demonstrate, for any given month, which users ran prompts in Microsoft Security Copilot, when they ran them, and which plugins were invoked. The evidence must come from a tamper-resistant, centrally retained log rather than from screenshots of the Security Copilot session history.`,
    questionJa: 'コンプライアンス チームはどこからこのアクティビティ レコードを取得すべきですか？',
    questionEn: 'Where should the compliance team retrieve this activity record?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Purview 監査 (Microsoft Purview Audit) で Security Copilot アクティビティを検索する',
        textEn: 'Microsoft Purview Audit, searching for Security Copilot activities.',
        isCorrect: true,
        explanationJa: '【正解】Security Copilot はプロンプトの送信やプラグインの呼び出しを含むユーザー アクティビティを Microsoft Purview 統合監査ログに記録します。コンプライアンス チームはそのログをユーザー・アクティビティ・日付範囲で検索し、テナント レベルの保持ポリシーが適用された証跡として結果をエクスポートできます。',
        explanationEn: 'Security Copilot writes user activity, including prompt submissions and plugin invocations, into the Microsoft Purview unified audit log. Compliance teams can search that log by user, activity, and date range, and export the results as evidence with tenant-level retention applied.'
      },
      {
        id: 'B',
        textJa: 'Microsoft Security Copilot ポータル内にあるセッション履歴ペイン (Session history) を確認する',
        textEn: 'The session history pane located in the Security Copilot portal.',
        isCorrect: false,
        explanationJa: '【不正解】セッション履歴は個々のユーザーまたはワークスペース メンバーが閲覧できる範囲に限定されており、運用の継続性のための機能です。すべてのユーザーを網羅し一元保持・エクスポートできる改ざん耐性のあるコンプライアンス記録ではありません。',
        explanationEn: 'Session history is scoped to what an individual user or workspace member can see and is intended for operational continuity. It is not a retained, exportable compliance record covering all users.'
      },
      {
        id: 'C',
        textJa: 'Security Compute Units (SCU) を含むリソース グループの Azure アクティビティ ログを確認する',
        textEn: 'The Azure activity log for the Security Compute Units resource group.',
        isCorrect: false,
        explanationJa: '【不正解】Azure アクティビティ ログは容量リソースのプロビジョニングや変更といったコントロール プレーン操作を記録するものであり、Security Copilot 内部でのプロンプト送信やプラグイン呼び出しは記録しません。',
        explanationEn: 'The Azure activity log records control-plane operations such as provisioning or changing capacity resources. It does not record prompt submissions or plugin invocations inside Security Copilot.'
      },
      {
        id: 'D',
        textJa: 'Security Copilot の使用状況メトリクスを収集する Microsoft Sentinel データ コネクタを確認する',
        textEn: 'A Microsoft Sentinel data connector for Security Copilot usage metrics.',
        isCorrect: false,
        explanationJa: '【不正解】使用状況メトリクスは誰がどのアクションを実行したかではなく、容量消費量 (SCU) を表すものです。監査可能なユーザー アクティビティは統合監査ログを通じて記録されます。',
        explanationEn: 'Usage metrics describe capacity consumption rather than who performed which action. Auditable user activity for Security Copilot is surfaced through the unified audit log rather than a metrics feed.'
      }
    ],
    overallExplanationJa: `Microsoft Security Copilot は他の Microsoft 365 やセキュリティ ワークロードと同様に **Microsoft Purview 統合監査ログ**に統合されています。

プロンプト送信、セッション アクティビティ、およびプラグイン呼び出しは、実行したユーザー・タイムスタンプ・詳細情報付きの監査イベントとして記録されます。コンプライアンス担当者は **Microsoft Purview Audit** でアクティビティの種類・ユーザー・期間を指定して検索し、テナントの監査保持構成に従って長期保管された耐改ざん証跡をエクスポートできます。`,
    overallExplanationEn: `Security Copilot participates in the Microsoft Purview unified audit log in the same way as other Microsoft 365 and security workloads. Prompt submissions, session activity, and plugin invocations are recorded as audit events attributed to the user who performed them, with a timestamp and relevant details. Compliance staff search these events by activity type, user, and date range in Purview Audit, and can export the results for an evidence package. Retention follows the tenant's audit retention configuration, which makes the record durable and centrally governed rather than dependent on portal session history. The Azure activity log and capacity metrics cover infrastructure and consumption respectively and cannot answer who ran which prompt.`,
    keyPointsJa: [
      'Security Copilot の「誰が・いつ・どのプロンプトやプラグインを実行したか」の公式監査証跡 ＝ Microsoft Purview Audit (統合監査ログ)',
      'テナントの監査保持ポリシーに従い改ざん耐性のある形で検索・エクスポート可能',
      'Azure アクティビティ ログは SCU リソースの作成/変更のみを記録し、内部のプロンプト実行履歴は含まない'
    ],
    keyPointsEn: [
      'Search Microsoft Purview Audit for Security Copilot prompt submissions, sessions, and plugin invocations',
      'Provides tamper-resistant, centrally retained, exportable compliance evidence across all users',
      'Azure activity log tracks SCU resource management only, not Security Copilot prompt activity'
    ],
    referenceTopic: 'Purview 統合監査ログによる Security Copilot 監査'
  },
  {
    id: 'sc500-q107',
    number: 107,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Security Exposure Management による AI エージェント ID の爆発半径と攻撃経路分析',
    titleEn: 'Analyzing AI Agent Blast Radius in Microsoft Security Exposure Management',
    scenarioJa: `Microsoft Copilot Studio および Azure AI Foundry を使用して複数の AI エージェントをデプロイした企業のセキュリティ管理者は、エージェント ID が侵害された場合の潜在的な影響を評価する必要があります。各エージェントは Entra Agent ID で登録されており、Microsoft Graph、コネクタ、およびダウンストリーム データ ソースに対するさまざまな権限が付与されています。

管理者は Microsoft Defender XDR を使用して、特定の AI エージェント ID が侵害された場合に到達または影響を与える可能性のあるリソース、データ ソース、プラグイン、およびその他の ID を含む完全な「爆発半径」(Blast radius) を視覚化し、インシデントが発生する前に過度に寛容なアクセスを修復したいと考えています。`,
    scenarioEn: `A security administrator at a company that has deployed multiple AI agents built with Microsoft Copilot Studio and Azure AI Foundry needs to assess the potential impact of a compromised agent identity. Each agent is registered with an Entra Agent ID and has been granted various permissions to Microsoft Graph, connectors, and downstream data sources. The administrator wants to use Microsoft Defender XDR to visualize the full "blast radius" of a specific AI agent identity — including which resources, data sources, plugins, and other identities it can reach or influence if compromised — so that overly permissive access can be remediated before an incident occurs.`,
    questionJa: 'この分析を実行するために、管理者はどの Defender XDR 機能を使用すべきですか？',
    questionEn: 'Which Defender XDR capability should the administrator use to perform this analysis?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Cloud Apps のクラウド アプリ検出 (Cloud app discovery) レポートと接続アプリ使用状況インサイト',
        textEn: 'Cloud app discovery and shadow IT usage reports in Microsoft Defender for Cloud Apps',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Cloud Apps のクラウド アプリ検出はネットワーク トラフィック ログに基づいてシャドウ IT や未承認 SaaS の使用を特定するものであり、Entra Agent ID に紐付いた AI エージェント ID の権限グラフや攻撃経路をモデル化するものではありません。',
        explanationEn: 'Cloud app discovery in Microsoft Defender for Cloud Apps identifies shadow IT and unsanctioned SaaS usage based on network traffic logs, but it does not model AI agent identity permission graphs or attack paths tied to Entra Agent ID.'
      },
      {
        id: 'B',
        textJa: 'Microsoft Entra ID Protection の危険なサインイン (Risky sign-ins) レポートおよびユーザー リスク検出イベントの一覧',
        textEn: 'The risky sign-ins report and risk detections list in Microsoft Entra ID Protection',
        isCorrect: false,
        explanationJa: '【不正解】危険なサインイン レポートは匿名 IP アドレスや不可能な移動といった認証リスク シグナルに焦点を当てており、AI エージェント ID が侵害された場合にアクセス可能なリソースやデータをマッピングする機能ではありません。',
        explanationEn: 'The risky sign-ins report focuses on authentication risk signals such as anonymous IP addresses or impossible travel, not on mapping the resources and data an AI agent identity could access if compromised.'
      },
      {
        id: 'C',
        textJa: 'Microsoft Sentinel のユーザーとエンティティの行動分析 (UEBA) によるエンティティ行動異常タイムラインとリスク スコア',
        textEn: 'User and entity behavior analytics (UEBA) anomaly insights and timelines in Sentinel',
        isCorrect: false,
        explanationJa: '【不正解】Sentinel の UEBA は時間の経過に伴う異常なユーザー／エンティティの行動パターンを検出するため不審なアクティビティの検知には有用ですが、AI エージェントの権限や接続リソースのグラフィカルな爆発半径・攻撃経路マッピングは提供しません。',
        explanationEn: 'UEBA in Microsoft Sentinel detects anomalous user and entity behavior patterns over time, which is useful for detecting suspicious activity, but it does not provide a graphical blast radius or attack path mapping of an AI agent\'s permissions and connected resources.'
      },
      {
        id: 'D',
        textJa: 'Microsoft Security Exposure Management の攻撃パス (Attack paths) と AI エージェントの露出インサイト (AI agent exposure insights)',
        textEn: 'Microsoft Security Exposure Management attack paths and AI agent exposure insights',
        isCorrect: true,
        explanationJa: '【正解】Defender XDR 内の Microsoft Security Exposure Management には専用の AI エージェント露出インサイトと攻撃パス分析が含まれており、Entra Agent ID の権限、接続されたリソース、および他の ID との関係をマッピングして、潜在的な侵害時の爆発半径を視覚化・定量化できます。',
        explanationEn: 'Microsoft Security Exposure Management within Defender XDR includes dedicated AI agent exposure insights and attack path analysis that map an Entra Agent ID\'s permissions, connected resources, and relationships to other identities, allowing analysts to visualize and quantify the blast radius of a potential compromise.'
      }
    ],
    overallExplanationJa: `Entra Agent ID リスクの爆発半径 (Blast radius) を事前のインシデント予防として分析するには、AI エージェント ID に紐付く関係性、権限、および接続されたリソースのグラフを可視化する必要があります。

Defender XDR 内の **Microsoft Security Exposure Management** が提供する**攻撃パス (Attack paths) および AI エージェントの露出インサイト**はまさにこれを可能にし、エージェント侵害時に到達可能なデータ ソース・プラグイン・他 ID を可視化して過剰権限の是正に活用できます。`,
    overallExplanationEn: `Analyzing blast radius for Entra Agent ID risks requires visibility into the relationships, permissions, and connected resources associated with an AI agent identity, which is precisely what Microsoft Security Exposure Management's attack path and exposure insights provide within Defender XDR. The other options address different security scenarios, such as shadow IT discovery, behavioral anomaly detection, or sign-in risk, none of which model the interconnected exposure of an AI agent identity.`,
    keyPointsJa: [
      'Defender XDR で Entra Agent ID の侵害時「爆発半径」(権限・到達可能データ・接続先・他 ID との関係) を事前可視化 ＝ Microsoft Security Exposure Management の攻撃パス ＆ AI エージェント露出インサイト',
      'Entra ID Protection や Sentinel UEBA は認証リスク・行動異常検知であり、事前の権限グラフ攻撃経路分析とは異なる',
      '過剰な Graph 権限やデータ ソース接続をインシデント前に特定・縮小できる'
    ],
    keyPointsEn: [
      'Use Microsoft Security Exposure Management attack paths and AI agent exposure insights in Defender XDR',
      'Maps Entra Agent ID permissions, plugins, connected data sources, and lateral blast radius',
      'Enables proactive remediation of overly permissive AI agent access before compromise'
    ],
    referenceTopic: 'Microsoft Security Exposure Management と AI エージェント露出分析'
  },
  {
    id: 'sc500-q108',
    number: 108,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Policy の Modify 効果によるタグ継承と既存リソース グループの自動修復',
    titleEn: 'Tag Inheritance and Remediation via Azure Policy Modify Effect',
    scenarioJa: `Contoso 社は、チャージバック レポートを正確にするため、Azure 環境内のすべてのリソース グループに CostCenter タグを付与することを義務付けています。次の要件を満たす単一のカスタム Azure Policy 定義を作成する必要があります：

- CostCenter タグなしでリソース グループが作成された場合、作成をブロックするのではなく、親サブスクリプションから継承した値を使用して CostCenter タグを自動的に追加すること。
- 定義が割り当てられた後、修復タスク (Remediation task) を通じて既存のタグなしリソース グループを準拠状態にできること。`,
    scenarioEn: `Contoso requires every resource group in its Azure estate to carry a CostCenter tag so that chargeback reporting is accurate. You must author a single custom Azure Policy definition that:

- Adds the CostCenter tag with the value inherited from the parent subscription when a resource group is created without it, rather than blocking the creation.
- Can bring existing untagged resource groups into compliance through a remediation task after the definition is assigned.`,
    questionJa: '定義でどのポリシー効果 (Policy effect) を構成すべきですか？',
    questionEn: 'Which policy effect should you configure in the definition?',
    options: [
      {
        id: 'A',
        textJa: 'Append',
        textEn: 'Append',
        isCorrect: false,
        explanationJa: '【不正解】Append はリソースの作成または更新要求時にフィールドやタグを追加するのみで、修復タスク (Remediation task) には対応していません。既存の非準拠リソース グループはタグなしのまま残ってしまいます。',
        explanationEn: 'Append adds a field or tag during the create or update request only, and it cannot be used with remediation tasks. Existing non-compliant resource groups would stay untagged.'
      },
      {
        id: 'B',
        textJa: 'DeployIfNotExists',
        textEn: 'DeployIfNotExists',
        isCorrect: false,
        explanationJa: '【不正解】DeployIfNotExists は関連リソース (診断設定や拡張機能など) が欠落している場合に別の関連リソースをデプロイする効果であり、評価対象リソース自体のプロパティやタグを変更するために使用するものではありません。',
        explanationEn: 'DeployIfNotExists deploys a related resource, such as a diagnostic setting or an extension, when one is missing. It is not used to alter a property or tag on the evaluated resource itself.'
      },
      {
        id: 'C',
        textJa: 'Modify',
        textEn: 'Modify',
        isCorrect: true,
        explanationJa: '【正解】Modify 効果はリソース自体のプロパティやタグの追加・置換・削除を行うものであり、まさにタグ ガバナンス向けに設計された効果です。また Modify の割り当てはマネージド ID で修復タスク (Remediation task) をサポートしているため、過去に作成された既存のリソース グループも準拠状態へ修復できます。',
        explanationEn: 'Modify adds, replaces, or removes properties and tags on the resource itself, and it is the effect designed for tag governance. Modify assignments support remediation tasks, which is how previously created resource groups are brought into compliance.'
      },
      {
        id: 'D',
        textJa: 'Deny',
        textEn: 'Deny',
        isCorrect: false,
        explanationJa: '【不正解】Deny は条件が満たされない場合に作成要求自体を完全にブロックするため、作成を成功させなければならない要件に違反し、既存リソースの自動修正も行いません。',
        explanationEn: 'Deny blocks the request outright when the condition is not met, which contradicts the requirement that creation must succeed. It also performs no correction of existing resources.'
      }
    ],
    overallExplanationJa: `Azure Policy には複数の修正効果があり、評価対象リソース自身を変更するか、別の関連リソースをデプロイするかによって使い分けます：
- **Modify**: 評価対象リソース自体のプロパティやタグの追加・更新・削除を行い、マネージド ID を使った**修復タスク (Remediation task)** で既存リソースも一括修正できるため、タグ継承・タグ強制の標準効果です。
- **DeployIfNotExists**: 修復タスクには対応しますが、診断設定などの「別の関連リソース」をデプロイするための効果です。
- **Append**: 作成・更新時のみフィールドを追加でき、既存リソースへの修復タスクを実行できません。`,
    overallExplanationEn: `Azure Policy offers several corrective effects, and choosing between them depends on whether you are changing the resource itself or deploying something alongside it. Modify operates on the evaluated resource's own properties and tags, which makes it the standard effect for tag inheritance and tag enforcement scenarios. Because Modify assignments run under a managed identity, they can execute remediation tasks that apply the change to resources created before the assignment existed. DeployIfNotExists shares that remediation capability but targets a separate related resource rather than a property on the evaluated one. Append is limited to the request path at create or update time and offers no remediation, while Deny blocks creation entirely and therefore fails the stated requirement.`,
    keyPointsJa: [
      '新規作成時にタグを継承付与 ＋ 既存リソースも修復タスク (Remediation task) でタグ付け ＝ Modify 効果',
      'Append は作成/更新リクエスト時のみで、既存リソース向けの Remediation task をサポートしない',
      'DeployIfNotExists は別リソースの展開用であり、対象リソース自身のタグ編集には Modify を使う'
    ],
    keyPointsEn: [
      'Use the Modify policy effect to inherit/add tags on creation AND remediate existing non-compliant resources',
      'Modify supports managed identity-backed remediation tasks; Append does not',
      'DeployIfNotExists deploys separate child/related resources rather than modifying properties/tags on the evaluated resource'
    ],
    referenceTopic: 'Azure Policy の効果使い分け (Modify vs Append vs DeployIfNotExists)'
  },
  {
    id: 'sc500-q109',
    number: 109,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '特定ストレージ アカウントのみへの Defender for Storage リソース レベル有効化',
    titleEn: 'Enabling Defender for Storage at the Resource Level to Minimize Cost',
    scenarioJa: `Contoso Ltd. には 60 個のストレージ アカウントを含む単一の Azure サブスクリプションがあります。セキュリティ チームは、規制対象の顧客データを含む storesensitive01 という名前の 1 つのストレージ アカウントに対してのみ、マルウェア スキャンおよび機密データ脅威検出を含む Microsoft Defender for Storage を有効にしたいと考えています。

他の 59 個のストレージ アカウントではこのプランを有効にしたくなく、この要件を満たしつつコストを最小限に抑えたいと考えています。`,
    scenarioEn: `Contoso Ltd. has a single Azure subscription that contains 60 storage accounts. The security team wants to enable Microsoft Defender for Storage—including malware scanning and sensitive data threat detection—for only one storage account named storesensitive01, which contains regulated customer data. They do not want the plan enabled on any of the other 59 storage accounts, and they want to minimize cost while still meeting this requirement.`,
    questionJa: 'セキュリティ チームは Microsoft Defender for Cloud で何をすべきですか？',
    questionEn: 'What should the security team do in Microsoft Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: 'サブスクリプション レベルではプランを無効にしたまま、storesensitive01 ストレージ アカウントに対してリソース レベルで直接 Microsoft Defender for Storage プランを有効にする',
        textEn: 'Enable the Microsoft Defender for Storage plan directly on the storesensitive01 storage account at the resource level, while leaving the plan disabled at the subscription level.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Defender for Storage はサブスクリプション レベルの設定とは独立して、個々のリソース (ストレージ アカウント) レベルで有効化することをサポートしています。これにより、サブスクリプション内の他のストレージ アカウントでコストやスキャンを発生させることなく、対象アカウントのみにきめ細かく保護を適用できます。',
        explanationEn: 'Microsoft Defender for Storage supports being enabled at the individual resource (storage account) level independently of the subscription-level setting, allowing granular, per-account protection without incurring costs or enabling scanning on other storage accounts in the subscription.'
      },
      {
        id: 'B',
        textJa: 'storesensitive01 に関連付けられた仮想ネットワーク上で Microsoft Defender for Servers プランを有効にし、マルウェア スキャンを有効にするカスタム推奨事項を構成する',
        textEn: 'Enable the Microsoft Defender for Servers plan on the virtual network associated with storesensitive01, and configure a custom recommendation to enable malware scanning.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for Servers は仮想マシンとサーバーを保護するものであり、ストレージ アカウントを対象とするものではなく、ストレージ リソースのマルウェア スキャンを有効化する機能もありません。',
        explanationEn: 'Microsoft Defender for Servers protects virtual machines and servers, not storage accounts, and it has no capability to enable malware scanning or sensitive data threat detection for storage resources.'
      },
      {
        id: 'C',
        textJa: 'サブスクリプション レベルで Microsoft Defender for Storage プランを有効にし、スキャン料金を storesensitive01 のみに制限するコスト管理予算 (Budget) を構成する',
        textEn: 'Enable the Microsoft Defender for Storage plan at the subscription level, and then configure a cost management budget that limits scanning charges to storesensitive01 only.',
        isCorrect: false,
        explanationJa: '【不正解】コスト管理の予算は支出アラートを提供するのみで、実際にどのリソースがスキャンされるかを制御する機能はありません。サブスクリプション レベルで有効にすると 60 個すべてのストレージ アカウントに保護が適用され課金が発生してしまいます。',
        explanationEn: 'Cost management budgets only provide spending alerts and do not control which resources are actually scanned; enabling the plan at the subscription level would still apply protection (and generate charges) across all 60 storage accounts.'
      },
      {
        id: 'D',
        textJa: 'サブスクリプション レベルで Microsoft Defender for Storage プランを有効にし、保護すべきではない 59 個のストレージ アカウントに対して Azure Policy の例外を作成する',
        textEn: 'Enable the Microsoft Defender for Storage plan at the subscription level, and then create an Azure Policy exemption for the 59 storage accounts that should not be protected.',
        isCorrect: false,
        explanationJa: '【不正解】サブスクリプション レベルで有効にすると既定ですべてのストレージ アカウントに保護と課金が適用され、Azure Policy の例外は Defender for Cloud 内で Defender for Storage の適用範囲を個別リソースに絞る仕組みではありません。',
        explanationEn: 'Enabling the plan at the subscription level would apply protection (and cost) to all storage accounts by default, and Azure Policy exemptions are not the mechanism used within Defender for Cloud to scope Defender for Storage protection to specific resources.'
      }
    ],
    overallExplanationJa: `Microsoft Defender for Storage は、サブスクリプション レベルでの一括構成だけでなく、**個々のストレージ アカウント (リソース レベル) 単位での有効化**をサポートしています。

本シナリオのように 60 個のうち特定の 1 個 (` + '`storesensitive01`' + `) のみを保護してコストを最小化したい場合は、サブスクリプション側のプランは無効のままにし、対象ストレージ アカウントのリソース ブレード (Microsoft Defender for Cloud セクション) から直接プランを有効にします。`,
    overallExplanationEn: `Microsoft Defender for Storage can be configured at both the subscription level and the individual resource level, giving administrators flexibility to enable protection selectively. In this scenario, enabling the plan directly on storesensitive01 at the resource level satisfies the requirement to protect only that account while avoiding unnecessary cost and scanning on the other 59 storage accounts.`,
    keyPointsJa: [
      '特定 1 台のストレージ アカウントのみに Defender for Storage (マルウェア スキャン・機密データ脅威検出) を適用 ＝ サブスクリプションは無効のまま、対象リソース レベルで直接有効化',
      'コスト管理の Budget では保護や課金対象リソースの絞り込みはできない',
      'Defender for Storage はアカウント単位のきめ細かなオン/オフをサポートしている'
    ],
    keyPointsEn: [
      'Enable Microsoft Defender for Storage directly at the individual storage account resource level',
      'Keep the subscription-level plan disabled so the remaining 59 accounts incur no scanning or cost',
      'Cost Management budgets alert on spend but do not disable workload protection on resources'
    ],
    referenceTopic: 'Defender for Storage のリソース レベル有効化'
  },
  {
    id: 'sc500-q110',
    number: 110,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender CSPM のエージェントレス スキャンによる VM ディスク上の平文シークレット検出',
    titleEn: 'Detecting Plaintext Secrets on VM Disks via Defender CSPM Agentless Scanning',
    scenarioJa: `あなたの組織では、Azure サブスクリプションで Defender Cloud Security Posture Management (Defender CSPM) を有効にしています。セキュリティ エンジニアは、検出結果をレビューしてシークレットを Azure Key Vault へ移行できるように、Azure 仮想マシン ディスク上に保存されている平文シークレット (API キーや接続文字列など) を Defender CSPM に特定させたいと考えています。`,
    scenarioEn: `Your organization has enabled Defender Cloud Security Posture Management (Defender CSPM) on its Azure subscription. A security engineer wants Defender CSPM to identify plaintext secrets (such as API keys and connection strings) stored on Azure virtual machine disks so that findings can be reviewed and the secrets migrated to Azure Key Vault.`,
    questionJa: 'この機能を有効にするために、セキュリティ エンジニアは何をすべきですか？',
    questionEn: 'What should the security engineer do to enable this capability?',
    options: [
      {
        id: 'A',
        textJa: 'すべての対象仮想マシンに Azure Monitor Log Analytics エージェントをデプロイし、シークレット アクセスや資格情報スキャン結果を収集する Key Vault 診断ログ用のデータ収集ルールを有効にする',
        textEn: 'Install the Azure Monitor Log Analytics agent on every virtual machine in the subscription and enable the Key Vault diagnostic logs data collection rule for scanning.',
        isCorrect: false,
        explanationJa: '【不正解】Log Analytics エージェントは別の監視シナリオ向けであり、Defender CSPM のエージェントレス シークレット スキャンには使用されません。また Key Vault 診断ログはアクセス イベントのみを記録し、VM ディスク上の平文シークレットはスキャンしません。',
        explanationEn: 'The Log Analytics agent is used for other monitoring and data collection scenarios, but it is not the mechanism Defender CSPM uses for agentless secrets scanning, and Key Vault diagnostic logs only capture access events, not plaintext secrets on disk.'
      },
      {
        id: 'B',
        textJa: '"Confidential – Secrets" という名前の Microsoft Purview 秘密度ラベルと自動ラベル付けポリシーを作成し、すべての仮想マシンのディスク上に保存されているファイルに適用する',
        textEn: 'Create a Microsoft Purview sensitivity label and auto-labeling policy for "Confidential – Secrets" and apply it to files stored on the Azure virtual machine disks.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Purview 秘密度ラベルはデータ分類ポリシーに基づいてドキュメントやメールを分類・保護するものであり、仮想マシン上でハードコードされた API キーや接続文字列などのシークレットをスキャンして検出するものではありません。',
        explanationEn: 'Microsoft Purview sensitivity labels classify and protect documents and emails based on data classification policies; they do not scan for or detect hardcoded secrets like API keys or connection strings on virtual machines.'
      },
      {
        id: 'C',
        textJa: 'サブスクリプションで Microsoft Defender for Key Vault プランを有効にし、平文シークレットや異常アクセスを監視する各キー コンテナーの診断およびアクセス ポリシーを構成する',
        textEn: 'Enable the Microsoft Defender for Key Vault plan on the subscription and configure individual access policies and alerts for each Azure key vault in the environment.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for Key Vault は既存の Key Vault への異常なアクセスや悪意のあるアクセス試行から保護するものであり、Defender CSPM のエージェントレス シークレット スキャンのように VM ディスク上の露出した平文シークレットをスキャンする機能ではありません。',
        explanationEn: 'Microsoft Defender for Key Vault protects against anomalous or malicious access attempts to existing key vaults; it does not scan virtual machine disks for exposed plaintext secrets, which is the function of Defender CSPM\'s agentless secret scanning.'
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Cloud の [環境設定] で Defender CSPM プランの設定を開き、マシンのシークレット スキャンを含む「マシンのエージェントレス スキャン」(Agentless scanning for machines) をオンにする',
        textEn: 'In Microsoft Defender for Cloud, under Environment settings, open the Defender CSPM plan settings and turn on Agentless scanning for machines, which includes machine secrets scanning',
        isCorrect: true,
        explanationJa: '【正解】マシンのシークレット スキャンはエージェントレス マシン スキャン機能の 1 つであり、Defender CSPM (または Defender for Servers Plan 2) でエージェントレス スキャンをオンにすることで利用可能になります。エージェントレス スキャンは全体として有効/無効を切り替え、個々のサブ機能だけを別個に切り替えることはできません。',
        explanationEn: 'Machine secrets scanning is one of the agentless machine scanning capabilities and becomes available once agentless scanning is turned on in Defender CSPM or Defender for Servers Plan 2. Agentless scanning is enabled or disabled as a whole; its individual capabilities cannot be toggled separately.'
      }
    ],
    overallExplanationJa: `エージェントレス マシン シークレット スキャンは、エージェントを一切インストールせず VM パフォーマンスにも影響を与えずに、VM ディスクのスナップショットを帯域外 (Out-of-band) で解析して API キー・接続文字列・SSH 秘密鍵などの平文シークレットを検出します。

この機能は **[環境設定] の Defender CSPM (または Defender for Servers Plan 2) プラン設定内にある「マシンのエージェントレス スキャン」(Agentless scanning for machines)** をオンにすることで自動的に有効になり、検出されたシークレットは Defender for Cloud の推奨事項および攻撃パス分析に統合されます。`,
    overallExplanationEn: `Agentless machine secrets scanning takes snapshots of VM disks and analyses them out of band to locate plaintext secrets such as API keys, connection strings and SSH private keys, with no agent installed and no impact on VM performance. It is one of the capabilities of agentless machine scanning, which is enabled from the Defender CSPM or Defender for Servers Plan 2 plan settings under Environment settings; the individual capabilities cannot be turned on or off separately. Findings appear as Defender for Cloud recommendations and feed attack path analysis, which is what lets the team prioritise moving those secrets into Azure Key Vault. The retired Log Analytics agent, the Defender for Key Vault plan and Purview sensitivity labels address entirely different problems and none of them inspect VM disks for plaintext secrets.`,
    keyPointsJa: [
      'VM ディスク上の平文シークレット (API キー・接続文字列等) をエージェント不要で検出 ＝ Defender CSPM 環境設定で「Agentless scanning for machines」をオンにする',
      'ディスク スナップショットを帯域外解析するため VM 負荷やエージェント保守が不要',
      'Defender for Key Vault は既存 Key Vault への不審アクセス検知用であり VM ディスクは検査しない'
    ],
    keyPointsEn: [
      'Turn on "Agentless scanning for machines" in Defender CSPM plan settings to enable machine secrets scanning',
      'Analyzes out-of-band VM disk snapshots for plaintext API keys, connection strings, and SSH private keys',
      'Findings feed Defender for Cloud recommendations and attack path analysis'
    ],
    referenceTopic: 'Defender CSPM のエージェントレス マシン シークレット スキャン'
  },
  {
    id: 'sc500-q111',
    number: 111,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Key Vault RBAC モデルでメタデータのみ棚卸しする Key Vault Reader ロール',
    titleEn: 'Inventorying Key Vault Expiry Metadata Without Secret Access (Key Vault Reader)',
    scenarioJa: `Contoso 社は、テナント内のすべてのキー コンテナーをインベントリ化し、各コンテナーに含まれるシークレット、キー、および証明書の名前、有効期限、および有効化状態を一覧表示するコンプライアンス レポート ツールを実行しています。このレポートは、有効期限が近づいているオブジェクトを特定するために使用されます。

このツールはマネージド ID で認証します。セキュリティ ポリシーでは、ツールがシークレットやキーの「値」を取得できては決してならないと定められており、コンテナーは Azure ロールベース アクセス制御 (RBAC) アクセス許可モデルを使用しています。`,
    scenarioEn: `Contoso runs a compliance reporting tool that must inventory every key vault in the tenant, listing the names, expiry dates, and enabled state of the secrets, keys, and certificates each vault contains. The report is used to identify objects that are about to expire.

The tool authenticates with a managed identity. Security policy states that the tool must never be able to retrieve the value of a secret or key, and the vaults use the Azure role-based access control permission model.`,
    questionJa: 'マネージド ID にどの組み込みロールを割り当てるべきですか？',
    questionEn: 'Which built-in role should you assign to the managed identity?',
    options: [
      {
        id: 'A',
        textJa: 'Key Vault 閲覧者 (Key Vault Reader)',
        textEn: 'Key Vault Reader',
        isCorrect: true,
        explanationJa: '【正解】Key Vault Reader は、名前、有効期限、有効化状態など、コンテナーおよびその中に含まれるシークレット・キー・証明書のプロパティとメタデータの読み取りを許可します。ポリシーの要件どおり、シークレットやキーの「値」自体へのアクセスは明確に除外されています。',
        explanationEn: 'Key Vault Reader allows reading the properties and metadata of the vault and of the secrets, keys, and certificates within it, including names, expiry dates, and enabled state. It deliberately excludes access to secret and key values, which is what the policy requires.'
      },
      {
        id: 'B',
        textJa: 'Key Vault シークレット ユーザー (Key Vault Secrets User)',
        textEn: 'Key Vault Secrets User',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault Secrets User はシークレットの「値」の読み取りアクセス権を付与する専用ロールです。これを割り当てるとポリシーで禁止されている権限を与えてしまい、さらにキーや証明書の一覧取得もカバーしません。',
        explanationEn: 'Key Vault Secrets User is specifically the role that grants read access to secret values. Assigning it would give the reporting tool exactly the capability the policy prohibits.'
      },
      {
        id: 'C',
        textJa: 'Key Vault 証明書責任者 (Key Vault Certificates Officer)',
        textEn: 'Key Vault Certificates Officer',
        isCorrect: false,
        explanationJa: '【不正解】Certificates Officer は証明書オブジェクトの作成や削除を含む完全な管理権限を付与し、対象も証明書に限定されます。読み取り専用レポート ツールには過剰すぎ、かつシークレットとキーのインベントリにも対応できません。',
        explanationEn: 'Certificates Officer grants full management of certificate objects, including creating and deleting them, and it is limited to certificates. It is both too broad for a reporting tool and too narrow for an inventory that spans secrets and keys.'
      },
      {
        id: 'D',
        textJa: '閲覧者 (Reader)',
        textEn: 'Reader',
        isCorrect: false,
        explanationJa: '【不正解】汎用の Reader ロールはコンテナー リソース自体の管理プレーン プロパティのみを対象としており、RBAC アクセス許可モデルの下でコンテナー内部に格納されたデータ プレーン オブジェクト (シークレット・キー・証明書) のメタデータを列挙する権限には拡張されません。',
        explanationEn: 'The generic Reader role covers management-plane properties of the vault resource itself. It does not extend to enumerating the objects stored inside the vault under the RBAC permission model.'
      }
    ],
    overallExplanationJa: `Azure Key Vault の RBAC ロールは「オブジェクトのメタデータ読み取り」と「実際の値 (シークレット値・秘密鍵) の読み取り」を明確に区別しています：
- **Key Vault Reader**: シークレット、キー、証明書すべての名前・有効期限・有効/無効ステータスなどの**メタデータ一覧・プロパティ読み取り**を許可し、**値の取得は一切許可しません**。
- **Key Vault Secrets User**: シークレットの実際の値を読み取れます。
- **汎用 Reader**: コントロール プレーンのみでデータ プレーンのオブジェクト一覧を照会できません。

したがって、有効期限棚卸しツールには **Key Vault Reader** が最小権限の正解です。`,
    overallExplanationEn: `Key Vault's RBAC roles distinguish between reading an object's metadata and reading its value, which is what makes an inventory scenario like this one solvable without granting secret access. Key Vault Reader covers listing and reading properties across secrets, keys, and certificates, so expiry dates and enabled state are available to the reporting tool. Because the role stops short of the get-value operations, a compromise of the tool's identity would not expose credential material. The generic Azure Reader role operates only on the management plane and does not enumerate vault contents when RBAC is the permission model. Roles such as Secrets User or Certificates Officer either grant value access or grant management rights that a read-only report has no need for.`,
    keyPointsJa: [
      'シークレット/キーの値は読み取らずに、全オブジェクトの名前・有効期限・有効状態だけ列挙 ＝ Key Vault Reader',
      '汎用 Reader ロールはデータ プレーンの Key Vault アイテム一覧を列挙できない',
      'Key Vault Secrets User はシークレット値そのものを読めてしまうためポリシー違反'
    ],
    keyPointsEn: [
      'Assign Key Vault Reader to list secrets, keys, and certificates metadata (names, expiry dates, enabled state) without reading values',
      'Generic Azure Reader operates only on the management plane and cannot list vault contents under RBAC',
      'Key Vault Secrets User exposes secret payload values, violating least privilege'
    ],
    referenceTopic: 'Azure Key Vault RBAC の Key Vault Reader ロール'
  },
  {
    id: 'sc500-q112',
    number: 112,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Key Vault の完全閉域化 (プライベート エンドポイント・パブリック無効化・Private DNS)',
    titleEn: 'Securing Key Vault Data Plane Exclusively via Private Endpoint and Private DNS',
    scenarioJa: `Contoso 社は、キー コンテナー ContosoOpsKV 内のシークレットをハブ仮想ネットワーク内部のリソースからのみ取得できるようにする必要があります。セキュリティ標準では、Contoso 社自身の企業 IP 範囲を含め、いかなるパブリック IP アドレスからもコンテナーのデータ プレーンに到達できてはならず、かつアプリケーションは設定内で標準のコンテナー URL (` + '`https://contosoopskv.vault.azure.net`' + `) を引き続き使用しなければならないと定められています。`,
    scenarioEn: `Contoso must ensure that secrets in the key vault ContosoOpsKV are retrievable only from resources inside the hub virtual network. The security standard states that the vault's data plane must not be reachable from any public IP address, including addresses on Contoso's own corporate ranges, and that applications must continue to use the standard vault URL in their configuration.`,
    questionJa: '何を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'ハブ サブネット上に Microsoft.KeyVault 用の仮想ネットワーク サービス エンドポイントを追加し、コンテナー ファイアウォールでハブ サブネットのみを許可して他のすべてを既定で拒否に設定する',
        textEn: 'Add a virtual network service endpoint for Microsoft.KeyVault on the hub subnet, allow only that subnet, and set the vault firewall to deny all other traffic.',
        isCorrect: false,
        explanationJa: '【不正解】サービス エンドポイントは Azure バックボーン上にトラフィックを維持して選択サブネットにアクセスを制限しますが、コンテナーは引き続きパブリック エンドポイントとパブリック IP アドレスを保持するため、データ プレーンをパブリックに到達不能にする要件を満たしません。',
        explanationEn: 'A service endpoint keeps traffic on the Azure backbone and restricts access to the selected subnet, but the vault retains a public endpoint and public IP address. Some standards accept this design, but it does not satisfy the requirement that the data plane not be publicly reachable.'
      },
      {
        id: 'B',
        textJa: 'ハブ仮想ネットワーク内に ContosoOpsKV 用のプライベート エンドポイントを作成し、パブリック ネットワーク アクセスを無効 (Disable) にして、privatelink.vaultcore.azure.net プライベート DNS ゾーンをリンクする',
        textEn: 'Create a private endpoint for ContosoOpsKV in the hub virtual network, disable public network access, and link the privatelink.vaultcore.azure.net private DNS zone.',
        isCorrect: true,
        explanationJa: '【正解】プライベート エンドポイントはハブ仮想ネットワーク内にコンテナーのプライベート IP アドレスを提供し、パブリック ネットワーク アクセスを無効にすることでインターネット向けのパブリック データ プレーンを完全に削除します。さらに privatelink.vaultcore.azure.net ゾーンをリンクすることで標準のコンテナー URL がそのプライベート アドレスに名前解決されるため、アプリケーション構成を変更せずに済みます。',
        explanationEn: 'The private endpoint gives the vault a private IP address inside the hub virtual network, and disabling public network access removes the internet-facing data plane entirely. Linking the privatelink.vaultcore.azure.net zone lets the standard vault URL resolve to that private address, so application configuration does not change.'
      },
      {
        id: 'C',
        textJa: 'パブリック ネットワーク アクセスを特定のネットワークに制限した上で、Contoso の企業パブリック IP 範囲のみを許可リストに追加するようにコンテナー ファイアウォール規則を設定する',
        textEn: 'Set the vault firewall to restrict access from selected networks and add only Contoso\'s corporate public IP address ranges to the vault firewall allow list.',
        isCorrect: false,
        explanationJa: '【不正解】IP 許可リストはコンテナーのデータ プレーンをパブリック エンドポイント上で公開したまま送信元をフィルタリングするに過ぎず、企業 IP 範囲を含めいかなるパブリック IP からも到達不可にする要件に反します。',
        explanationEn: 'An IP allow list still exposes the vault\'s data plane on a public endpoint and simply filters the sources permitted to reach it. The standard requires that no public address be able to reach the vault at all.'
      },
      {
        id: 'D',
        textJa: 'コンテナーのネットワーク アクセスを制限した上で、「信頼された Microsoft サービスがこのファイアウォールをバイパスすることを許可する」オプションを有効化してハブ リソースからのみ接続を許可する',
        textEn: 'Restrict vault network access to selected networks and enable the "Allow trusted Microsoft services to bypass this firewall" option to secure vault connections.',
        isCorrect: false,
        explanationJa: '【不正解】信頼されたサービスのバイパスはファイアウォール規則にもかかわらず特定の Azure プラットフォーム サービスがコンテナーに到達することを許可する設定であり、パブリック到達可能性の排除やハブ VNet 限定要件を満たしません。',
        explanationEn: 'The trusted services bypass permits specific Azure platform services to reach the vault despite firewall rules. It widens access rather than removing public reachability and does nothing for the hub virtual network requirement.'
      }
    ],
    overallExplanationJa: `Key Vault には「ファイアウォール許可リスト」「サービス エンドポイント」「プライベート エンドポイント」の 3 つのネットワーク モデルがありますが、パブリック データ プレーン自体を完全消滅させることができるのは**プライベート エンドポイント**のみです：
1. ハブ VNet に **Private Endpoint** を作成し、VNet 内のプライベート IP を割り当てる。
2. **Public network access を無効 (Disabled)** にし、パブリック エンドポイントを閉鎖する。
3. **` + '`privatelink.vaultcore.azure.net`' + ` プライベート DNS ゾーン**をハブ VNet にリンクし、アプリが標準の ` + '`*.vault.azure.net`' + ` URL をそのまま使ってもプライベート IP へ解決されるようにする。`,
    overallExplanationEn: `Key Vault offers three network models: open with firewall rules, service endpoints, and private endpoints. Only the private endpoint model removes the public data plane, because the vault is projected into the virtual network as a network interface with a private IP address. Disabling public network access is a distinct setting and must be applied alongside the private endpoint, otherwise the public endpoint remains live in parallel. Linking the privatelink.vaultcore.azure.net private DNS zone to the virtual network is what allows the existing vault URL to resolve to the private address, which keeps application configuration unchanged. Service endpoints and IP allow lists are lighter-weight designs but both leave a public endpoint in place, so they fail the stated standard.`,
    keyPointsJa: [
      'Key Vault のパブリック データ プレーン完全削除 ＋ 標準 URL 維持 ＝ Private Endpoint ＋ Public network access 無効化 ＋ privatelink.vaultcore.azure.net リンク',
      'サービス エンドポイントや IP 許可リストはパブリック エンドポイントとパブリック IP が残存するため不適合',
      'Key Vault 用 Private Link DNS ゾーン名は privatelink.vaultcore.azure.net'
    ],
    keyPointsEn: [
      'Create a Private Endpoint in the hub VNet, disable public network access, and link privatelink.vaultcore.azure.net',
      'Completely eliminates public IP reachability while keeping standard *.vault.azure.net URLs working via DNS resolution',
      'Service endpoints and IP firewall allowlists still leave a public endpoint in place'
    ],
    referenceTopic: 'Azure Key Vault プライベート エンドポイントと Private DNS'
  },
  {
    id: 'sc500-q113',
    number: 113,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Cloud Security Explorer を用いたクラウド セキュリティ グラフのアドホック対話型クエリ',
    titleEn: 'Querying the Cloud Security Graph Ad Hoc with Cloud Security Explorer',
    scenarioJa: `Contoso 社のクラウド セキュリティ アナリストは、リスク委員会から提起された次のようなアドホックな質問に回答する必要があります：「インターネットに公開されている仮想マシンのうち、機密として分類されたデータを含むストレージ アカウントに対する書き込み権限を持つマネージド ID が割り当てられているのはどれか？」

Contoso 社では Defender Cloud Security Posture Management (Defender CSPM) が有効になっています。アナリストは、優先順位付けされた固定のリスク一覧から探すのではなく、クラウド セキュリティ グラフに対して対話的にクエリを構築および調整することでこの質問に回答したいと考えています。`,
    scenarioEn: `A cloud security analyst at Contoso must answer an ad hoc question raised by the risk committee: which internet-exposed virtual machines have a managed identity that holds write permissions on a storage account containing data classified as sensitive?

Contoso has Defender Cloud Security Posture Management enabled. The analyst wants to answer this question by building and refining a query interactively against the cloud security graph, rather than working through a fixed list of prioritized risks.`,
    questionJa: 'アナリストはどの Defender for Cloud 機能を使用すべきですか？',
    questionEn: 'Which Defender for Cloud capability should the analyst use?',
    options: [
      {
        id: 'A',
        textJa: '攻撃パス分析 (Attack path analysis)',
        textEn: 'Attack path analysis',
        isCorrect: false,
        explanationJa: '【不正解】攻撃パス分析は、Defender for Cloud が悪用可能と判断して事前に計算・優先順位付けしたキュレーション済みパスの一覧を提示するものです。アナリスト自身が任意の新しいアドホックな質問を組み立てて検索するための対話型ビルダーではありません。',
        explanationEn: 'Attack path analysis presents a curated set of prioritized, pre-computed paths that Defender for Cloud has identified as exploitable. It answers what the platform considers risky rather than letting the analyst pose an arbitrary question of their own.'
      },
      {
        id: 'B',
        textJa: 'セキュア スコア (Secure score)',
        textEn: 'Secure score',
        isCorrect: false,
        explanationJa: '【不正解】セキュア スコアはセキュリティ推奨事項の健全性を単一の態勢指標に集約するものであり、コンピュート、ID、およびデータ リソース間のグラフ関係を表現・クエリすることはできません。',
        explanationEn: 'Secure score aggregates recommendation health into a single measure of posture over time. It cannot express relationships between compute, identity, and data resources.'
      },
      {
        id: 'C',
        textJa: 'クラウド セキュリティ エクスプローラー (Cloud security explorer)',
        textEn: 'Cloud security explorer',
        isCorrect: true,
        explanationJa: '【正解】クラウド セキュリティ エクスプローラーを使用すると、リソースの種類、ネットワーク露出、ID、アクセス権限、およびデータ機密度の条件を組み合わせて、クラウド セキュリティ グラフに対するクエリを直接構築できます。この対話型クエリ モデルにより、シナリオのようなアドホックな質問に回答し、条件を柔軟に調整できます。',
        explanationEn: 'Cloud security explorer lets you build queries directly against the cloud security graph, combining resource type, exposure, identity, permission, and data sensitivity conditions. That interactive query model is what makes ad hoc questions like this one answerable and refinable.'
      },
      {
        id: 'D',
        textJa: '規制コンプライアンス ダッシュボード (Regulatory compliance dashboard)',
        textEn: 'Regulatory compliance dashboard',
        isCorrect: false,
        explanationJa: '【不正解】コンプライアンス ダッシュボードは PCI DSS や ISO 27001 などのコントロール フレームワークに対してリソースの合否状態をスコア化するものであり、リソース間の関係性クエリはサポートしていません。',
        explanationEn: 'The compliance dashboard scores resources against control frameworks such as PCI DSS or ISO 27001. It reports control pass and fail states and does not support relationship queries across resources.'
      }
    ],
    overallExplanationJa: `Defender CSPM は、リソース、ネットワーク露出、ID、権限、脆弱性、およびデータ機密度を結び付ける**クラウド セキュリティ グラフ (Cloud security graph)** を構築し、2 つの異なる機能で活用します：
- **攻撃パス分析 (Attack path analysis)**: プラットフォームが悪用可能と判断し、事前に計算・優先順位付けしたチェーンを提示します（修正作業の駆動に最適）。
- **クラウド セキュリティ エクスプローラー (Cloud security explorer)**: 同じグラフを対話型クエリ ビルダーとして公開し、アナリストが独自のアドホック条件を自由に組み合わせて検索・調整・保存できるようにします。

したがって、自由な条件で独自調査を行う本シナリオでは **Cloud security explorer** が正解となります。`,
    overallExplanationEn: `Defender Cloud Security Posture Management builds a cloud security graph that connects resources, network exposure, identities, permissions, vulnerabilities, and data sensitivity. Two features consume that graph in different ways. Attack path analysis surfaces pre-computed, prioritized chains that Defender for Cloud judges to be exploitable, which is ideal for driving remediation work. Cloud security explorer exposes the same graph as an interactive query builder, so an analyst can express a specific question, inspect the results, and refine the conditions. Because the risk committee asked a bespoke question that no pre-computed path is guaranteed to cover, the explorer is the right tool, and any query built there can be saved and reused later.`,
    keyPointsJa: [
      'クラウド セキュリティ グラフに対し、露出・ID・権限・機密データ等の条件を組み合わせてアドホックに対話型検索 ＝ Cloud security explorer',
      'Attack path analysis は Defender 側が事前計算・優先順位付けした既定の悪用チェーンを表示する機能',
      '作成したクエリは保存してチーム内で再利用することも可能'
    ],
    keyPointsEn: [
      'Use Cloud security explorer to build and refine custom interactive queries against the Defender CSPM cloud security graph',
      'Combines compute exposure, managed identities, RBAC permissions, and data sensitivity in ad hoc queries',
      'Attack path analysis surfaces pre-computed risk chains rather than arbitrary custom graph queries'
    ],
    referenceTopic: 'Defender CSPM のクラウド セキュリティ エクスプローラー'
  }
];
