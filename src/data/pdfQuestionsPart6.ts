import {
  PdfQuestionSeed,
  CONTOSO_CASE_STUDY_JA,
  CONTOSO_CASE_STUDY_EN,
  FABRIKAM_CASE_STUDY_JA,
  FABRIKAM_CASE_STUDY_EN,
} from './pdfCaseStudies';

export const PDF_QUESTIONS_PART6: PdfQuestionSeed[] = [
  {
    id: 'pdf-q101',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Security Copilot カスタムプラグインのワークスペーススコープ制限',
    titleEn: 'Restricting Workspace-Scoped Custom Plugins in Security Copilot',
    scenarioJa: `あなたは Microsoft Security Copilot を使用しています。
ユーザーには、Security Copilot 共同作成者 (Security Copilot Contributor) ロールまたは Security Copilot 所有者 (Security Copilot Owner) ロールのいずれかが割り当てられています。
共同作成者が承認されていないカスタム プラグインを有効にしたところ、埋め込みエクスペリエンスにおける Security Copilot の一部の機能が動作しなくなりました。
すべてのユーザーに影響するプラグインは、所有者のみが追加できるようにする必要があります。`,
    scenarioEn: `You use Microsoft Security Copilot. Users are assigned either the Security Copilot Contributor role or the Security Copilot Owner role.
After a contributor enabled an unapproved custom plugin, some Security Copilot features in the embedded experience stopped working.
You need to ensure that plugins affecting all users can only be added by owners.`,
    questionJa: 'プラグイン設定 (Plugin settings) で何を行うべきか、1つ選んでください。',
    questionEn: 'What should you configure in Plugin settings?',
    options: [
      {
        id: 'A',
        textJa: 'ユーザー スコープでカスタム プラグインを追加できるユーザーを構成するために、共同作成者と所有者 (Contributors and Owners) を選択する。',
        textEn: 'Select Contributors and Owners for who can add custom plugins in the User scope.',
        isCorrect: false,
        explanationJa: '【不正解】ユーザー スコープの設定は各ユーザーの個人セッション用プラグインの追加権限を制御するものであり、ワークスペース全体の共有プラグインには影響しません。',
        explanationEn: 'User scope settings control personal session plugins, not plugins shared across all users in the workspace.',
      },
      {
        id: 'B',
        textJa: 'ワークスペース スコープでカスタム プラグインを追加できるユーザーを構成するために、共同作成者と所有者 (Contributors and Owners) を選択する。',
        textEn: 'Select Contributors and Owners for who can add custom plugins in the Workspace scope.',
        isCorrect: false,
        explanationJa: '【不正解】ワークスペース スコープで共同作成者を許可したままにすると、承認されていない共有プラグインを追加できる状態が継続してしまいます。',
        explanationEn: 'Allowing Contributors in the Workspace scope continues to let contributors add unapproved shared plugins.',
      },
      {
        id: 'C',
        textJa: 'ワークスペース スコープでカスタム プラグインを追加できるユーザーを構成するために、所有者のみ (Owners only) を選択する。',
        textEn: 'Select Owners only for who can add custom plugins in the Workspace scope.',
        isCorrect: true,
        explanationJa: '【正解】ワークスペース スコープ（全ユーザーに影響する共有プラグイン）の追加権限を Owners only に限定することで、共同作成者による個人用プラグイン作成は維持しつつ、全ユーザーに影響するプラグイン追加を所有者のみに制限できます。',
        explanationEn: 'Setting Workspace scope custom plugin permissions to Owners only prevents contributors from adding plugins that affect all users while preserving their ability to manage personal plugins.',
      },
      {
        id: 'D',
        textJa: 'ユーザー スコープでカスタム プラグインを追加できるユーザーを構成するために、所有者のみ (Owners only) を選択する。',
        textEn: 'Select Owners only for who can add custom plugins in the User scope.',
        isCorrect: false,
        explanationJa: '【不正解】ユーザー スコープを所有者のみにすると共同作成者の個人用プラグイン追加のみが制限され、全ユーザーに影響するワークスペース スコープの追加権限は制限されません。',
        explanationEn: 'Restricting the User scope only affects personal plugins and does not prevent contributors from adding workspace-wide plugins.',
      },
    ],
    overallExplanationJa: `Security Copilot のカスタム プラグイン設定には、個人セッション用の「ユーザー スコープ」と全利用者に共有される「ワークスペース スコープ」があります。全ユーザーに影響する共有プラグインの管理を制限するには、ワークスペース スコープで「Owners only」を選択します。`,
    overallExplanationEn: `Security Copilot separates custom plugin governance into User scope (personal) and Workspace scope (shared). To restrict plugins affecting everyone to owners, configure Workspace scope to Owners only.`,
    keyPointsJa: [
      '全ユーザーに影響する共有プラグインはワークスペース スコープで制御する',
      'Owners only に設定することで共同作成者の承認外プラグイン追加を防止できる',
    ],
    keyPointsEn: [
      'Workspace scope governs plugins shared across all users',
      'Owners only prevents Contributors from adding workspace-wide plugins',
    ],
    referenceTopic: 'Microsoft Security Copilot のカスタムプラグイン設定',
  },
  {
    id: 'pdf-q102',
    domain: 'Purview & コンプライアンス監査',
    difficulty: '標準 (Medium)',
    titleJa: 'SAM データアクセスガバナンスレポートによる SharePoint 過剰共有の特定',
    titleEn: 'Identifying Overshared SharePoint Content with SAM Data Access Governance Reports',
    scenarioJa: `Microsoft 365 Copilot を展開する予定です。
Copilot が、Microsoft SharePoint Online のライブラリ内の機密情報にアクセスできることが分かりました。
すべての内部ユーザー間で共有されている SharePoint Online のコンテンツを自動的に特定する必要があります。`,
    scenarioEn: `You plan to deploy Microsoft 365 Copilot. You discover that Copilot can access sensitive information in Microsoft SharePoint Online libraries.
You need to automatically identify SharePoint Online content that is shared with all internal users.`,
    questionJa: '何を作成する必要がありますか。',
    questionEn: 'What should you create?',
    options: [
      {
        id: 'A',
        textJa: 'SharePoint Online 向けの監査モードの Microsoft Purview データ損失防止 (DLP) ポリシー',
        textEn: 'A Microsoft Purview Data Loss Prevention (DLP) policy in audit mode for SharePoint Online',
        isCorrect: false,
        explanationJa: '【不正解】DLP ポリシーは機密情報を含むファイルの操作や共有を検出・制限するためのものであり、内部ユーザー全体へのアクセス許可を持つサイトやコンテンツを棚卸しする機能ではありません。',
        explanationEn: 'DLP policies detect and restrict actions on sensitive info types rather than inventorying sites shared with all internal users.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Purview Data Security Posture Management (DSPM) の自動修復アクション',
        textEn: 'A Microsoft Purview Data Security Posture Management (DSPM) remediation action',
        isCorrect: false,
        explanationJa: '【不正解】修復アクションは特定されたリスクの是正に使用するものであり、まず全内部ユーザーに共有されているコンテンツを自動特定するには適していません。',
        explanationEn: 'Remediation actions fix identified risks rather than running an automated discovery report of broadly shared sites.',
      },
      {
        id: 'C',
        textJa: 'SharePoint Online 接続時に多要素認証 (MFA) を要求する条件付きアクセス (CA) ポリシー',
        textEn: 'A Conditional Access policy requiring MFA for SharePoint Online',
        isCorrect: false,
        explanationJa: '【不正解】条件付きアクセスはサインイン時の認証要件を強化するものであり、過剰共有されている SharePoint コンテンツを特定する機能はありません。',
        explanationEn: 'Conditional Access enforces sign-in requirements and does not report on SharePoint sharing permissions.',
      },
      {
        id: 'D',
        textJa: 'SharePoint Advanced Management (SAM) のデータ アクセス ガバナンス レポート (Data access governance report)',
        textEn: 'A SharePoint Advanced Management (SAM) Data access governance report',
        isCorrect: true,
        explanationJa: '【正解】SAM のデータ アクセス ガバナンス レポートを作成することで、「すべてのユーザー（外部ユーザーを除く）」などに共有され過剰共有状態にある SharePoint サイトやコンテンツを自動的に特定できます。',
        explanationEn: 'SAM Data access governance reports automatically identify SharePoint sites and content broadly shared with Everyone except external users (EEEU) or all internal users.',
      },
    ],
    overallExplanationJa: `Microsoft 365 Copilot 導入前の過剰共有対策では、SharePoint Advanced Management (SAM) のデータ アクセス ガバナンス レポートを使用し、「すべてのユーザー（外部ユーザーを除く）」等へ共有されているコンテンツを可視化します。`,
    overallExplanationEn: `Before Copilot rollout, SharePoint Advanced Management (SAM) Data access governance reports automatically discover sites broadly shared across all internal users.`,
    keyPointsJa: [
      'SAM データ アクセス ガバナンス レポートで過剰共有サイト（EEEU など）を自動検出できる',
      'Copilot は既存アクセス権の範囲で情報を参照するため事前棚卸しが不可欠',
    ],
    keyPointsEn: [
      'SAM Data access governance reports pinpoint sites shared with all internal users',
      'Essential prerequisite before Microsoft 365 Copilot deployment',
    ],
    referenceTopic: 'SharePoint Advanced Management (SAM) データ アクセス ガバナンス',
  },
  {
    id: 'pdf-q103',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'グローバル VNet ピアリング環境における Azure Bastion の保護対象 VM',
    titleEn: 'Virtual Machines Reachable via Azure Bastion Across Peered Virtual Networks',
    scenarioJa: `次の表に示す仮想マシンを含む Azure サブスクリプションがあります。

| Name | Location | Virtual network |
| :--- | :--- | :--- |
| VM1 | East US | VNET1 |
| VM2 | West US | VNET2 |
| VM3 | East US | VNET1 |
| VM4 | West US | VNET3 |

すべての仮想ネットワークはピアリングされています。
VNET2 に Azure Bastion をデプロイします。`,
    scenarioEn: `You have an Azure subscription that contains the virtual machines shown in the following table:

| Name | Location | Virtual network |
| :--- | :--- | :--- |
| VM1 | East US | VNET1 |
| VM2 | West US | VNET2 |
| VM3 | East US | VNET1 |
| VM4 | West US | VNET3 |

All virtual networks are peered. You deploy Azure Bastion to VNET2.`,
    questionJa: 'Bastion ホストで保護できる仮想マシンの組み合わせを1つ選んでください。',
    questionEn: 'Which virtual machines can be protected by the Bastion host?',
    options: [
      {
        id: 'A',
        textJa: 'VM2 のみ',
        textEn: 'VM2 only',
        isCorrect: false,
        explanationJa: '【不正解】Azure Bastion は同一 VNet 内だけでなく、VNet ピアリングで接続された他の仮想ネットワーク内の VM にも接続できます。',
        explanationEn: 'Azure Bastion supports connecting to VMs in peered virtual networks, not only the local VNet.',
      },
      {
        id: 'B',
        textJa: 'VM2 と VM4 のみ',
        textEn: 'VM2 and VM4 only',
        isCorrect: false,
        explanationJa: '【不正解】リージョンが同じ West US である必要はなく、グローバル VNet ピアリング経由で別リージョン（East US の VNET1）の VM にも接続できます。',
        explanationEn: 'Bastion works across global VNet peering, so VMs in East US (VNET1) are also reachable.',
      },
      {
        id: 'C',
        textJa: 'VM1、VM2、VM3 のみ',
        textEn: 'VM1, VM2, and VM3 only',
        isCorrect: false,
        explanationJa: '【不正解】VNET3 も VNET2 とピアリングされているため、VM4 も Bastion から保護・接続可能です。',
        explanationEn: 'VNET3 is also peered with VNET2, making VM4 accessible through the Bastion host.',
      },
      {
        id: 'D',
        textJa: 'VM1、VM2、VM3、VM4',
        textEn: 'VM1, VM2, VM3, and VM4',
        isCorrect: true,
        explanationJa: '【正解】Azure Bastion は同一 VNet（VNET2 の VM2）およびローカル/グローバル VNet ピアリングで直接接続された VNet（VNET1 の VM1・VM3、VNET3 の VM4）のすべてに接続できます。',
        explanationEn: 'Azure Bastion supports local and global VNet peering, allowing secure RDP/SSH access to VM1, VM2, VM3, and VM4.',
      },
    ],
    overallExplanationJa: `Azure Bastion は配置先の仮想ネットワークだけでなく、ローカルおよびグローバル VNet ピアリングで接続されたすべての仮想ネットワーク上の仮想マシンへプライベート IP で接続できます。すべての VNet がピアリングされているため、全 4 台が対象となります。`,
    overallExplanationEn: `Azure Bastion supports both regional and global VNet peering, enabling connectivity to VMs across all directly peered virtual networks regardless of Azure region.`,
    keyPointsJa: [
      'Azure Bastion はローカル VNet ピアリングとグローバル VNet ピアリングの両方に対応',
      'リージョンの一致は不要で、ピアリングによる到達性があれば接続可能',
    ],
    keyPointsEn: [
      'Azure Bastion works over both local and global VNet peering',
      'Region matching is not required when VNets are directly peered',
    ],
    referenceTopic: 'Azure Bastion と VNet ピアリングの接続範囲',
  },
  {
    id: 'pdf-q104',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Foundry エージェント単位のカスタムガードレール割り当て',
    titleEn: 'Assigning Custom Guardrails Directly to a Microsoft Foundry Agent',
    scenarioJa: `Deployment1 という名前のモデル デプロイが含まれる Microsoft Foundry プロジェクトがあります。Deployment1 には、既存の既定のガードレール構成を使用する Agent1 という名前のエージェントが含まれています。
Agent1 が有害な表現を含むツール呼び出しを生成することが分かりました。
有害なコンテンツを含む Agent1 の応答が実行されないようにする必要があります。このソリューションでは、Deployment1 の構成が変更されないようにする必要があります。`,
    scenarioEn: `You have a Microsoft Foundry project that contains a model deployment named Deployment1. Deployment1 includes an agent named Agent1 using the existing default guardrail configuration.
You discover that Agent1 generates tool calls containing harmful expressions. You need to prevent Agent1 responses with harmful content from executing without modifying the configuration of Deployment1.`,
    questionJa: '何をすべきですか。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Agent1 のデータセットに対する自動評価を作成する。',
        textEn: 'Create an automated evaluation on a dataset for Agent1.',
        isCorrect: false,
        explanationJa: '【不正解】評価は安全性や品質を事前にテスト・測定する機能であり、本番実行時の有害なツール呼び出しをリアルタイムにブロックする制御ではありません。',
        explanationEn: 'Automated evaluations measure safety offline or in testing and do not block harmful tool calls at runtime.',
      },
      {
        id: 'B',
        textJa: 'カスタム ガードレールを作成し、Agent1 に直接割り当てる。',
        textEn: 'Create a custom guardrail and assign it directly to Agent1.',
        isCorrect: true,
        explanationJa: '【正解】カスタム ガードレールを作成してツール呼び出しに対する検査・ブロックを構成し、Agent1 に直接割り当てることで、Deployment1 の構成を変更せずに実行時保護を適用できます。',
        explanationEn: 'Creating a custom guardrail and assigning it directly to Agent1 enforces runtime blocking on harmful tool calls while leaving Deployment1 unchanged.',
      },
      {
        id: 'C',
        textJa: 'Deployment1 のモデルをファインチューニングする。',
        textEn: 'Fine-tune the underlying foundation model used in Deployment1.',
        isCorrect: false,
        explanationJa: '【不正解】ファインチューニングはモデルの再学習であり、Deployment1 の構成変更を伴ううえ、実行時フィルタのように確実にツール呼び出しを遮断する仕組みではありません。',
        explanationEn: 'Fine-tuning alters the model deployment and does not act as a deterministic runtime block on tool calls.',
      },
      {
        id: 'D',
        textJa: 'Agent1 のレッド チーミング実行を作成する。',
        textEn: 'Create and execute a red teaming evaluation run for Agent1.',
        isCorrect: false,
        explanationJa: '【不正解】レッド チーミングは脆弱性やリスクを検証・発見するためのテスト実行であり、本番での有害な実行を防止する制御にはなりません。',
        explanationEn: 'Red teaming identifies vulnerabilities during testing rather than enforcing runtime blocks.',
      },
    ],
    overallExplanationJa: `Microsoft Foundry では、デプロイ全体の既定ガードレールを変更できない場合でも、カスタム ガードレールを作成してエージェント単位（Agent1）に直接割り当てることで、ツール呼び出しを含む実行時の有害出力を遮断できます。`,
    overallExplanationEn: `In Microsoft Foundry, custom guardrails can be assigned directly at the agent level to inspect and block harmful tool calls at runtime without modifying the underlying model deployment configuration.`,
    keyPointsJa: [
      '評価やレッド チーミングは検証、ガードレールは実行時の遮断制御',
      'カスタム ガードレールをエージェントに直接割り当ててデプロイ設定への影響を回避',
    ],
    keyPointsEn: [
      'Evaluations and red teaming test behavior; guardrails enforce runtime blocking',
      'Assign custom guardrails directly to Agent1 to keep Deployment1 unchanged',
    ],
    referenceTopic: 'Microsoft Foundry ガードレールとエージェント保護',
  },
  {
    id: 'pdf-q105',
    domain: 'Purview & コンプライアンス監査',
    difficulty: '標準 (Medium)',
    titleJa: 'Purview DSPM から作成したポリシーの管理・編集場所',
    titleEn: 'Managing and Editing Policies Created via Purview DSPM',
    scenarioJa: `パイロット グループに対して Microsoft 365 Copilot が有効になっている Microsoft 365 テナントがあります。ユーザーは、Microsoft Teams のチャットと Microsoft SharePoint Online のサイトに基づく応答を頻繁に生成します。
あなたは Microsoft Purview データ セキュリティ態勢管理 (DSPM) を使用して過剰共有のリスクを特定し、推奨事項に基づいてポリシーを作成します。
DSPM によって作成されたポリシーを管理および編集する必要があります。`,
    scenarioEn: `You have a Microsoft 365 tenant with Microsoft 365 Copilot enabled for a pilot group. Users frequently generate responses grounded in Microsoft Teams chats and Microsoft SharePoint Online sites.
You use Microsoft Purview Data Security Posture Management (DSPM) to identify oversharing risks and create policies from recommendations.
You need to manage and edit the policies created by DSPM.`,
    questionJa: '使用できる Microsoft Purview ソリューションを2つ選んでください。',
    questionEn: 'Which two Microsoft Purview solutions can you use? (Choose two.)',
    requiredSelections: 2,
    options: [
      {
        id: 'A',
        textJa: 'コミュニケーション コンプライアンス',
        textEn: 'Communication Compliance',
        isCorrect: false,
        explanationJa: '【不正解】コミュニケーション コンプライアンスは不適切なメッセージや行動を検知・レビューする機能であり、DSPM の推奨から作成される共有制限やラベル ポリシーの管理先ではありません。',
        explanationEn: 'Communication Compliance monitors policy violations in messages and does not manage DSPM-created DLP or labeling policies.',
      },
      {
        id: 'B',
        textJa: 'データ損失防止',
        textEn: 'Data Loss Prevention',
        isCorrect: true,
        explanationJa: '【正解】DSPM の推奨事項から作成された DLP ポリシー（データ利用や共有の制限など）は、Purview のデータ損失防止 (DLP) ソリューションで管理・編集します。',
        explanationEn: 'DLP policies generated from DSPM recommendations are managed and edited in Microsoft Purview Data Loss Prevention.',
      },
      {
        id: 'C',
        textJa: 'インサイダー リスク管理',
        textEn: 'Insider Risk Management',
        isCorrect: false,
        explanationJa: '【不正解】インサイダー リスク管理は内部不正やデータ持ち出しリスクを分析する機能であり、DSPM が作成する保護ポリシーの編集先ではありません。',
        explanationEn: 'Insider Risk Management correlates internal risk signals rather than managing DSPM-created DLP or Information Protection policies.',
      },
      {
        id: 'D',
        textJa: '情報保護',
        textEn: 'Information Protection',
        isCorrect: true,
        explanationJa: '【正解】DSPM の推奨事項から作成された秘密度ラベルの自動適用などのポリシーは、Purview の情報保護 (Information Protection) ソリューションで管理・編集します。',
        explanationEn: 'Auto-labeling and sensitivity label policies created from DSPM recommendations are managed and edited in Microsoft Purview Information Protection.',
      },
    ],
    overallExplanationJa: `Microsoft Purview DSPM の推奨事項から作成されたポリシーの実体は、データ共有を制御する「データ損失防止 (DLP)」および秘密度ラベルによる分類・保護を行う「情報保護 (Information Protection)」に作成されるため、管理・編集もそれぞれのソリューション画面で行います。`,
    overallExplanationEn: `Policies provisioned through Microsoft Purview DSPM recommendations are implemented as DLP policies and sensitivity/auto-labeling policies, and are therefore edited in Data Loss Prevention and Information Protection.`,
    keyPointsJa: [
      'DSPM はリスク可視化と推奨事項からの作成を担い、実体ポリシーの管理は各ソリューションで行う',
      'データ損失防止 (DLP) と情報保護 (Information Protection) が管理対象となる',
    ],
    keyPointsEn: [
      'DSPM surfaces risks, while created policies are edited in Data Loss Prevention and Information Protection',
    ],
    referenceTopic: 'Microsoft Purview DSPM ポリシーの管理',
  },
  {
    id: 'pdf-q106',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Functions HTTP トリガーの受信アクセス制限による送信元 IP 限定',
    titleEn: 'Restricting Inbound Partner Traffic to Azure Functions with Access Restrictions',
    scenarioJa: `HTTP トリガーを使用し、Elastic Premium プランで実行され、仮想ネットワーク統合を使用する Azure Functions アプリ App1 があります。パートナー アプリケーションは、パブリック IP アドレス xxx.xxx.xxx.xx から App1 に要求を送信します。
xxx.xxx.xxx.xx からの要求だけが受け入れられるようにする必要があります。`,
    scenarioEn: `You have an Azure Functions app named App1 that uses an HTTP trigger, runs on an Elastic Premium plan, and uses virtual network integration. A partner application sends requests to App1 from public IP address xxx.xxx.xxx.xx.
You need to ensure that only requests from xxx.xxx.xxx.xx are accepted.`,
    questionJa: '何をすべきですか。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: '新しい Azure Bastion ホストをデプロイする。',
        textEn: 'Deploy a new Azure Bastion host resource.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Bastion は仮想マシンへの RDP/SSH 管理接続用サービスであり、Functions の HTTP 受信通信の IP 制限には関係ありません。',
        explanationEn: 'Azure Bastion provides RDP/SSH access to VMs and does not filter HTTP traffic to Azure Functions.',
      },
      {
        id: 'B',
        textJa: 'プライベート エンドポイント化し公開アクセスを閉じる。',
        textEn: 'Add a private endpoint and block public access.',
        isCorrect: false,
        explanationJa: '【不正解】パブリック ネットワーク アクセスを無効にすると、パートナーのパブリック IP アドレス (xxx.xxx.xxx.xx) からのインターネット経由の要求も拒否されてしまいます。',
        explanationEn: 'Disabling public network access blocks requests from the partner public IP address.',
      },
      {
        id: 'C',
        textJa: 'VNet 統合サブネット側に NSG 規則を適用する。',
        textEn: 'Apply an NSG rule to the VNet integration subnet.',
        isCorrect: false,
        explanationJa: '【不正解】仮想ネットワーク統合のサブネットは App1 からの「送信」トラフィック用であり、公開 HTTP エンドポイントへの受信要求はそこを通りません。',
        explanationEn: 'The VNet integration subnet handles outbound traffic from App1, not inbound internet HTTP requests.',
      },
      {
        id: 'D',
        textJa: 'App1 に受信アクセス制限を構成する。',
        textEn: 'Configure inbound access restrictions on App1.',
        isCorrect: true,
        explanationJa: '【正解】App1 の受信アクセス制限（Access restrictions）でパートナーのパブリック IP（/32）を許可し、それ以外を拒否（Deny）にすることで、パブリック エンドポイントへの受信元を限定できます。',
        explanationEn: 'Configuring inbound access restrictions on App1 to allow xxx.xxx.xxx.xx/32 and deny unmatched traffic restricts incoming HTTP requests to that IP.',
      },
      {
        id: 'E',
        textJa: '送信通信用の Azure NAT Gateway を構築する。',
        textEn: 'Deploy an Azure NAT Gateway for outbound calls.',
        isCorrect: false,
        explanationJa: '【不正解】NAT Gateway は送信元パブリック IP を固定する送信側の機能であり、受信トラフィックの許可・拒否を制御するものではありません。',
        explanationEn: 'Azure NAT Gateway controls outbound source IP addresses, not inbound request filtering.',
      },
    ],
    overallExplanationJa: `Azure Functions の VNet 統合は送信トラフィック用です。インターネットから公開 HTTP トリガーへの受信を特定のパブリック IP に限定するには、App Service / Functions の「受信アクセス制限 (Access restrictions)」を構成します。`,
    overallExplanationEn: `VNet integration only routes outbound calls from Azure Functions. To filter inbound internet HTTP calls by source IP, configure inbound access restrictions directly on the Function app.`,
    keyPointsJa: [
      'VNet 統合サブネットの NSG は送信通信を制御し、公開エンドポイントの受信には作用しない',
      '公開エンドポイントへの送信元 IP 制限には受信アクセス制限を使用する',
    ],
    keyPointsEn: [
      'Access restrictions control inbound public HTTP traffic to Azure Functions',
      'VNet integration governs outbound traffic only',
    ],
    referenceTopic: 'Azure Functions 受信アクセス制限と通信制御',
  },
  {
    id: 'pdf-q107',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'APIM の validate-jwt ポリシーによる Entra トークン検証',
    titleEn: 'Enforcing Microsoft Entra Token Validation in APIM with validate-jwt',
    scenarioJa: `Azure API Management のインスタンス APIM1 があり、OrdersAPI という API を公開しています。アプリケーションは Microsoft Entra アクセス トークンを使用して OrdersAPI を呼び出します。
セキュリティ レビューで、有効なアクセス トークンを含まない要求も OrdersAPI に転送される可能性があることが判明しました。
要求が OrdersAPI に到達する前に、APIM1 が有効な Microsoft Entra トークンを含まない要求を拒否するようにする必要があります。`,
    scenarioEn: `You have an Azure API Management instance named APIM1 that exposes an API named OrdersAPI. Applications call OrdersAPI using Microsoft Entra access tokens.
A security review discovers that requests without valid access tokens might be forwarded to OrdersAPI.
You need to ensure that APIM1 rejects requests that do not contain a valid Microsoft Entra token before they reach OrdersAPI.`,
    questionJa: '何を構成すべきですか。',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'rate-limit-by-key ポリシー',
        textEn: 'The rate-limit-by-key policy',
        isCorrect: false,
        explanationJa: '【不正解】rate-limit-by-key は呼び出し回数を制限するレート制御ポリシーであり、JWT トークンの署名や有効期限を検証するものではありません。',
        explanationEn: 'rate-limit-by-key throttles request counts and does not validate JWT tokens.',
      },
      {
        id: 'B',
        textJa: 'set-backend-service ポリシー',
        textEn: 'The set-backend-service policy',
        isCorrect: false,
        explanationJa: '【不正解】set-backend-service はバックエンドの転送先 URL を変更するポリシーであり、認証トークンの検証機能はありません。',
        explanationEn: 'set-backend-service redirects requests to a backend service and does not validate tokens.',
      },
      {
        id: 'C',
        textJa: 'OrdersAPI のサブスクリプション スコープ',
        textEn: 'Subscription scope for OrdersAPI',
        isCorrect: false,
        explanationJa: '【不正解】APIM のサブスクリプション スコープは API キーの適用範囲を設定するものであり、Microsoft Entra の JWT アクセストークン検証とは別です。',
        explanationEn: 'APIM subscription scope manages API subscription keys rather than Entra JWT validation.',
      },
      {
        id: 'D',
        textJa: 'validate-jwt ポリシー',
        textEn: 'The validate-jwt policy',
        isCorrect: true,
        explanationJa: '【正解】OrdersAPI の inbound セクションに validate-jwt ポリシーを構成し、openid-config で Entra の署名鍵を参照し audiences や issuers を検証することで、バックエンド転送前に無効なトークンを拒否できます。',
        explanationEn: 'Configuring the validate-jwt policy in the inbound section checks signature keys, issuer, audience, and expiration before forwarding requests to OrdersAPI.',
      },
    ],
    overallExplanationJa: `API Management で Microsoft Entra のベアラー トークンをゲートウェイ層で強制検証するには、inbound セクションで \`validate-jwt\`（または Entra 専用の \`validate-azure-ad-token\`）ポリシーを使用して署名・発行者・対象 API・有効期限をチェックします。`,
    overallExplanationEn: `Use the \`validate-jwt\` policy in the API Management inbound pipeline to verify Microsoft Entra JWT signatures, issuers, audiences, and lifetimes before forwarding requests.`,
    keyPointsJa: [
      'validate-jwt ポリシーを inbound に配置しバックエンド到達前にトークン検証・拒否を行う',
      'openid-config により Entra の公開署名鍵を自動参照できる',
    ],
    keyPointsEn: [
      'Place validate-jwt in the inbound policy section',
      'Verify issuer, audience, expiration, and signing keys via openid-config',
    ],
    referenceTopic: 'Azure API Management の validate-jwt ポリシー',
  },
  {
    id: 'pdf-q108',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '高リスク Microsoft Entra Agent ID に対する条件付きアクセスによる自動制限',
    titleEn: 'Restricting High-Risk Microsoft Entra Agent IDs with Conditional Access',
    scenarioJa: `Microsoft Entra Agent ID を使用する Microsoft Entra テナントがあります。エージェント ID が割り当てられた Microsoft Foundry エージェントが複数あります。
異常なサインイン アクティビティにより、ID の1つに高リスクのフラグが付いていることがわかりました。
リスクに基づいて、エージェントによるリソースへのアクセスが自動的に制限されるようにする必要があります。`,
    scenarioEn: `You have a Microsoft Entra tenant that uses Microsoft Entra Agent IDs. Multiple Microsoft Foundry agents are assigned agent IDs.
Due to anomalous sign-in activity, one of the IDs is flagged as high risk.
You need to ensure that resource access by agents is automatically restricted based on risk.`,
    questionJa: '作成すべきものを1つ選んでください。',
    questionEn: 'What should you create?',
    options: [
      {
        id: 'A',
        textJa: 'それらの ID に対する PIM アクティブ化ポリシー',
        textEn: 'A PIM role activation policy for those IDs',
        isCorrect: false,
        explanationJa: '【不正解】PIM のアクティブ化ポリシーは有資格ロールの昇格条件を設定するものであり、エージェントのリスクに応じた実行時アクセス遮断は行いません。',
        explanationEn: 'PIM activation policies govern eligible role elevation rather than dynamic risk-based access blocking.',
      },
      {
        id: 'B',
        textJa: 'それらのエージェント ID の定期アクセス レビュー',
        textEn: 'Scheduled access reviews for all agent IDs',
        isCorrect: false,
        explanationJa: '【不正解】アクセス レビューは定期的な権限棚卸しの仕組みであり、高リスク判定と同時にアクセス要求を自動制限する制御ではありません。',
        explanationEn: 'Access reviews perform periodic entitlement recertification rather than real-time risk blocking.',
      },
      {
        id: 'C',
        textJa: 'それらの ID に対する条件付きアクセス ポリシー',
        textEn: 'A Conditional Access policy for those IDs',
        isCorrect: true,
        explanationJa: '【正解】対象のエージェント ID に対してリスク条件付きアクセス ポリシーを作成し、高リスク時にアクセスをブロックすることで、自動的にリソースアクセスを制限できます。',
        explanationEn: 'A Conditional Access policy targeting the agent IDs can evaluate sign-in/identity risk and automatically block high-risk access.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Entra ロール割り当てポリシー',
        textEn: 'A Microsoft Entra role assignment policy',
        isCorrect: false,
        explanationJa: '【不正解】ロール割り当てポリシーは権限付与の枠組みであり、リスク状態に基づく動的なアクセス遮断は条件付きアクセスが担います。',
        explanationEn: 'Role assignment policies control permissions assignment rather than runtime risk-based blocking.',
      },
    ],
    overallExplanationJa: `Microsoft Entra Agent ID（ワークロード ID / エージェント ID）の異常なサインインに伴う高リスク状態に応じて自動的にリソースアクセスを遮断するには、リスク レベルを条件とする条件付きアクセス ポリシーを作成します。`,
    overallExplanationEn: `Conditional Access policies targeting Microsoft Entra Agent IDs (workload identities) can evaluate risk levels and automatically block access when an ID is flagged as high risk.`,
    keyPointsJa: [
      'エージェント ID のリスク連動ブロックには条件付きアクセス ポリシーを使用する',
      '棚卸しのアクセス レビューやロール昇格の PIM とは異なりリアルタイムに要求を遮断できる',
    ],
    keyPointsEn: [
      'Use Conditional Access for dynamic risk-based blocking of Agent IDs',
    ],
    referenceTopic: 'Microsoft Entra Agent ID と条件付きアクセス',
  },
  {
    id: 'pdf-q109',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'CMK 暗号化ディスクのエージェントレススキャンに必要な Key Vault ロール',
    titleEn: 'Key Vault Role Required for Agentless Scanning of CMK-Encrypted Disks',
    scenarioJa: `複数の仮想マシンと、KV1 という名前の Azure Key Vault を含む Sub1 という名前の Azure サブスクリプションがあります。各仮想マシンにはシステム割り当てマネージド ID があります。Sub1 では Microsoft Defender for Servers が有効になっています。Defender for Servers ではエージェントレス スキャンが有効になっています。
一部の仮想マシンでは、KV1 に保存されたカスタマー マネージド キーを使用して暗号化されたマネージド ディスクを使用しています。
影響を受ける仮想マシンが Microsoft Defender for Cloud でエージェントレス スキャンの結果を返さないことがわかりました。
エージェントレス スキャンで仮想マシンを分析できるようにする必要があります。`,
    scenarioEn: `You have an Azure subscription named Sub1 that contains multiple virtual machines and an Azure Key Vault named KV1. Each VM has a system-assigned managed identity. Microsoft Defender for Servers with agentless scanning is enabled on Sub1.
Some VMs use managed disks encrypted with customer-managed keys stored in KV1. You notice that the affected VMs do not return agentless scanning results in Microsoft Defender for Cloud.
You need to enable agentless scanning to analyze these virtual machines.`,
    questionJa: '何をすべきですか。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: '各 VM のシステム割り当てマネージド ID に、KV1 の Key Vault Reader ロールを割り当てる。',
        textEn: 'Assign the Key Vault Reader role on KV1 to the system-assigned identity of each VM.',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault Reader はメタデータ参照のみで暗号操作ができず、そもそもスキャンを実行するのは VM ではなく Defender のスキャン サービスです。',
        explanationEn: 'Key Vault Reader lacks cryptographic permissions, and the scanning service—not the VM identity—performs the disk snapshot scan.',
      },
      {
        id: 'B',
        textJa: 'Sub1 全体の保護用に Microsoft Defender for Key Vault プランを有効にする。',
        textEn: 'Enable the Microsoft Defender for Key Vault security plan across subscription Sub1.',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Key Vault は不審なキー アクセスを検知する脅威保護プランであり、スキャン サービスにキー復号権限を与えるものではありません。',
        explanationEn: 'Defender for Key Vault detects threats against vaults and does not grant decryption permissions to the agentless scanner.',
      },
      {
        id: 'C',
        textJa: 'スキャン サービスに、KV1 の Key Vault Crypto Service Encryption User ロールを割り当てる。',
        textEn: 'Assign the Key Vault Crypto Service Encryption User role on KV1 to the scanning service.',
        isCorrect: true,
        explanationJa: '【正解】エージェントレス スキャンが CMK で暗号化されたディスク スナップショットを復号して検査するには、スキャン サービス（VM マネージド ID ではなくスキャナー側）に wrapKey / unwrapKey を許可する Key Vault Crypto Service Encryption User ロールを KV1 で付与する必要があります。',
        explanationEn: 'Assigning Key Vault Crypto Service Encryption User on KV1 to the Defender agentless scanning service grants wrapKey/unwrapKey access needed to read CMK-encrypted disk snapshots.',
      },
      {
        id: 'D',
        textJa: '対象仮想マシンのポート保護用に Just-in-Time (JIT) VM アクセスを有効にする。',
        textEn: 'Enable Just-in-Time (JIT) VM access on the affected virtual machines in Sub1.',
        isCorrect: false,
        explanationJa: '【不正解】JIT VM アクセスは管理ポートのネットワーク制御であり、CMK 暗号化ディスクのスキャン権限とは無関係です。',
        explanationEn: 'JIT VM access controls RDP/SSH network ports and does not resolve CMK disk scanning permissions.',
      },
      {
        id: 'E',
        textJa: 'スキャン サービスに、KV1 の Key Vault Secrets User 読み取りロールを割り当てる。',
        textEn: 'Assign the Key Vault Secrets User role on KV1 to the agentless scanning service.',
        isCorrect: false,
        explanationJa: '【不正解】ディスク暗号化キーは Key Vault の「キー」オブジェクトであり、シークレット読み取り用の Key Vault Secrets User では暗号キー操作を行えません。',
        explanationEn: 'Disk encryption uses Key Vault keys rather than secrets, so Secrets User does not permit key unwrap operations.',
      },
    ],
    overallExplanationJa: `Defender for Cloud のエージェントレス スキャンは、Azure 環境外側のスナップショットからディスクを検査します。ディスクが CMK（カスタマー マネージド キー）で暗号化されている場合、VM 側ではなく「スキャン サービス」に対して KV1 の \`Key Vault Crypto Service Encryption User\` ロールを割り当てる必要があります。`,
    overallExplanationEn: `When managed disks use CMK, the Defender for Cloud agentless scanning service itself needs the \`Key Vault Crypto Service Encryption User\` role on the Key Vault to unwrap encryption keys and analyze disk snapshots.`,
    keyPointsJa: [
      'CMK ディスクのエージェントレス スキャンではスキャン サービスにキー操作権限が必要',
      'VM ではなくスキャン サービスに Key Vault Crypto Service Encryption User を割り当てる',
    ],
    keyPointsEn: [
      'Grant Key Vault Crypto Service Encryption User to the scanning service, not the VMs',
      'Allows wrapKey/unwrapKey for reading CMK-encrypted disk snapshots',
    ],
    referenceTopic: 'Defender for Cloud エージェントレス スキャンと CMK 権限',
  },
  {
    id: 'pdf-q110',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'APIM シークレット名前付き値の Key Vault 移行における最初の手順',
    titleEn: 'First Step to Migrate APIM Named Values to Azure Key Vault',
    scenarioJa: `APIM1 という名前の Azure API Management インスタンスがあります。サブスクリプション キーを使用して APIM1 の API にアクセスするパートナー企業があります。バックエンド API キーが APIM1 の名前付き値に保存されています。
Microsoft Defender for Cloud によって、次の推奨事項が生成されます。
「API Management のシークレットの名前付き値は Azure Key Vault に保存する必要があります」
この推奨事項に対処する必要があります。`,
    scenarioEn: `You have an Azure API Management instance named APIM1. Partner organizations access APIM1 APIs using subscription keys, and backend API keys are stored in APIM1 named values.
Microsoft Defender for Cloud generates the recommendation: "API Management secrets named values should be stored in Azure Key Vault."
You need to remediate this recommendation.`,
    questionJa: '最初に行うべきことを1つ選んでください。',
    questionEn: 'What should you do first?',
    options: [
      {
        id: 'A',
        textJa: 'Defender for APIs を有効にする。',
        textEn: 'Enable Defender for APIs on APIM1.',
        isCorrect: false,
        explanationJa: '【不正解】Defender for APIs は API 脅威検出のプランであり、名前付き値の保管先を Key Vault に移行する設定ではありません。',
        explanationEn: 'Defender for APIs provides API threat detection and does not migrate named values to Key Vault.',
      },
      {
        id: 'B',
        textJa: 'APIM1 のマネージド ID を有効にする。',
        textEn: 'Enable a managed identity on APIM1.',
        isCorrect: true,
        explanationJa: '【正解】APIM の名前付き値で Azure Key Vault のシークレットを参照するには、APIM1 が Key Vault に認証するためのマネージド ID をまず有効化し、その ID に Key Vault へのアクセス権を付与する必要があります。',
        explanationEn: 'To reference Key Vault secrets from APIM named values, you must first enable a managed identity on APIM1 so it can authenticate to Key Vault.',
      },
      {
        id: 'C',
        textJa: '既存の名前付き値をシークレットとしてマークする。',
        textEn: 'Mark the existing named values as secret.',
        isCorrect: false,
        explanationJa: '【不正解】名前付き値をシークレットとしてマークしても値は APIM 内に保存されたままとなり、Key Vault への保存という推奨事項は解消されません。',
        explanationEn: 'Marking a named value as secret still stores the value inside APIM rather than Key Vault.',
      },
      {
        id: 'D',
        textJa: 'サブスクリプション キーへ置き換える。',
        textEn: 'Switch to a subscription key instead.',
        isCorrect: false,
        explanationJa: '【不正解】パートナーが使うサブスクリプション キーとバックエンド呼び出し用の API キーは役割が異なり、代替できません。',
        explanationEn: 'APIM subscription keys authenticate callers to APIM and cannot replace backend API keys.',
      },
    ],
    overallExplanationJa: `API Management の名前付き値を Azure Key Vault 参照へ移行する手順は、(1) APIM1 のマネージド ID を有効化、(2) そのマネージド ID に Key Vault シークレットの読み取り権限を付与、(3) Key Vault にシークレットを登録して APIM1 の名前付き値を Key Vault 参照に切り替える、という順序で行います。`,
    overallExplanationEn: `Migrating APIM named values to Key Vault references starts by enabling a managed identity on APIM1, granting that identity Key Vault secret read permissions, and then linking the named values to Key Vault.`,
    keyPointsJa: [
      'Key Vault 参照の前提として APIM1 のマネージド ID 有効化が最初のステップ',
      '認証用の ID 準備 -> Key Vault 権限付与 -> 名前付き値の参照変更の順で進める',
    ],
    keyPointsEn: [
      'First enable a managed identity on APIM1 before granting Key Vault access',
    ],
    referenceTopic: 'API Management と Key Vault 名前付き値の統合',
  },
  {
    id: 'pdf-q111',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Just-In-Time (JIT) VM アクセスによる RDP 公開時間の 4 時間制限制御',
    titleEn: 'Limiting VM RDP Exposure to 4 Hours with Just-In-Time (JIT) VM Access',
    scenarioJa: `VM1 という名前の Azure 仮想マシンがあります。NSG1 という名前のネットワーク セキュリティ グループ (NSG) が、VM1 のネットワーク アダプターに関連付けられています。VM1 は、オンプレミス ネットワークからの受信 RDP (TCP 3389) を許可しています。
VM1 の露出を減らす必要があります。ソリューションは、必要な RDP アクセスが最大4時間だけ許可されるようにする必要があります。`,
    scenarioEn: `You have an Azure virtual machine named VM1. A Network Security Group (NSG) named NSG1 is associated with VM1's network adapter, allowing inbound RDP (TCP 3389) from your on-premises network.
You need to reduce VM1's exposure by ensuring that required RDP access is permitted for a maximum of 4 hours at a time.`,
    questionJa: '何をすべきか、1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'VM1 へのアクセスに条件付きアクセス ポリシーを適用する。',
        textEn: 'Create a Conditional Access policy covering VM1.',
        isCorrect: false,
        explanationJa: '【不正解】条件付きアクセスは Microsoft Entra ID サインイン時の認証制御であり、VM の TCP 3389 ポート開放時間を制御する機能ではありません。',
        explanationEn: 'Conditional Access controls Microsoft Entra sign-ins, not NSG port open durations on a VM.',
      },
      {
        id: 'B',
        textJa: 'VNet 内に専用の Azure Bastion ホストを構成する。',
        textEn: 'Deploy an Azure Bastion host inside the VNet.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Bastion はパブリック IP なしでの接続を提供しますが、オンプレミスからの RDP 許可時間を要求ごとに最大 4 時間へ自動制限する設定にはなりません。',
        explanationEn: 'Deploying Bastion alone does not enforce a 4-hour time-bound RDP access limit.',
      },
      {
        id: 'C',
        textJa: 'NSG1 に TCP 3389 を許可する規則を追加して限定する。',
        textEn: 'Add a scoped inbound rule directly into NSG1.',
        isCorrect: false,
        explanationJa: '【不正解】静的な NSG ルールには要求後 4 時間で自動失効する機能がなく、時間制限付きポート開放は手動または別自動化が必要になります。',
        explanationEn: 'Static NSG rules do not automatically expire after 4 hours.',
      },
      {
        id: 'D',
        textJa: 'VM1 の Just-In-Time (JIT) VM アクセスを有効にする。',
        textEn: 'Enable Just-In-Time (JIT) VM access for VM1.',
        isCorrect: true,
        explanationJa: '【正解】JIT VM アクセスを有効化し TCP 3389 の最大要求時間を 4 時間に設定することで、普段はポートを閉じ、承認された要求時のみ最大 4 時間 NSG1 を動的に開放できます。',
        explanationEn: 'JIT VM access locks down TCP 3389 by default and opens NSG1 dynamically upon approved requests for up to 4 hours.',
      },
    ],
    overallExplanationJa: `Microsoft Defender for Cloud（Defender for Servers Plan 2）の Just-In-Time (JIT) VM アクセスを使用すると、管理ポート（RDP/SSH）を常時閉じた状態にし、アクセス要求時に最大 4 時間など指定時間だけ一時的な NSG 許可ルールを自動生成・自動失効させられます。`,
    overallExplanationEn: `Just-In-Time (JIT) VM access in Defender for Cloud keeps management ports closed and dynamically adds time-bound NSG allow rules (e.g., max 4 hours) when access is requested.`,
    keyPointsJa: [
      'JIT VM アクセスで TCP 3389 の常時開放を防ぎ最大許可時間を 4 時間に制限できる',
      'Defender for Servers Plan 2 で提供され NSG と連動して時間制限ルールを自動制御する',
    ],
    keyPointsEn: [
      'JIT VM access enforces time-bound port openings (e.g., 4 hours max) via dynamic NSG rules',
    ],
    referenceTopic: 'Defender for Cloud の Just-In-Time (JIT) VM アクセス',
  },
  {
    id: 'pdf-q112',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'ケーススタディ (Fabrikam): ACR へのプル専用とプッシュ/プル用の最小特権ロール',
    titleEn: 'Case Study (Fabrikam): Least-Privilege ACR Roles for AKS1 and ID1',
    scenarioJa: `${FABRIKAM_CASE_STUDY_JA}

技術要件を満たすように AKS1 と ID1 のマネージド ID を構成する必要があります。ソリューションは最小特権の原則に従う必要があります。
両方のロール候補は AcrPull、AcrPush、Contributor、Owner、Reader である。`,
    scenarioEn: `${FABRIKAM_CASE_STUDY_EN}

You need to configure the managed identities for AKS1 and ID1 to meet the technical requirements using the principle of least privilege.
Candidate roles: AcrPull, AcrPush, Contributor, Owner, Reader.`,
    questionJa: 'AKS1 と ID1 にそれぞれ割り当てるべきロールの組み合わせを1つ選んでください。',
    questionEn: 'Which combination of roles should you assign to AKS1 and ID1 on Registry1?',
    options: [
      {
        id: 'A',
        textJa: 'AKS1：AcrPull、ID1：Contributor',
        textEn: 'AKS1: AcrPull, ID1: Contributor',
        isCorrect: false,
        explanationJa: '【不正解】ID1 に Contributor を割り当てるとレジストリ自体の設定変更や削除まで可能になり、イメージのプッシュ・プルに対して権限が過剰です。',
        explanationEn: 'Contributor allows managing the registry resource itself, which exceeds push and pull permissions.',
      },
      {
        id: 'B',
        textJa: 'AKS1：AcrPush、ID1：AcrPush',
        textEn: 'AKS1: AcrPush, ID1: AcrPush',
        isCorrect: false,
        explanationJa: '【不正解】AKS1 はイメージを「プルすることだけ」が可能である必要があるため、プッシュも可能な AcrPush は最小特権に反します。',
        explanationEn: 'AKS1 must only pull images; AcrPush also grants push rights.',
      },
      {
        id: 'C',
        textJa: 'AKS1：Contributor、ID1：AcrPull',
        textEn: 'AKS1: Contributor, ID1: AcrPull',
        isCorrect: false,
        explanationJa: '【不正解】AKS1 の Contributor は過剰であり、ID1 の AcrPull ではイメージをプッシュできません。',
        explanationEn: 'Contributor is overly broad for AKS1, and AcrPull does not allow ID1 to push images.',
      },
      {
        id: 'D',
        textJa: 'AKS1：AcrPull、ID1：AcrPush',
        textEn: 'AKS1: AcrPull, ID1: AcrPush',
        isCorrect: true,
        explanationJa: '【正解】AcrPull はイメージの取得のみ、AcrPush はプッシュとプルの両方を許可するデータ専用ロールです。Registry1 スコープでそれぞれ割り当てることで最小特権を満たします。',
        explanationEn: 'AcrPull grants pull-only access to AKS1, while AcrPush grants both push and pull access to ID1 without registry management rights.',
      },
      {
        id: 'E',
        textJa: 'AKS1：Reader、ID1：Owner',
        textEn: 'AKS1: Reader, ID1: Owner',
        isCorrect: false,
        explanationJa: '【不正解】Reader は管理プレーン閲覧用であり、Owner はロール割り当てやリソース削除まで可能なため不適切です。',
        explanationEn: 'Reader is a control-plane read role, and Owner grants full control and RBAC management.',
      },
      {
        id: 'F',
        textJa: 'AKS1：Owner、ID1：AcrPull',
        textEn: 'AKS1: Owner, ID1: AcrPull',
        isCorrect: false,
        explanationJa: '【不正解】AKS1 に Owner を与えるのは極めて過剰であり、ID1 の AcrPull ではプッシュ要件を満たせません。',
        explanationEn: 'Owner is excessive for AKS1, and AcrPull cannot push images for ID1.',
      },
    ],
    overallExplanationJa: `Azure Container Registry の組み込みロールでは、\`AcrPull\` がイメージのプル専用、\`AcrPush\` がイメージのプッシュおよびプル許可（リソース構成変更権限なし）を提供します。`,
    overallExplanationEn: `On Azure Container Registry, \`AcrPull\` restricts an identity to pulling images only, whereas \`AcrPush\` permits both pushing and pulling images under least privilege.`,
    keyPointsJa: [
      'AcrPull: コンテナー イメージのプルのみ許可',
      'AcrPush: コンテナー イメージのプッシュとプルの両方を許可（リソース変更権限なし）',
    ],
    keyPointsEn: [
      'AcrPull allows image pulls only; AcrPush allows both push and pull',
    ],
    referenceTopic: 'Azure Container Registry のデータプレーンロール',
  },
  {
    id: 'pdf-q113',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'ケーススタディ (Fabrikam): Key Vault バックアップの復元先境界',
    titleEn: 'Case Study (Fabrikam): Key Vault Backup Restore Eligibility Across Regions and Subscriptions',
    scenarioJa: `${FABRIKAM_CASE_STUDY_JA}

キー コンテナーに関する計画済みの変更を実装しました。`,
    scenarioEn: `${FABRIKAM_CASE_STUDY_EN}

You implement the planned changes for the key vaults.`,
    questionJa: 'AKV1 のバックアップを復元できるキー コンテナーの組み合わせを1つ選んでください。',
    questionEn: 'To which key vaults can you restore a backup of AKV1?',
    options: [
      {
        id: 'A',
        textJa: 'AKV4 のみ',
        textEn: 'AKV4 only',
        isCorrect: false,
        explanationJa: '【不正解】AKV1（East US）と異なるリージョンであっても、同じ米国地理的境界（Central US）かつ同一サブスクリプション Sub1 内の AKV3 にも復元できます。',
        explanationEn: 'AKV3 in Central US is within the same US geography and Sub1 subscription, so it is also a valid restore target.',
      },
      {
        id: 'B',
        textJa: 'AKV3 と AKV4 のみ',
        textEn: 'AKV3 and AKV4 only',
        isCorrect: true,
        explanationJa: '【正解】Azure Key Vault のバックアップは「同一 Azure サブスクリプション」かつ「同一 Azure 地理的境界」内のキー コンテナーに復元可能です。Sub1 かつ米国の AKV3（Central US）と AKV4（East US）のみが対象になります。',
        explanationEn: 'Key Vault backups can only be restored to vaults within the same Azure subscription and same Azure geography—here AKV3 (Central US, Sub1) and AKV4 (East US, Sub1).',
      },
      {
        id: 'C',
        textJa: 'AKV4 と AKV5 のみ',
        textEn: 'AKV4 and AKV5 only',
        isCorrect: false,
        explanationJa: '【不正解】AKV5 は同じ East US にありますが、別サブスクリプション（Sub2）に属するため復元できません。また AKV3 が漏れています。',
        explanationEn: 'AKV5 belongs to Sub2, and Key Vault backups cannot be restored across different subscriptions.',
      },
      {
        id: 'D',
        textJa: 'AKV2、AKV3、AKV4 のみ',
        textEn: 'AKV2, AKV3, and AKV4 only',
        isCorrect: false,
        explanationJa: '【不正解】AKV2 は Sub1 にありますが West Europe リージョン（欧州の地理的境界）にあるため、米国境界の AKV1 のバックアップを復元できません。',
        explanationEn: 'AKV2 is in West Europe, which is outside the United States Azure geography.',
      },
      {
        id: 'E',
        textJa: 'AKV2、AKV3、AKV4、AKV5',
        textEn: 'AKV2, AKV3, AKV4, and AKV5',
        isCorrect: false,
        explanationJa: '【不正解】AKV2（地理的境界が異なる）および AKV5（サブスクリプションが異なる）はどちらも復元先に指定できません。',
        explanationEn: 'Neither AKV2 (different geography) nor AKV5 (different subscription) is eligible.',
      },
    ],
    overallExplanationJa: `Azure Key Vault オブジェクトのバックアップ復元は、**(1) 同じ Azure サブスクリプション** かつ **(2) 同じ Azure 地理的境界**（リージョン単位ではなく国/地域境界）の条件を満たす必要があります。East US（Sub1）にある AKV1 は、Sub1 かつ米国境界の AKV3（Central US）および AKV4（East US）へ復元できます。`,
    overallExplanationEn: `Key Vault backups require the destination vault to reside in the **same Azure subscription** and the **same Azure geography**. AKV3 (Central US) and AKV4 (East US) in Sub1 meet both criteria.`,
    keyPointsJa: [
      'Key Vault バックアップの復元要件は「同一サブスクリプション」＋「同一 Azure 地理的境界」',
      '同一リージョンである必要はなく、米国境界内の別リージョン（Central US）へ復元可能',
    ],
    keyPointsEn: [
      'Restore requires same subscription + same Azure geography (cross-region within the same geography is supported)',
    ],
    referenceTopic: 'Azure Key Vault のバックアップと復元の地理的境界',
  },
  {
    id: 'pdf-q114',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'ケーススタディ (Fabrikam): VM 削除時に権限を自動削除するマネージド ID の構成',
    titleEn: 'Case Study (Fabrikam): Configuring VM1 Managed Identity for Automatic Lifecycle Removal',
    scenarioJa: `${FABRIKAM_CASE_STUDY_JA}

VM1 がストレージにアクセスするための計画された変更を実装する必要があります。ソリューションは技術要件を満たす必要があります。`,
    scenarioEn: `${FABRIKAM_CASE_STUDY_EN}

You need to implement the planned change for VM1 to access storage while meeting the technical requirements.`,
    questionJa: '最初に行うべきことを1つ選んでください。',
    questionEn: 'What should you do first?',
    options: [
      {
        id: 'A',
        textJa: 'storage1 の Blob Data Reader ロールを付与する。',
        textEn: 'Assign the Storage Blob Data Reader role on storage1.',
        isCorrect: false,
        explanationJa: '【不正解】まだ VM1 に使用するマネージド ID が作成されていないため、先に VM1 上でシステム割り当てマネージド ID を構成する必要があります。',
        explanationEn: 'You must first enable the system-assigned managed identity on VM1 before assigning a role to it.',
      },
      {
        id: 'B',
        textJa: '既存のユーザー割り当て ID である ID1 を VM1 に設定。',
        textEn: 'Assign existing user-assigned identity ID1 to VM1.',
        isCorrect: false,
        explanationJa: '【不正解】ID1 はユーザー割り当てマネージド ID であり独立したライフサイクルを持つため、VM1 を削除しても ID1 とその権限は残ってしまいます。',
        explanationEn: 'ID1 is a user-assigned managed identity that persists independently even after VM1 is deleted.',
      },
      {
        id: 'C',
        textJa: 'ID1 のフェデレーション ID 資格情報を構成する。',
        textEn: 'Configure federated identity credentials for ID1.',
        isCorrect: false,
        explanationJa: '【不正解】フェデレーション ID 資格情報は外部 OIDC プロバイダーとの連携用であり、VM1 削除時の権限自動削除には対応しません。',
        explanationEn: 'Federated identity credentials are for external OIDC workloads and do not tie identity deletion to VM1.',
      },
      {
        id: 'D',
        textJa: 'storage1 のアクセス制御にロール割り当て条件を追加する。',
        textEn: 'Add a role assignment condition directly on storage1.',
        isCorrect: false,
        explanationJa: '【不正解】ロール割り当て条件は ABAC でコンテナーや BLOB タグによるアクセス制御を行う機能であり、ID ライフサイクル管理ではありません。',
        explanationEn: 'Role assignment conditions filter data access via attributes rather than managing identity lifecycle.',
      },
      {
        id: 'E',
        textJa: 'VM1 でシステム割り当てマネージド ID を構成する。',
        textEn: 'Configure a system-assigned managed identity on VM1.',
        isCorrect: true,
        explanationJa: '【正解】システム割り当てマネージド ID は VM1 とライフサイクルを共有するため、VM1 が削除されると ID とそのロール割り当てが自動的に削除されます。最初のステップとして VM1 で有効化します。',
        explanationEn: 'A system-assigned managed identity is bound to VM1’s lifecycle and is automatically removed along with its permissions when VM1 is deleted.',
      },
    ],
    overallExplanationJa: `技術要件「VM1 が削除された場合、VM1 のアクセス許可は自動的に削除される必要がある」を満たすには、リソースと存続期間を共有する**システム割り当てマネージド ID**を最初に VM1 で有効化し、その後その ID に \`storage1\` のデータ閲覧ロールを割り当てます。`,
    overallExplanationEn: `Because system-assigned managed identities share the lifecycle of their parent resource, enabling one on VM1 ensures permissions are automatically cleaned up upon VM deletion.`,
    keyPointsJa: [
      'システム割り当てマネージド ID は親リソース削除時に自動削除される',
      'ユーザー割り当てマネージド ID (ID1) は独立存続するため本要件に不適合',
    ],
    keyPointsEn: [
      'System-assigned managed identities are deleted automatically when the VM is deleted',
    ],
    referenceTopic: 'システム割り当てマネージド ID とライフサイクル管理',
  },
  {
    id: 'pdf-q115',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ケーススタディ (Fabrikam): WAF1 への場所ベースのレート制限ルール追加',
    titleEn: 'Case Study (Fabrikam): Implementing Location-Based Rate Limiting on WAF1',
    scenarioJa: `${FABRIKAM_CASE_STUDY_JA}

WAF1 について計画された変更を実装する必要があります。ソリューションでは管理作業を最小限に抑える必要があります。`,
    scenarioEn: `${FABRIKAM_CASE_STUDY_EN}

You need to implement the planned change for WAF1 while minimizing administrative effort.`,
    questionJa: '何を行うべきか、1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Policy を作る。',
        textEn: 'Add Azure Policy.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Policy は Azure リソース構成のガバナンス機能であり、WAF の HTTP リクエストに対する地理的レート制限ルールを実装するものではありません。',
        explanationEn: 'Azure Policy governs resource configuration compliance rather than HTTP rate-limiting rules.',
      },
      {
        id: 'B',
        textJa: 'Bot Manager を編集する。',
        textEn: 'Edit Bot Manager.',
        isCorrect: false,
        explanationJa: '【不正解】Bot Manager ルール セットは既知のボット通信を分類・ブロックするためのマネージド ルールであり、任意の場所ごとのレート制限条件は定義できません。',
        explanationEn: 'Bot Manager is a managed bot detection ruleset and does not implement custom geo-based rate limits.',
      },
      {
        id: 'C',
        textJa: 'カスタム ルールを追加する。',
        textEn: 'Add a custom rule.',
        isCorrect: true,
        explanationJa: '【正解】WAF1 の WAF ポリシーに RateLimitRule タイプのカスタム ルールを追加し、GeoMatch 条件で要求元の国・地域を指定してしきい値を構成することで、既存の WAF1 内で最小限の管理作業で実現できます。',
        explanationEn: 'Adding a RateLimitRule custom rule with a GeoMatch condition directly inside WAF1 enforces location-based rate limiting with minimal effort.',
      },
      {
        id: 'D',
        textJa: '管理対象 DRS を編集する。',
        textEn: 'Edit managed DRS.',
        isCorrect: false,
        explanationJa: '【不正解】Default Rule Set (DRS) は SQLi や XSS などの OWASP 攻撃パターンを検出するマネージド ルールであり、場所に基づくレート制限にはカスタム ルールが必要です。',
        explanationEn: 'Azure-managed DRS detects OWASP web attacks and cannot configure geo-based rate limiting.',
      },
    ],
    overallExplanationJa: `Azure WAF でクライアントの送信元国・地域（GeoMatch）や一定時間内のリクエスト数しきい値に基づく制御を実装するには、マネージド ルール セットではなく WAF ポリシーの「カスタム ルール（RateLimitRule）」を追加します。`,
    overallExplanationEn: `Location-based rate limiting in Azure WAF is configured by adding a \`RateLimitRule\` custom rule using a \`GeoMatch\` condition.`,
    keyPointsJa: [
      '要求属性やリクエスト頻度による制御には WAF カスタム ルール (RateLimitRule + GeoMatch) を使用する',
      'Bot Manager や DRS はマネージド ルール セットであり独自レート制限には使わない',
    ],
    keyPointsEn: [
      'Use a WAF custom rule (RateLimitRule with GeoMatch) for location-based rate limiting',
    ],
    referenceTopic: 'Azure WAF カスタムルールとレート制限',
  },
  {
    id: 'pdf-q116',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'ケーススタディ (Fabrikam): RG1 の PIM 割り当て実行可能ユーザーと対象グループ',
    titleEn: 'Case Study (Fabrikam): Eligible Users and Target Groups for Azure Resource PIM Assignment on RG1',
    scenarioJa: `${FABRIKAM_CASE_STUDY_JA}

PIM ロール割り当てについて計画されている変更を実装する必要があります。`,
    scenarioEn: `${FABRIKAM_CASE_STUDY_EN}

You need to implement the planned change for the PIM role assignment on RG1.`,
    questionJa: 'どのユーザーがこの変更を実行でき、どのグループを対象にできますか。正しい組み合わせを1つ選んでください。',
    questionEn: 'Which users can perform this change, and which groups can be targeted?',
    options: [
      {
        id: 'A',
        textJa: 'ユーザー：Admin2、Admin3、Admin4 のみ／グループ：Group1 のみ',
        textEn: 'Users: Admin2, Admin3, Admin4 only / Groups: Group1 only',
        isCorrect: false,
        explanationJa: '【不正解】Admin3（Contributor）および Admin4（既定では Azure RBAC 権限なしの Global Administrator）は RG1 にロール割り当てを作成できず、対象グループも Group1 だけではありません。',
        explanationEn: 'Admin3 (Contributor) and Admin4 (Global Admin without elevated access) cannot create Azure role assignments, and Group2/Group3 are also eligible targets.',
      },
      {
        id: 'B',
        textJa: 'ユーザー：Admin4 のみ／グループ：Group1 と Group2 のみ',
        textEn: 'Users: Admin4 only / Groups: Group1 and Group2 only',
        isCorrect: false,
        explanationJa: '【不正解】Admin4 は Azure リソースへのアクセス管理を昇格しない限り Sub1/RG1 のロール割り当て権限を持ちません。またロール割り当て可能な Microsoft 365 グループである Group3 も対象にできます。',
        explanationEn: 'Admin4 lacks Azure RBAC permissions on Sub1 by default, and Group3 (role-assignable M365 group) is also security-enabled.',
      },
      {
        id: 'C',
        textJa: 'ユーザー：Admin2 のみ／グループ：Group1、Group2、Group3 のみ',
        textEn: 'Users: Admin2 only / Groups: Group1, Group2, and Group3 only',
        isCorrect: true,
        explanationJa: '【正解】Sub1 の User Access Administrator を持ち RG1 に権限が継承されている Admin2 のみが PIM で Azure ロール割り当てを作成できます。また Azure RBAC の対象グループは securityEnabled が true のグループであるため、セキュリティ グループの Group1・Group2 と、ロール割り当て許可済み M365 グループの Group3 が対象となります。',
        explanationEn: 'Only Admin2 has User Access Administrator inherited to RG1 to create Azure PIM role assignments. Azure RBAC accepts all security-enabled groups: Group1, Group2 (Security), and Group3 (role-assignable Microsoft 365 group has securityEnabled=true).',
      },
      {
        id: 'D',
        textJa: 'ユーザー：Admin2 と Admin3 のみ／グループ：Group1 と Group3 のみ',
        textEn: 'Users: Admin2 and Admin3 only / Groups: Group1 and Group3 only',
        isCorrect: false,
        explanationJa: '【不正解】Admin3 は Contributor でありロール割り当てを作成できません。また Group2 はセキュリティ グループであるため Azure RBAC の対象グループに指定可能です。',
        explanationEn: 'Admin3 (Contributor) cannot assign roles, and Group2 (Security group) is eligible for Azure RBAC.',
      },
      {
        id: 'E',
        textJa: 'ユーザー：Admin4 のみ／グループ：Group1、Group2、Group3、Group4',
        textEn: 'Users: Admin4 only / Groups: Group1, Group2, Group3, Group4',
        isCorrect: false,
        explanationJa: '【不正解】Admin4 は Azure RBAC 権限を持たず、Group4 はロール割り当て許可のない Microsoft 365 グループ（securityEnabled=false）のため Azure RBAC に割り当てられません。',
        explanationEn: 'Admin4 lacks Azure RBAC permissions, and Group4 (non-role-assignable M365 group) is not security-enabled.',
      },
      {
        id: 'F',
        textJa: 'ユーザー：Admin2、Admin3、Admin4 のみ／グループ：Group1、Group2、Group3、Group4',
        textEn: 'Users: Admin2, Admin3, Admin4 only / Groups: Group1, Group2, Group3, Group4',
        isCorrect: false,
        explanationJa: '【不正解】Admin3・Admin4 は割り当て権限を持たず、Group4 も Azure ロール割り当ての対象外です。',
        explanationEn: 'Admin3 and Admin4 lack role-assignment permissions, and Group4 is ineligible for Azure RBAC.',
      },
    ],
    overallExplanationJa: `Azure リソースの PIM ロール割り当てを行うには対象スコープで Azure RBAC のアクセス管理権限（User Access Administrator 等）を持つ必要があり、\`Admin2\` のみが該当します。また Azure RBAC で割り当て可能なグループは \`securityEnabled = true\` のグループであるため、セキュリティ グループの \`Group1\`・\`Group2\` に加え、ロール割り当て可能として作成された M365 グループ \`Group3\` も対象になります（\`Group4\` は対象外）。`,
    overallExplanationEn: `Only \`Admin2\` holds User Access Administrator on Sub1/RG1 to create Azure PIM assignments. Azure RBAC supports any group with \`securityEnabled=true\`, which includes Security groups (\`Group1\`, \`Group2\`) and role-assignable M365 groups (\`Group3\`), but excludes \`Group4\`.`,
    keyPointsJa: [
      'Azure RBAC の PIM 割り当てには User Access Administrator（Admin2）が必要',
      'Entra ロール割り当て可否（isAssignableToRole）と異なり、Azure RBAC にはすべてのセキュリティ グループ（Group1, Group2）とセキュリティ有効な M365 グループ（Group3）を割り当て可能',
    ],
    keyPointsEn: [
      'Admin2 holds User Access Administrator for RG1',
      'Group1, Group2, and Group3 all have securityEnabled=true for Azure RBAC assignment',
    ],
    referenceTopic: 'Azure リソース PIM とグループ割り当て要件',
  },
  {
    id: 'pdf-q117',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'ケーススタディ (Contoso): Microsoft Entra Kerberos 認証対応ストレージの選択',
    titleEn: 'Case Study (Contoso): Storage Accounts Supporting Microsoft Entra Kerberos Authentication',
    scenarioJa: `${CONTOSO_CASE_STUDY_JA}

ストレージに関する計画済みの変更を実装できるストレージ アカウントを特定する必要があります。`,
    scenarioEn: `${CONTOSO_CASE_STUDY_EN}

You need to determine which storage accounts support implementing the planned storage change.`,
    questionJa: 'ストレージに関する計画済みの変更を実装できるストレージ アカウントはどれですか。1つ選んでください。',
    questionEn: 'Which storage accounts can implement the planned change for storage?',
    options: [
      {
        id: 'A',
        textJa: 'storage1、storage2、storage3、および storage4',
        textEn: 'storage1, storage2, storage3, and storage4',
        isCorrect: false,
        explanationJa: '【不正解】storage2（Block blobs）および storage4（Page blobs）は Azure Files の SMB ファイル共有を提供しないため対象外です。',
        explanationEn: 'storage2 (Block blobs) and storage4 (Page blobs) do not host Azure Files SMB shares.',
      },
      {
        id: 'B',
        textJa: 'storage1、storage2、および storage4 のみ',
        textEn: 'storage1, storage2, and storage4 only',
        isCorrect: false,
        explanationJa: '【不正解】BLOB 専用の storage2・storage4 は対象外であり、ファイル共有用の storage3 が抜けています。',
        explanationEn: 'storage2 and storage4 are not for File shares, while storage3 is omitted.',
      },
      {
        id: 'C',
        textJa: 'storage2 および storage4 のみ',
        textEn: 'storage2 and storage4 only',
        isCorrect: false,
        explanationJa: '【不正解】どちらも BLOB 専用のアカウントであり、Azure Files の Microsoft Entra Kerberos 認証には対応していません。',
        explanationEn: 'Both storage2 and storage4 are blob-only accounts.',
      },
      {
        id: 'D',
        textJa: 'storage1 および storage3 のみ',
        textEn: 'storage1 and storage3 only',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Entra Kerberos 認証は Azure Files の SMB ファイル共有向け機能です。汎用 Standard の storage1 と Premium File shares の storage3 のみがファイル共有をサポートし対象となります。',
        explanationEn: 'Microsoft Entra Kerberos applies to Azure Files SMB shares, which are supported by Standard general-purpose storage1 and Premium File shares storage3.',
      },
      {
        id: 'E',
        textJa: 'storage2、storage3、および storage4 のみ',
        textEn: 'storage2, storage3, and storage4 only',
        isCorrect: false,
        explanationJa: '【不正解】Premium アカウントのうち対応するのは File shares の storage3 のみであり、Standard の storage1 も対応します。',
        explanationEn: 'Among Premium accounts only storage3 (File shares) qualifies, and Standard storage1 also qualifies.',
      },
      {
        id: 'F',
        textJa: 'storage1 のみ',
        textEn: 'storage1 only',
        isCorrect: false,
        explanationJa: '【不正解】Premium File shares 用アカウントである storage3 も Azure Files の Microsoft Entra Kerberos 認証に対応しています。',
        explanationEn: 'storage3 (Premium File shares) also supports Microsoft Entra Kerberos authentication.',
      },
    ],
    overallExplanationJa: `Microsoft Entra Kerberos 認証は Azure Files（SMB ファイル共有）の認証機能です。Standard 汎用アカウントの \`storage1\` と、Premium File shares アカウントの \`storage3\` が Azure Files を提供するため、この 2 つが対象になります（Block blobs の storage2 と Page blobs の storage4 は対象外）。`,
    overallExplanationEn: `Microsoft Entra Kerberos authentication is specific to Azure Files SMB shares. Standard \`storage1\` and Premium File shares \`storage3\` support Azure Files, whereas blob-only \`storage2\` and \`storage4\` do not.`,
    keyPointsJa: [
      'Microsoft Entra Kerberos は Azure Files (SMB) 向け機能',
      'Standard 汎用 (storage1) と Premium File shares (storage3) が対応対象',
    ],
    keyPointsEn: [
      'Microsoft Entra Kerberos supports Azure Files on Standard general-purpose and Premium File shares accounts',
    ],
    referenceTopic: 'Azure Files の Microsoft Entra Kerberos 認証',
  },
  {
    id: 'pdf-q118',
    domain: 'Purview & コンプライアンス監査',
    difficulty: '応用 (Hard)',
    titleJa: 'ケーススタディ (Contoso): Azure SQL サーバー監査ログの保存先ストレージ選定',
    titleEn: 'Case Study (Contoso): Selecting Compatible Storage for Azure SQL Auditing via Azure Portal',
    scenarioJa: `${CONTOSO_CASE_STUDY_JA}

sql1 に対する計画された変更を実装する必要があります。`,
    scenarioEn: `${CONTOSO_CASE_STUDY_EN}

You need to implement the planned change for sql1.`,
    questionJa: '使用できるストレージ アカウントの組み合わせを1つ選んでください。',
    questionEn: 'Which storage accounts can be used?',
    options: [
      {
        id: 'A',
        textJa: 'storage1 のみ',
        textEn: 'storage1 only',
        isCorrect: true,
        explanationJa: '【正解】Azure portal から sql1（West US）の監査ログ保存先ストレージを指定する場合、同一リージョン（West US）かつ追加 BLOB（Append Blob）対応アカウントが必要になります。storage1 のみが West US かつ Standard で条件を満たします。',
        explanationEn: 'Configuring Azure SQL auditing in the Azure portal requires a storage account in the same region as sql1 (West US) that supports Append Blobs, which only storage1 satisfies.',
      },
      {
        id: 'B',
        textJa: 'storage3 のみ',
        textEn: 'storage3 only',
        isCorrect: false,
        explanationJa: '【不正解】storage3 は File shares 専用であり SQL 監査ログの保存先にならず、リージョンも East US で sql1 と異なります。',
        explanationEn: 'storage3 is File shares only and is located in East US rather than West US.',
      },
      {
        id: 'C',
        textJa: 'storage1 と storage3 のみ',
        textEn: 'storage1 and storage3 only',
        isCorrect: false,
        explanationJa: '【不正解】storage3 は File shares 用であり、また East US にあるため SQL 監査の保存先に使用できません。',
        explanationEn: 'storage3 cannot store Azure SQL audit logs and is in East US.',
      },
      {
        id: 'D',
        textJa: 'storage2、storage3、storage4 のみ',
        textEn: 'storage2, storage3, and storage4 only',
        isCorrect: false,
        explanationJa: '【不正解】storage2・3・4 はすべて East US にあり（sql1 は West US）、storage3・4 はアカウント種類も SQL 監査非対応です。',
        explanationEn: 'All three are in East US (sql1 is in West US), and storage3/storage4 do not support SQL auditing.',
      },
      {
        id: 'E',
        textJa: 'storage1、storage2、storage3、storage4',
        textEn: 'storage1, storage2, storage3, and storage4',
        isCorrect: false,
        explanationJa: '【不正解】Azure portal 経由では同一リージョン制約があり、また File shares / Page blobs 専用アカウントは非対応です。',
        explanationEn: 'Only storage1 matches both the region (West US) and supported storage type.',
      },
    ],
    overallExplanationJa: `Azure SQL Database の監査を Azure portal でストレージ アカウントに保存する場合、SQL 論理サーバーと同じリージョン（\`sql1\` は West US）にある Standard（または Premium BlockBlobStorage）アカウントを選択します。よって West US の \`storage1\` のみが使用可能です。`,
    overallExplanationEn: `When configuring Azure SQL auditing to Storage via the Azure portal, the storage account must support audit logs (Standard or Premium BlockBlobStorage) and reside in the same region as \`sql1\` (West US), leaving only \`storage1\`.`,
    keyPointsJa: [
      'Azure portal からの SQL 監査ストレージ設定には同一リージョンが必要',
      'File shares (storage3) や Page blobs (storage4) は監査ログの保存先に非対応',
    ],
    keyPointsEn: [
      'Azure portal requires the SQL audit storage account to be in the same region as the SQL server (West US)',
    ],
    referenceTopic: 'Azure SQL Database 監査ログの保存先ストレージ要件',
  },
  {
    id: 'pdf-q119',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'ケーススタディ (Contoso): Analytics 層テーブルの最大保持期間',
    titleEn: 'Case Study (Contoso): Maximum Analytics Retention for DnsEvents Without Changing Tier',
    scenarioJa: `${CONTOSO_CASE_STUDY_JA}

技術要件を満たすように Microsoft Sentinel を構成する必要があります。`,
    scenarioEn: `${CONTOSO_CASE_STUDY_EN}

You need to configure Microsoft Sentinel to meet the technical requirements.`,
    questionJa: 'DnsEvents の分析の保持期間 (Analytics retention) に設定する値はどれですか。1つ選んでください。',
    questionEn: 'What value should you configure for Analytics retention on DnsEvents?',
    options: [
      {
        id: 'A',
        textJa: '2 years',
        textEn: '2 years',
        isCorrect: true,
        explanationJa: '【正解】Analytics プランのテーブルにおける分析の保持期間（Analytics retention / retentionInDays）の上限は 730 日（2 年）です。層を変更せずにサポートされる最長期間に設定します。',
        explanationEn: 'Analytics retention on an Analytics-tier table supports a maximum of 730 days (2 years) without changing tiers.',
      },
      {
        id: 'B',
        textJa: '12 years',
        textEn: '12 years',
        isCorrect: false,
        explanationJa: '【不正解】12 年はアーカイブを含む総保持期間（Total retention）の上限であり、Analytics retention の設定上限（2 年 / 730 日）を超えています。',
        explanationEn: '12 years is the maximum for Total retention (including archive), not Analytics retention.',
      },
      {
        id: 'C',
        textJa: '180 days',
        textEn: '180 days',
        isCorrect: false,
        explanationJa: '【不正解】180 日は設定可能ですが、サポートされる最長期間（2 年）という技術要件を満たしません。',
        explanationEn: '180 days is shorter than the maximum supported Analytics retention of 2 years.',
      },
      {
        id: 'D',
        textJa: '1 year',
        textEn: '1 year',
        isCorrect: false,
        explanationJa: '【不正解】1 年は設定可能ですが、最長期間である 2 年（730 日）には達していません。',
        explanationEn: '1 year is less than the maximum 2-year Analytics retention limit.',
      },
      {
        id: 'E',
        textJa: '6 years',
        textEn: '6 years',
        isCorrect: false,
        explanationJa: '【不正解】6 年は Analytics 保持期間の上限（2 年）を超えているため設定できません。',
        explanationEn: '6 years exceeds the 2-year limit for Analytics retention.',
      },
    ],
    overallExplanationJa: `Log Analytics / Microsoft Sentinel の Analytics テーブルでは、対話的に検索・分析できる「分析の保持期間 (Analytics retention)」は最大 730 日（2 years）、アーカイブを含めた「総保持期間 (Total retention)」は最大 12 年です。`,
    overallExplanationEn: `For Analytics-tier tables in Microsoft Sentinel, interactive Analytics retention caps at 730 days (2 years), while Total retention (including archive) caps at 12 years.`,
    keyPointsJa: [
      'Analytics retention（対話型保持期間）の上限は 2 年（730 日）',
      '12 年は総保持期間（Total retention）の上限であり区別が必要',
    ],
    keyPointsEn: [
      'Maximum Analytics retention is 2 years (730 days); 12 years applies to Total retention',
    ],
    referenceTopic: 'Microsoft Sentinel テーブル保持期間の上限',
  },
  {
    id: 'pdf-q120',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ケーススタディ (Contoso): Key Vault による 30 日ごとの自動再生成対応オブジェクト',
    titleEn: 'Case Study (Contoso): Vault1 Object Supporting Automatic 30-Day Regeneration',
    scenarioJa: `${CONTOSO_CASE_STUDY_JA}

Vault1 の技術要件を満たす必要があります。`,
    scenarioEn: `${CONTOSO_CASE_STUDY_EN}

You need to meet the technical requirements for Vault1.`,
    questionJa: '使用できるオブジェクトを1つ選んでください。',
    questionEn: 'Which object can you use?',
    options: [
      {
        id: 'A',
        textJa: 'Certificate2',
        textEn: 'Certificate2',
        isCorrect: false,
        explanationJa: '【不正解】証明書の自動更新は CA との連携や有効期限に基づく更新であり、Key Vault 自身が作成から 30 日ごとに自動ローテーション（新しい値を再生成）する仕組みとは異なります。',
        explanationEn: 'Certificates renew based on issuer policies and expiration rather than Key Vault’s 30-day key rotation policy.',
      },
      {
        id: 'B',
        textJa: 'Key1',
        textEn: 'Key1',
        isCorrect: true,
        explanationJa: '【正解】暗号キー (Key1) は暗号化や署名に使う鍵情報で、Key Vault のローテーション ポリシー (rotationPolicy) で作成後 30 日（P30D）を指定することで、Key Vault 自身が 30 日ごとに新しいキー バージョンを自動再生成できます。',
        explanationEn: 'Key Vault keys (Key1) support native rotation policies (lifetimeActions with P30D after creation) so Key Vault automatically regenerates new versions every 30 days.',
      },
      {
        id: 'C',
        textJa: 'Certificate1',
        textEn: 'Certificate1',
        isCorrect: false,
        explanationJa: '【不正解】証明書オブジェクトは Key Vault キー用のローテーション ポリシーによる 30 日ごとの自動生成対象ではありません。',
        explanationEn: 'Certificates do not use Key Vault key rotation policies to regenerate every 30 days.',
      },
      {
        id: 'D',
        textJa: 'Secret1',
        textEn: 'Secret1',
        isCorrect: false,
        explanationJa: '【不正解】シークレットは外部の資格情報等を保持するだけであり、Key Vault 単体で 30 日ごとに新しい値を自動生成する機能はありません（Azure Functions 等との連携が必要）。',
        explanationEn: 'Key Vault does not natively generate new secret values on its own; secret rotation requires external automation.',
      },
    ],
    overallExplanationJa: `Key Vault 自身が値を 30 日ごとに自動再生成できるオブジェクトは**暗号キー (Key1)** です。キーのローテーション ポリシー（\`timeAfterCreate: P30D\`）により、Key Vault 内で新しいキー バージョンを周期生成できます（なお、現在の \`Key1\` は \`Disabled\` 状態のため、利用時は有効化または有効バージョンの利用構成を行います）。`,
    overallExplanationEn: `Among Key Vault objects, **Keys (Key1)** natively support Key Vault-managed rotation policies (such as \`P30D\` after creation) to regenerate versions every 30 days without external automation.`,
    keyPointsJa: [
      'Key Vault 単体で 30 日周期の自動再生成を行えるのは Key（rotationPolicy）',
      'Secret は外部処理が必要であり、Certificate は CA ポリシーに基づく更新となる',
    ],
    keyPointsEn: [
      'Only Keys natively regenerate via Key Vault rotation policies every 30 days',
    ],
    referenceTopic: 'Azure Key Vault キーの自動ローテーション',
  },
];
