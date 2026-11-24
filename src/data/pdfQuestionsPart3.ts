import {
  FABRIKAM_CASE_STUDY_EN,
  FABRIKAM_CASE_STUDY_JA,
  PdfQuestionSeed,
} from './pdfCaseStudies';

export const PDF_QUESTIONS_PART3: PdfQuestionSeed[] = [
  {
    id: 'pdf-q41',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'AKS クラスターでの特権ポッド受け入れ拒否 (Azure Policy)',
    titleEn: 'Blocking Privileged Pods in AKS Using Azure Policy',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションを所有しています。このサブスクリプションには、cluster1 という名前の Azure Kubernetes Service (AKS) クラスターと、ACR1 という名前の Azure Container Registry が含まれています。Sub1 では Microsoft Defender for Containers が有効になっており、cluster1 ではランタイム保護が有効です。

開発者が昇格された特権を持つポッドをデプロイすると、cluster1 に作成されてしまいます。
昇格された特権を持つポッドが cluster1 に受け入れられないようにする必要があります。`,
    scenarioEn: `You have an Azure subscription named Sub1 containing an AKS cluster named cluster1 and an Azure Container Registry named ACR1. Microsoft Defender for Containers is enabled on Sub1, and runtime protection is enabled on cluster1.
Developers are deploying pods with elevated privileges to cluster1.
You need to prevent pods with elevated privileges from being admitted to cluster1.`,
    questionJa: '何をすべきか、1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'cluster1 用の Azure Policy を作成する。',
        textEn: 'Create an Azure Policy for cluster1.',
        isCorrect: true,
        explanationJa: '【正解】Azure Policy for Kubernetes アドオンを利用し、特権コンテナーを禁止するポリシーを Deny（拒否）効果で割り当てることで、デプロイ時のアドミッション制御で作成要求を拒否できます。',
        explanationEn: 'Assigning an Azure Policy for Kubernetes with a Deny effect blocks privileged container admission requests before the pod is scheduled.',
      },
      {
        id: 'B',
        textJa: 'cluster1 のエージェントレス検出を有効化する。',
        textEn: 'Enable Kubernetes agentless discovery.',
        isCorrect: false,
        explanationJa: '【不正解】エージェントレス検出はクラスター構成やリスクの可視化を行う機能であり、Pod 作成要求を拒否するアドミッション制御ではありません。',
        explanationEn: 'Agentless discovery provides visibility into cluster configuration and risks, not admission enforcement.',
      },
      {
        id: 'C',
        textJa: '特権コンテナーの実行時アラートを構成する。',
        textEn: 'Enable runtime container alert rules.',
        isCorrect: false,
        explanationJa: '【不正解】ランタイム アラートは Pod が受け入れられて実行された後の検知であり、受け入れ自体の防止にはなりません。',
        explanationEn: 'Runtime alerts detect activity after a privileged pod is already running rather than preventing admission.',
      },
      {
        id: 'D',
        textJa: 'ACR1 のイメージ脆弱性評価を有効にする。',
        textEn: 'Scan container images inside ACR1.',
        isCorrect: false,
        explanationJa: '【不正解】脆弱性評価はイメージ内のパッケージ等の CVE を検査するものであり、Pod の特権実行（securityContext.privileged）を制御できません。',
        explanationEn: 'Image vulnerability assessment scans packages for CVEs and does not restrict pod securityContext privileges.',
      },
    ],
    overallExplanationJa: `AKS のアドミッション制御には Azure Policy for Kubernetes（OPA Gatekeeper ベース）を使用します。ランタイム保護や脆弱性スキャンでは特権 Pod の受け入れ自体は止められないため、Deny 効果のポリシーでデプロイ前に遮断します。`,
    overallExplanationEn: `Use Azure Policy for Kubernetes with a Deny effect to block privileged pods during admission control rather than relying on post-deployment runtime alerts or image scans.`,
    keyPointsJa: [
      'Azure Policy for Kubernetes で Deny 効果を指定してアドミッション制御を実施',
      'securityContext.privileged: true の Pod デプロイを受け入れ段階で拒否',
      'ランタイム保護（事後検知）とアドミッション制御（事前強制）の区別',
    ],
    keyPointsEn: [
      'Azure Policy for Kubernetes enforces admission control via Deny effect',
      'Prevents privileged containers before scheduling',
      'Distinguish runtime detection from pre-deployment admission control',
    ],
    referenceTopic: 'Microsoft Defender for Containers & Azure Policy for Kubernetes',
  },
  {
    id: 'pdf-q42',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Bastion サブネット用 NSG の送受信ポート構成',
    titleEn: 'Configuring Inbound and Outbound Ports for AzureBastionSubnet NSG',
    scenarioJa: `Azure 仮想ネットワーク VNet1 には AzureBastionSubnet と Subnet1 が含まれています。Subnet1 には複数の仮想マシンがあります。
Subnet1 の仮想マシンへの安全な RDP アクセスを提供するために、Azure Bastion をデプロイする予定です。AzureBastionSubnet に NSG1 という名前の NSG を関連付けます。

NSG1 の規則を構成する必要があります。要件は次のとおりです。
・インターネットから Azure Bastion への必要な受信アクセスを許可する。
・Azure Bastion を使用した仮想マシンへのユーザー アクセスを許可する。

TCP ポートの候補：21、22、389、443、3389、8080`,
    scenarioEn: `You have an Azure virtual network named VNet1 containing AzureBastionSubnet and Subnet1. Subnet1 contains multiple virtual machines.
You plan to deploy Azure Bastion to provide secure RDP access to VMs in Subnet1 and associate an NSG named NSG1 with AzureBastionSubnet.
Requirements:
- Allow required inbound access from the internet to Azure Bastion.
- Allow user access to the virtual machines via Azure Bastion.
Candidate TCP ports: 21, 22, 389, 443, 3389, 8080.`,
    questionJa: 'NSG1 の規則で許可する、インターネットからの受信と Subnet1 への送信の TCP ポートの組み合わせとして正しいものを1つ選んでください。',
    questionEn: 'Which combination of inbound TCP port from the internet and outbound TCP port to Subnet1 should you allow in NSG1?',
    options: [
      {
        id: 'A',
        textJa: 'インターネットからの受信：443／Subnet1 への送信：22',
        textEn: 'Inbound from internet: 443 / Outbound to Subnet1: 22',
        isCorrect: false,
        explanationJa: '【不正解】TCP 22 は SSH 用です。本問では RDP アクセスを提供するため、送信ポートは 3389 である必要があります。',
        explanationEn: 'TCP 22 is for SSH; RDP access requires outbound TCP 3389.',
      },
      {
        id: 'B',
        textJa: 'インターネットからの受信：3389／Subnet1 への送信：3389',
        textEn: 'Inbound from internet: 3389 / Outbound to Subnet1: 3389',
        isCorrect: false,
        explanationJa: '【不正解】インターネットから Azure Bastion への接続は HTTPS (443) であり、3389 ではありません。',
        explanationEn: 'Users connect to Azure Bastion over HTTPS (TCP 443), not TCP 3389.',
      },
      {
        id: 'C',
        textJa: 'インターネットからの受信：443／Subnet1 への送信：443',
        textEn: 'Inbound from internet: 443 / Outbound to Subnet1: 443',
        isCorrect: false,
        explanationJa: '【不正解】Bastion から対象 VM への RDP 接続には TCP 3389 を使用します。',
        explanationEn: 'Bastion connects to target VMs for RDP on TCP 3389, not 443.',
      },
      {
        id: 'D',
        textJa: 'インターネットからの受信：443／Subnet1 への送信：3389',
        textEn: 'Inbound from internet: 443 / Outbound to Subnet1: 3389',
        isCorrect: true,
        explanationJa: '【正解】利用者はインターネットから HTTPS (TCP 443) で Bastion に接続し、Bastion は Subnet1 内の VM へ RDP (TCP 3389) で送信接続します。',
        explanationEn: 'Clients connect to Bastion over HTTPS (443), and Bastion connects to target VMs in Subnet1 over RDP (3389).',
      },
      {
        id: 'E',
        textJa: 'インターネットからの受信：22／Subnet1 への送信：22',
        textEn: 'Inbound from internet: 22 / Outbound to Subnet1: 22',
        isCorrect: false,
        explanationJa: '【不正解】Bastion の受信は HTTPS (443)、RDP の送信は 3389 です。',
        explanationEn: 'Bastion requires inbound 443 and outbound 3389 for RDP.',
      },
      {
        id: 'F',
        textJa: 'インターネットからの受信：3389／Subnet1 への送信：443',
        textEn: 'Inbound from internet: 3389 / Outbound to Subnet1: 443',
        isCorrect: false,
        explanationJa: '【不正解】送受信のポートの役割が逆になっています。',
        explanationEn: 'Inbound and outbound port roles are reversed.',
      },
    ],
    overallExplanationJa: `Azure Bastion では、ブラウザ/クライアントから Bastion への通信は HTTPS (TCP 443) のみを受信許可し、Bastion から仮想マシンへの通信は RDP (TCP 3389) または SSH (TCP 22) を送信許可します。`,
    overallExplanationEn: `Azure Bastion accepts inbound HTTPS (TCP 443) from users and initiates outbound RDP (TCP 3389) or SSH (TCP 22) connections to target VMs.`,
    keyPointsJa: [
      'インターネット → AzureBastionSubnet：TCP 443 (HTTPS)',
      'AzureBastionSubnet → 対象 VM サブネット：RDP は TCP 3389、SSH は TCP 22',
      'VM 側のパブリック IP や外部公開ポートが不要になる',
    ],
    keyPointsEn: [
      'Inbound from Internet to AzureBastionSubnet: TCP 443',
      'Outbound from AzureBastionSubnet to VM subnet: TCP 3389 (RDP) / TCP 22 (SSH)',
      'Eliminates direct internet exposure of VM RDP/SSH ports',
    ],
    referenceTopic: 'Azure Bastion NSG 要件',
  },
  {
    id: 'pdf-q43',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '高度 (Expert)',
    titleJa: 'Copilot Studio エージェントのツール呼び出しに対するリアルタイム保護構成',
    titleEn: 'Configuring Real-Time Protection for Copilot Studio Agent Tool Calls',
    scenarioJa: `Microsoft Defender XDR 環境と、作成者がカスタムの Microsoft Copilot Studio エージェントを公開している Microsoft Power Platform 環境があります。
エージェントがアクションを実行する前に疑わしいツールの呼び出しをブロックし、関連するアラートが Microsoft Defender ポータルに表示されるように、リアルタイム保護を有効にする必要があります。`,
    scenarioEn: `You have a Microsoft Defender XDR environment and a Microsoft Power Platform environment where makers publish custom Microsoft Copilot Studio agents.
You need to enable real-time protection so that suspicious tool invocations are blocked before the agent executes an action and related alerts appear in the Microsoft Defender portal.`,
    questionJa: 'Microsoft Defender XDR と Power Platform で実施する操作の正しい組み合わせを1つ選んでください。',
    questionEn: 'Which combination of actions should you perform in Microsoft Defender XDR and Power Platform?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender XDR：エージェント統合のための Microsoft Entra アプリケーション ID を構成する。／Power Platform：Copilot Studio エージェントのアクティビティに関するアラート ポリシーを構成する。',
        textEn: 'Microsoft Defender XDR: Configure Entra Application ID for agent integration / Power Platform: Configure an alert policy for Copilot Studio activity',
        isCorrect: false,
        explanationJa: '【不正解】外部脅威検出用の Entra アプリケーション ID は Power Platform 側で構成する項目です。',
        explanationEn: 'The Entra Application ID for external threat detection is configured on the Power Platform side.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Defender XDR：Copilot Studio コネクタのデータ ポリシーを作成する。／Power Platform：Copilot Studio コネクタのデータ ポリシーを作成する。',
        textEn: 'Microsoft Defender XDR: Create a Copilot Studio connector data policy / Power Platform: Create a Copilot Studio connector data policy',
        isCorrect: false,
        explanationJa: '【不正解】コネクタのデータ ポリシーは利用可能なコネクタの組み合わせを統制するものであり、実行前のリアルタイム脅威検査ではありません。',
        explanationEn: 'Connector data policies restrict connector combinations rather than providing real-time threat detection before tool execution.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Defender XDR：Copilot Studio コネクタの DLP ポリシーを作成する。／Power Platform：高度なハンティングを使用してエージェントのアクティビティを監視する。',
        textEn: 'Microsoft Defender XDR: Create a DLP policy for Copilot Studio connectors / Power Platform: Monitor agent activity using Advanced hunting',
        isCorrect: false,
        explanationJa: '【不正解】DLP や事後のハンティングではアクション実行前のリアルタイム ブロック連携を構成できません。',
        explanationEn: 'DLP and post-hoc Advanced hunting do not establish the pre-execution real-time protection integration.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender XDR：Microsoft 365 アプリ コネクタを接続する。／Power Platform：エージェント統合のための Microsoft Entra アプリケーション ID を構成する。',
        textEn: 'Microsoft Defender XDR: Connect the Microsoft 365 app connector / Power Platform: Configure the Microsoft Entra application ID for agent integration',
        isCorrect: true,
        explanationJa: '【正解】Defender ポータル側で Microsoft 365 アプリ コネクタ（および Copilot Studio 接続）を連携させ、Power Platform 側で外部脅威検出用の Microsoft Entra アプリケーション ID を指定することで、ツール実行前のリアルタイム検査とアラート表示が機能します。',
        explanationEn: 'Connecting the Microsoft 365 app connector in Defender XDR and configuring the Entra application ID for external threat detection in Power Platform enables pre-execution tool blocking and alerts.',
      },
      {
        id: 'E',
        textJa: 'Microsoft Defender XDR：高度なハンティングを使用してエージェントのアクティビティを監視する。／Power Platform：Microsoft 365 アプリ コネクタを接続する。',
        textEn: 'Microsoft Defender XDR: Monitor agent activity using Advanced hunting / Power Platform: Connect the Microsoft 365 app connector',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft 365 アプリ コネクタは Defender XDR 側で接続します。',
        explanationEn: 'The Microsoft 365 app connector is configured in Microsoft Defender XDR, not Power Platform.',
      },
      {
        id: 'F',
        textJa: 'Microsoft Defender XDR：Copilot Studio エージェントのアクティビティに関するアラート ポリシーを構成する。／Power Platform：Copilot Studio コネクタの DLP ポリシーを作成する。',
        textEn: 'Microsoft Defender XDR: Configure an alert policy / Power Platform: Create a DLP policy for Copilot Studio connectors',
        isCorrect: false,
        explanationJa: '【不正解】アラート ポリシーと DLP ポリシーだけではツール呼び出しの実行時脅威保護連携は有効になりません。',
        explanationEn: 'Alert and DLP policies alone do not enable real-time pre-execution threat inspection.',
      },
    ],
    overallExplanationJa: `Copilot Studio の実行時脅威保護（AI Agent Real-time Protection）では、Defender ポータルで Microsoft 365 アプリ コネクタを接続し、Power Platform 管理センターの外部脅威検出設定で Defender 統合用の Microsoft Entra アプリケーション ID を登録します。`,
    overallExplanationEn: `Real-time protection for Copilot Studio agents requires connecting the Microsoft 365 app connector in Defender XDR and registering the Entra Application ID for external threat detection in Power Platform.`,
    keyPointsJa: [
      'Defender XDR 側：Microsoft 365 アプリ コネクタ接続と保護ルール構成',
      'Power Platform 側：外部脅威検出連携用の Microsoft Entra アプリケーション ID を構成',
      '疑わしいツール呼び出しをアクション実行前に評価・ブロックし BehaviorInfo 等へ記録',
    ],
    keyPointsEn: [
      'Defender XDR: Connect Microsoft 365 app connector',
      'Power Platform: Configure Entra Application ID for external threat detection',
      'Evaluates and blocks suspicious tool calls before execution',
    ],
    referenceTopic: 'Microsoft Copilot Studio 実行時保護 & Defender XDR 連携',
  },
  {
    id: 'pdf-q44',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure OpenAI リソースに対する不審なアクセス・悪用の検出',
    titleEn: 'Detecting Suspicious Access and Abuse Against Azure OpenAI',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションに、Microsoft Foundry で使用する OpenAI1 という名前の Azure OpenAI リソースがあります。
OpenAI1 のモデルを呼び出すアプリは Azure App Service で実行され、応答の生成に使用するドキュメントは Azure Blob Storage に格納されています。

Microsoft Defender for Cloud を使用して、OpenAI1 に対する不審なアクセスや悪用を検出し、セキュリティ アラートを生成する必要があります。`,
    scenarioEn: `An Azure subscription named Sub1 contains an Azure OpenAI resource named OpenAI1 used with Microsoft Foundry. The app calling OpenAI1 runs on Azure App Service, and grounding documents are stored in Azure Blob Storage.
You need to use Microsoft Defender for Cloud to detect suspicious access or abuse targeting OpenAI1 and generate security alerts.`,
    questionJa: 'Microsoft Defender for Cloud のクラウド ワークロード保護 (Cloud Workload Protection) で有効にすべきプランを1つ選んでください。',
    questionEn: 'Which Cloud Workload Protection plan should you enable in Microsoft Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Servers',
        textEn: 'Microsoft Defender for Servers',
        isCorrect: false,
        explanationJa: '【不正解】VM や Azure Arc サーバーの OS・EDR 保護向けプランであり、Azure OpenAI リソースの脅威検出は行いません。',
        explanationEn: 'Defender for Servers protects VMs and Arc-enabled servers, not Azure OpenAI resources.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Defender CSPM',
        textEn: 'Microsoft Defender CSPM',
        isCorrect: false,
        explanationJa: '【不正解】Defender CSPM は構成不備や攻撃パス分析を行う態勢管理プランであり、実行時の悪用アラートを生成するワークロード保護プランではありません。',
        explanationEn: 'Defender CSPM handles posture and attack path analysis, not runtime workload threat alerts.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Defender for AI Services',
        textEn: 'Microsoft Defender for AI Services',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Defender for AI Services を有効にすることで、Azure OpenAI などの AI サービスに対する不審なプロンプト攻撃や資格情報悪用などを実行時に検出し、セキュリティ アラートを生成できます。',
        explanationEn: 'Defender for AI Services provides runtime threat detection and security alerts for Azure OpenAI and other AI workloads.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for App Service',
        textEn: 'Microsoft Defender for App Service',
        isCorrect: false,
        explanationJa: '【不正解】呼び出し元の Web アプリを保護するプランであり、OpenAI1 自体の悪用は検出できません。',
        explanationEn: 'Defender for App Service protects the Web App hosting the caller, not OpenAI1 itself.',
      },
      {
        id: 'E',
        textJa: 'Microsoft Defender for Storage',
        textEn: 'Microsoft Defender for Storage',
        isCorrect: false,
        explanationJa: '【不正解】ドキュメント保管先の Blob Storage を保護するプランであり、Azure OpenAI への脅威検出は対象外です。',
        explanationEn: 'Defender for Storage protects Blob Storage accounts, not Azure OpenAI endpoints.',
      },
    ],
    overallExplanationJa: `Azure OpenAI や Microsoft Foundry などの AI リソースに対する実行時の脅威検出・セキュリティ アラート生成には、ワークロード保護プランの「Microsoft Defender for AI Services」を有効にします。`,
    overallExplanationEn: `Enable Microsoft Defender for AI Services under Cloud Workload Protection to monitor Azure OpenAI resources for suspicious activity, prompt attacks, and abuse.`,
    keyPointsJa: [
      'AI ワークロードの実行時脅威検出＝Microsoft Defender for AI Services',
      'Defender CSPM（態勢管理）や周辺リソース向けプランと区別する',
    ],
    keyPointsEn: [
      'Runtime threat detection for Azure OpenAI requires Microsoft Defender for AI Services',
      'Separate from CSPM posture management or Storage/App Service plans',
    ],
    referenceTopic: 'Microsoft Defender for AI Services',
  },
  {
    id: 'pdf-q45',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: '対話型エージェントと自律型エージェントへの最小特権 Graph アクセス許可',
    titleEn: 'Assigning Least-Privilege Microsoft Graph Permissions to Interactive vs. Autonomous Agents',
    scenarioJa: `Microsoft 365 サブスクリプションがあり、すべてのユーザーは Exchange Online メールボックスを持っています。Microsoft Entra Agent ID を使用して AI エージェントを登録・管理しています。
開発者は次の2つのエージェントを作成します。
・Agent1：ユーザーが自分の Exchange Online メールを要約するのを支援する対話型エージェント
・Agent2：Microsoft Teams チャネルに毎晩の更新情報を送信する自律型エージェント

各エージェントに Microsoft Graph へのアクセスを許可し、動作モデルを満たしつつアクセス範囲を最小限に抑える必要があります。

アクセス許可の種類：アプリケーションのアクセス許可 / 委任されたアクセス許可 / Exchange Online のアクセス許可 / Teams のリソース固有の同意 (RSC) のアクセス許可`,
    scenarioEn: `You have a Microsoft 365 subscription where all users have Exchange Online mailboxes, and you manage AI agents with Microsoft Entra Agent ID.
Developers are creating two agents:
- Agent1: An interactive agent that helps a user summarize their own Exchange Online emails.
- Agent2: An autonomous agent that sends nightly updates to a Microsoft Teams channel.

You need to grant Microsoft Graph access to each agent using least privilege.
Permission types: Application permissions, Delegated permissions, Exchange Online permissions, Teams Resource-specific consent (RSC) permissions.`,
    questionJa: 'Agent1 と Agent2 にそれぞれ割り当てるアクセス許可の種類として正しい組み合わせを1つ選んでください。',
    questionEn: 'Which permission type combination should you assign to Agent1 and Agent2?',
    options: [
      {
        id: 'A',
        textJa: 'Agent1：Exchange Online のアクセス許可／Agent2：委任されたアクセス許可',
        textEn: 'Agent1: Exchange Online permissions / Agent2: Delegated permissions',
        isCorrect: false,
        explanationJa: '【不正解】Graph API をユーザー代理で呼ぶには委任されたアクセス許可が必要です。また自律型に委任された許可は使えません。',
        explanationEn: 'Interactive user-scoped Graph calls require Delegated permissions, whereas autonomous agents cannot rely on interactive delegated sessions.',
      },
      {
        id: 'B',
        textJa: 'Agent1：委任されたアクセス許可／Agent2：アプリケーションのアクセス許可',
        textEn: 'Agent1: Delegated permissions / Agent2: Application permissions',
        isCorrect: false,
        explanationJa: '【不正解】Agent2 は特定の Teams チャネルのみに投稿するため、テナント全体のチームにアクセスできる汎用的なアプリケーション権限よりも、対象チームに限定できる RSC 権限の方が最小特権に適しています。',
        explanationEn: 'Generic Application permissions grant tenant-wide scope, whereas Teams RSC restricts access strictly to the target team/channel.',
      },
      {
        id: 'C',
        textJa: 'Agent1：Teams のリソース固有の同意 (RSC) のアクセス許可／Agent2：Exchange Online のアクセス許可',
        textEn: 'Agent1: Teams RSC permissions / Agent2: Exchange Online permissions',
        isCorrect: false,
        explanationJa: '【不正解】対象サービスと権限の割り当てが逆かつ不適切です。',
        explanationEn: 'The permission types do not match the services or execution models of either agent.',
      },
      {
        id: 'D',
        textJa: 'Agent1：アプリケーションのアクセス許可／Agent2：Teams のリソース固有の同意 (RSC) のアクセス許可',
        textEn: 'Agent1: Application permissions / Agent2: Teams RSC permissions',
        isCorrect: false,
        explanationJa: '【不正解】対話型である Agent1 にアプリケーション権限を与えると全ユーザーのメールへアクセス可能になり過剰です。',
        explanationEn: 'Granting Application permissions to interactive Agent1 unnecessarily exposes all users’ mailboxes.',
      },
      {
        id: 'E',
        textJa: 'Agent1：委任されたアクセス許可／Agent2：Teams のリソース固有の同意 (RSC) のアクセス許可',
        textEn: 'Agent1: Delegated permissions / Agent2: Teams RSC permissions',
        isCorrect: true,
        explanationJa: '【正解】Agent1 はサインイン中ユーザーの代理として自分のメールのみを読むため「委任されたアクセス許可」が最適です。Agent2 はユーザー不在で毎晩特定チームに投稿する自律型のため、対象チームに権限を限定できる「Teams の RSC アクセス許可」が最小特権になります。',
        explanationEn: 'Agent1 uses Delegated permissions to act strictly within the signed-in user’s mailbox; Agent2 uses Teams RSC permissions to scope autonomous channel posting strictly to the consented team.',
      },
      {
        id: 'F',
        textJa: 'Agent1：アプリケーションのアクセス許可／Agent2：アプリケーションのアクセス許可',
        textEn: 'Agent1: Application permissions / Agent2: Application permissions',
        isCorrect: false,
        explanationJa: '【不正解】どちらも過剰なテナント全体の権限になってしまいます。',
        explanationEn: 'Both assignments grant unnecessarily broad tenant-wide access.',
      },
    ],
    overallExplanationJa: `対話型エージェントはユーザー権限の範囲内で動く「委任されたアクセス許可」を、特定の Teams チャネルのみで動作する自律型エージェントは対象チームにスコープを限定できる「Teams RSC アクセス許可」を選ぶことで最小特権を実現します。`,
    overallExplanationEn: `Interactive user-bound agents should use Delegated permissions, while autonomous agents targeting specific Teams channels should use Teams Resource-Specific Consent (RSC) rather than tenant-wide Application permissions.`,
    keyPointsJa: [
      'ユーザー対話型（本人のメール要約）→ 委任されたアクセス許可 (Delegated)',
      '自律型で特定チームへの投稿 → Teams リソース固有の同意 (RSC)',
      '汎用アプリケーション権限よりも対象リソース限定型の同意を優先',
    ],
    keyPointsEn: [
      'Interactive user-scoped access -> Delegated permissions',
      'Autonomous scoped Teams access -> Teams RSC permissions',
      'Prefer resource-scoped RSC over tenant-wide Application permissions',
    ],
    referenceTopic: 'Entra Agent ID & Microsoft Graph 最小特権モデル',
  },
  {
    id: 'pdf-q46',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: '自律エージェントによる Graph と Key Vault へのユーザー操作なしアクセス',
    titleEn: 'Granting Autonomous Agent Access to Microsoft Graph and Azure Key Vault',
    scenarioJa: `Microsoft Entra Agent ID を使用してエージェント ID を管理しています。
Agent1 という名前の自律エージェントは、サインインしているユーザーなしで実行され、Microsoft Graph にアクセスし、1つの Azure Key Vault からシークレットを読み取る必要があります。
実行時にユーザーの操作や同意を必要とせずに、Agent1 に両方のアクセス権を付与する必要があります。

操作候補：委任されたアクセス許可を付与する / 委任されたアクセス許可を要求する / アプリケーションのアクセス許可を付与する / RBAC ロールを割り当てる`,
    scenarioEn: `You manage agent identities using Microsoft Entra Agent ID. An autonomous agent named Agent1 runs without a signed-in user and needs to access Microsoft Graph and read secrets from an Azure Key Vault.
You must grant Agent1 access without requiring user interaction or consent at runtime.`,
    questionJa: 'エージェント ID に対して、Microsoft Graph と Key Vault にはそれぞれどの操作を行うべきですか。',
    questionEn: 'Which actions should you perform for Microsoft Graph and Azure Key Vault?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Graph：委任されたアクセス許可を要求する。Key Vault：委任されたアクセス許可を付与する。',
        textEn: 'Microsoft Graph: Request delegated permissions / Key Vault: Grant delegated API permissions to it',
        isCorrect: false,
        explanationJa: '【不正解】ユーザー不在で動作する自律エージェントは委任されたアクセス許可を使用できません。また Key Vault のデータアクセスは Azure RBAC で制御します。',
        explanationEn: 'Autonomous agents without a signed-in user cannot use delegated permissions, and Key Vault uses Azure RBAC.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Graph：委任されたアクセス許可を付与する。Key Vault：アプリケーションのアクセス許可を付与する。',
        textEn: 'Microsoft Graph: Grant delegated permissions / Key Vault: Grant application permissions for reading',
        isCorrect: false,
        explanationJa: '【不正解】Graph 側はアプリケーション権限、Key Vault 側は RBAC ロール割り当てが必要です。',
        explanationEn: 'Graph needs Application permissions, and Key Vault uses RBAC role assignments.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Graph：アプリケーションのアクセス許可を付与する。Key Vault：ロールベースのアクセス制御 (RBAC) ロールを割り当てる。',
        textEn: 'Microsoft Graph: Grant application permissions / Key Vault: Assign a role-based access control (RBAC) role',
        isCorrect: true,
        explanationJa: '【正解】サインイン ユーザーなしで動作するため Microsoft Graph にはアプリケーションのアクセス許可（管理者同意済み）を付与し、Azure Key Vault には対象コンテナーをスコープとして Key Vault Secrets User などの RBAC ロールを割り当てます。',
        explanationEn: 'Grant admin-consented Microsoft Graph Application permissions for userless execution, and assign an Azure RBAC data-plane role (such as Key Vault Secrets User) on the Key Vault.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Graph：Azure ロールベースのアクセス制御 (RBAC) ロールを割り当てる。Key Vault：委任されたアクセス許可を要求する。',
        textEn: 'Microsoft Graph: Assign an Azure RBAC role / Key Vault: Request delegated permissions for reading',
        isCorrect: false,
        explanationJa: '【不正解】Azure RBAC は Microsoft Graph API 権限を付与するものではありません。',
        explanationEn: 'Azure RBAC applies to Azure resources, not Microsoft Graph API permissions.',
      },
    ],
    overallExplanationJa: `ユーザーなしで自律実行されるエージェントでは、Microsoft Graph などの API には事前同意された「アプリケーションのアクセス許可」を付与し、Azure リソース（Key Vault など）のデータ操作には「Azure RBAC ロール」を割り当てます。`,
    overallExplanationEn: `Autonomous agents without a signed-in user require admin-consented Application permissions for Microsoft Graph and Azure RBAC roles for Azure Key Vault.`,
    keyPointsJa: [
      'ユーザーなしの API 呼び出し (Graph) → アプリケーションのアクセス許可 + 管理者同意',
      'Azure Key Vault のシークレット読み取り → Azure RBAC ロール (Key Vault Secrets User 等)',
    ],
    keyPointsEn: [
      'Userless Microsoft Graph calls -> Application permissions with admin consent',
      'Azure Key Vault secret read -> Azure RBAC role assignment',
    ],
    referenceTopic: '自律エージェントの API 権限と Azure RBAC 認可',
  },
  {
    id: 'pdf-q47',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'App Service 組み込み認証でのユーザー/グループ単位アクセス制限',
    titleEn: 'Restricting App Service Built-in Authentication to Assigned Entra Users and Groups',
    scenarioJa: `App1、App2、App3 という名前の、インターネットに公開された Azure App Service Web アプリが3つあり、それぞれ組み込み認証（Easy Auth）を使用しています。App2 はバックエンド API をホストしています。
現在、API を使用できないはずの一部の企業ユーザーも App2 にサインインできてしまいます。
App2 へのアクセスを、割り当てられた Microsoft Entra のユーザーとグループに制限する必要があります。

構成候補：
・エンタープライズ アプリの割り当てが必要（Enterprise app assignment required）
・IP アクセス制限
・ローカル認証
・Microsoft ID プロバイダー（The Microsoft identity provider）
・RBAC の割り当て
・テナント全体の管理者の同意`,
    scenarioEn: `You have three internet-facing Azure App Service web apps (App1, App2, App3) using built-in authentication. App2 hosts a backend API, and unauthorized corporate users can currently sign in to it.
You need to restrict access to App2 strictly to assigned Microsoft Entra users and groups.
Candidates: Enterprise app assignment required, IP access restrictions, Local authentication, The Microsoft identity provider, An RBAC assignment, Tenant-wide admin consent.`,
    questionJa: 'App2 に構成すべき認証方法とアクセス制御方法の組み合わせはどれですか。',
    questionEn: 'Which authentication method and access control method should you configure for App2?',
    options: [
      {
        id: 'A',
        textJa: '認証方法：テナント全体の管理者の同意／アクセス制御方法：RBAC の割り当て',
        textEn: 'Authentication: Tenant-wide admin consent / Access control: RBAC assignment',
        isCorrect: false,
        explanationJa: '【不正解】管理者の同意は API アクセス許可の承認であり認証プロバイダーではありません。また Azure RBAC はアプリ実行時のサインイン制限ではなくリソース管理権限です。',
        explanationEn: 'Admin consent approves API permissions, and Azure RBAC governs Azure resource management rather than app sign-ins.',
      },
      {
        id: 'B',
        textJa: '認証方法：テナント全体の管理者の同意／アクセス制御方法：IP アクセス制限',
        textEn: 'Authentication: Tenant-wide admin consent / Access control: IP access restrictions',
        isCorrect: false,
        explanationJa: '【不正解】IP 制限では同一企業ネットワーク内のユーザーを Entra ユーザー/グループ単位で区別できません。',
        explanationEn: 'IP restrictions cannot differentiate users within the same corporate network.',
      },
      {
        id: 'C',
        textJa: '認証方法：Microsoft ID プロバイダー／アクセス制御方法：RBAC の割り当て',
        textEn: 'Authentication: Microsoft identity provider / Access control: RBAC assignment',
        isCorrect: false,
        explanationJa: '【不正解】Web アプリのエンドユーザー サインインを制限するには、Azure RBAC ではなくエンタープライズ アプリの「割り当てが必要」設定を使用します。',
        explanationEn: 'Azure RBAC does not govern user sign-in to the App Service web endpoint.',
      },
      {
        id: 'D',
        textJa: '認証方法：ローカル認証／アクセス制御方法：IP アクセス制限',
        textEn: 'Authentication: Local authentication / Access control: IP access restrictions',
        isCorrect: false,
        explanationJa: '【不正解】Entra のユーザー・グループ割り当てと連携できません。',
        explanationEn: 'Local authentication does not enforce Microsoft Entra user or group assignments.',
      },
      {
        id: 'E',
        textJa: '認証方法：ローカル認証／アクセス制御方法：エンタープライズ アプリの割り当てが必要',
        textEn: 'Authentication: Local authentication / Access control: Enterprise app assignment required',
        isCorrect: false,
        explanationJa: '【不正解】エンタープライズ アプリの割り当て制御を有効にするには、認証方法として Microsoft ID プロバイダーを構成する必要があります。',
        explanationEn: 'Enterprise app assignment enforcement requires the Microsoft identity provider.',
      },
      {
        id: 'F',
        textJa: '認証方法：Microsoft ID プロバイダー／アクセス制御方法：エンタープライズ アプリの割り当てが必要',
        textEn: 'Authentication: Microsoft identity provider / Access control: Enterprise app assignment required',
        isCorrect: true,
        explanationJa: '【正解】App2 の組み込み認証に「Microsoft ID プロバイダー」を設定し、対応する Entra エンタープライズ アプリケーションで「割り当てが必要（Assignment required）」を有効にして許可するユーザー・グループを割り当てます。',
        explanationEn: 'Configure the Microsoft identity provider in App Service Authentication and set Assignment required = Yes on the corresponding Enterprise Application.',
      },
    ],
    overallExplanationJa: `App Service の組み込み認証で Microsoft ID プロバイダーを有効にしただけではテナント内の全ユーザーがサインイン可能です。利用者を特定グループに絞るには、対応する Enterprise Application で「割り当てが必要」を「はい」に設定します。`,
    overallExplanationEn: `By default, built-in Microsoft Entra authentication allows any tenant user to sign in; enabling "Assignment required" on the Enterprise Application restricts access to explicitly assigned users and groups.`,
    keyPointsJa: [
      'App Service 組み込み認証で「Microsoft ID プロバイダー」を有効化',
      'Entra エンタープライズ アプリで「割り当てが必要 = はい」を設定',
      'Azure RBAC（リソース管理）とアプリ サインイン制限の区別',
    ],
    keyPointsEn: [
      'Enable Microsoft identity provider in App Service Authentication',
      'Set Assignment required = Yes in Entra Enterprise Applications',
      'Distinct from Azure RBAC management permissions',
    ],
    referenceTopic: 'Azure App Service 組み込み認証 & エンタープライズ アプリ割り当て',
  },
  {
    id: 'pdf-q48',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Container Instances コンテナー グループの公開ポート制限と内部通信',
    titleEn: 'Securing Multi-Container ACI Groups via Exposed Port Filtering and Localhost',
    scenarioJa: `Azure Container Instances のコンテナー グループ CG1 があり、DNS 名は cg1.contoso.com です。CG1 の構成は次のとおりです。
・HTTPS (TCP 443) を提供し、App1 をホストする Linux コンテナー container1
・TCP ポート 5000 で待ち受け、App1 からのみアクセスされる Linux コンテナー contained
・パブリック IP アドレス

セキュリティ レビューにより、外部クライアントが CG1 のパブリック IP を使って TCP ポート 5000 に直接到達できることが判明しました。
・外部クライアントが TCP ポート 443 のみを使用して container1 にアクセスできるようにする。
・container1 が引き続き contained にアクセスできるようにする。`,
    scenarioEn: `You have an Azure Container Instances container group named CG1 with DNS name cg1.contoso.com and a public IP address:
- Linux container container1: hosts App1 over HTTPS (TCP 443)
- Linux container contained: listens on TCP port 5000 and is only accessed by App1

A security review finds that external clients can reach TCP port 5000 via CG1's public IP.
You need to ensure external clients can only reach container1 over TCP 443 while container1 can still access contained.`,
    questionJa: 'CG1 のパブリック IP アドレスで公開するポートと、App1 のネットワーク エンドポイントとして設定すべき組み合わせを1つ選んでください。',
    questionEn: 'Which combination of exposed public IP ports and App1 network endpoint should you configure?',
    options: [
      {
        id: 'A',
        textJa: '公開するポート：443 and 5000、App1 のネットワーク エンドポイント：cg1.contoso.com:443',
        textEn: 'Ports to expose: 443 and 5000 / App1 endpoint: cg1.contoso.com:443',
        isCorrect: false,
        explanationJa: '【不正解】5000 を公開すると外部からバックエンドへ到達できてしまいます。',
        explanationEn: 'Exposing port 5000 still leaves the internal container reachable from the internet.',
      },
      {
        id: 'B',
        textJa: '公開するポート：443 only、App1 のネットワーク エンドポイント：localhost:5000',
        textEn: 'Ports to expose: 443 only / App1 endpoint: localhost:5000',
        isCorrect: true,
        explanationJa: '【正解】同じ ACI コンテナー グループ内のコンテナーはネットワーク名前空間を共有するため、外部公開ポートを 443 のみに絞っても、container1 から contained へは localhost:5000 で内部通信できます。',
        explanationEn: 'Containers in the same ACI group share a network namespace, so exposing only port 443 externally allows container1 to reach contained internally via localhost:5000.',
      },
      {
        id: 'C',
        textJa: '公開するポート：5000 only、App1 のネットワーク エンドポイント：cg1.contoso.com:5000',
        textEn: 'Ports to expose: 5000 only / App1 endpoint: cg1.contoso.com:5000',
        isCorrect: false,
        explanationJa: '【不正解】フロントエンドの 443 が閉じてしまい、バックエンドの 5000 が外部に公開されてしまいます。',
        explanationEn: 'This blocks frontend port 443 and exposes backend port 5000 externally.',
      },
      {
        id: 'D',
        textJa: '公開するポート：443 and 5000、App1 のネットワーク エンドポイント：localhost:443',
        textEn: 'Ports to expose: 443 and 5000 / App1 endpoint: localhost:443',
        isCorrect: false,
        explanationJa: '【不正解】5000 が外部公開されたままであり、接続先ポートも 5000 であるべきです。',
        explanationEn: 'Port 5000 remains exposed externally, and contained listens on port 5000 rather than 443.',
      },
      {
        id: 'E',
        textJa: '公開するポート：443 only、App1 のネットワーク エンドポイント：cg1.contoso.com:5000',
        textEn: 'Ports to expose: 443 only / App1 endpoint: cg1.contoso.com:5000',
        isCorrect: false,
        explanationJa: '【不正解】パブリック DNS 名経由の 5000 は公開ポートから除外されているため到達できません。',
        explanationEn: 'Port 5000 is not exposed on the public DNS endpoint cg1.contoso.com.',
      },
      {
        id: 'F',
        textJa: '公開するポート：5000 only、App1 のネットワーク エンドポイント：localhost:5000',
        textEn: 'Ports to expose: 5000 only / App1 endpoint: localhost:5000',
        isCorrect: false,
        explanationJa: '【不正解】公開ポートが 5000 のみでは外部利用者が 443 でアクセスできません。',
        explanationEn: 'External clients need TCP 443 exposed rather than port 5000.',
      },
    ],
    overallExplanationJa: `Azure Container Instances の同一コンテナー グループ内のサイドカー/複数コンテナーは localhost で通信できます。グループ外部に公開する ipAddress.ports からは 5000 を外して 443 のみにし、アプリ内のバックエンド参照先を localhost:5000 に設定します。`,
    overallExplanationEn: `Containers within the same ACI container group share localhost networking. Remove port 5000 from the group's public ipAddress.ports and configure App1 to call contained via localhost:5000.`,
    keyPointsJa: [
      'ACI 同一コンテナー グループ内はネットワーク共有 → localhost:<port> で通信可能',
      'パブリック IP で公開するポートは 443 のみに制限',
    ],
    keyPointsEn: [
      'ACI group containers share a network namespace and communicate via localhost',
      'Expose only TCP 443 on the public IP address',
    ],
    referenceTopic: 'Azure Container Instances ネットワーク分離',
  },
  {
    id: 'pdf-q49',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Machine Configuration によるベースラインのカスタマイズと自動修正',
    titleEn: 'Customizing and Auto-Correcting Security Baselines with Azure Machine Configuration',
    scenarioJa: `次のサーバーを含む Azure サブスクリプションがあり、Azure Policy でコンプライアンスを管理しています。
・Windows Server または Ubuntu Server を実行する Azure 仮想マシン 200 台
・Azure Arc 対応サーバー 50 台

組織固有のセキュリティ ベースラインを適用する必要があります。要件は次のとおりです。
・組み込みのセキュリティ ベースラインをカスタマイズする。
・デプロイ後、サーバーに対する構成変更（ドリフト）が自動的に強制適用（修正）されるようにする。
・管理作業を最小限に抑える。`,
    scenarioEn: `You have an Azure subscription with 200 Windows/Ubuntu VMs and 50 Azure Arc-enabled servers managed via Azure Policy.
You need to apply a customized organizational security baseline where:
- The built-in security baseline is customized.
- Configuration drift on servers after deployment is automatically enforced/corrected.
- Administrative effort is minimized.`,
    questionJa: 'ベースラインのカスタマイズ方法と適用モードの組み合わせとして正しいものを1つ選んでください。',
    questionEn: 'Which baseline customization method and assignment mode should you use?',
    options: [
      {
        id: 'A',
        textJa: 'カスタマイズ方法：Azure Machine Configuration を使用する／適用モード：Apply and Monitor',
        textEn: 'Customization: Azure Machine Configuration / Mode: Apply and Monitor',
        isCorrect: false,
        explanationJa: '【不正解】Apply and Monitor は初回適用後に構成ドリフトを報告するのみで、自動修正は行いません。',
        explanationEn: 'Apply and Monitor only reports drift after initial application without auto-remediating.',
      },
      {
        id: 'B',
        textJa: 'カスタマイズ方法：組み込みのイニシアティブを JSON で直接編集する／適用モード：Apply and Autocorrect',
        textEn: 'Customization: Directly edit built-in initiative JSON / Mode: Apply and Autocorrect',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft 提供の組み込みイニシアティブ定義を直接上書き編集することはできません。カスタム構成パッケージを作成します。',
        explanationEn: 'Built-in Azure Policy initiatives cannot be directly edited; you author custom Machine Configuration packages instead.',
      },
      {
        id: 'C',
        textJa: 'カスタマイズ方法：Desired State Configuration (DSC) を使用する／適用モード：Apply and Autocorrect',
        textEn: 'Customization: Use Desired State Configuration (DSC) / Mode: Apply and Autocorrect',
        isCorrect: false,
        explanationJa: '【不正解】スタンドアロンの DSC 運用では配布・監視基盤の管理が増えるため、Azure Policy と統合して一元管理できる Azure Machine Configuration が適しています。',
        explanationEn: 'Standalone DSC requires extra infrastructure management compared to Azure Machine Configuration integrated with Azure Policy.',
      },
      {
        id: 'D',
        textJa: 'カスタマイズ方法：Azure Machine Configuration を使用する／適用モード：Apply and Autocorrect',
        textEn: 'Customization: Azure Machine Configuration / Mode: Apply and Autocorrect',
        isCorrect: true,
        explanationJa: '【正解】Azure Machine Configuration（旧 Guest Configuration）でカスタム構成パッケージを作成し、適用モードを Apply and Autocorrect (ApplyAndAutoCorrect) に設定することで、Azure VM と Arc サーバー双方の OS 設定ドリフトを自動修復できます。',
        explanationEn: 'Creating a custom Azure Machine Configuration package with ApplyAndAutoCorrect automatically remediates OS configuration drift across both Azure VMs and Arc-enabled servers.',
      },
      {
        id: 'E',
        textJa: 'カスタマイズ方法：組み込みのイニシアティブを JSON で直接編集する／適用モード：Audit',
        textEn: 'Customization: Edit built-in initiative JSON / Mode: Audit',
        isCorrect: false,
        explanationJa: '【不正解】組み込みイニシアティブの直接編集は不可であり、Audit モードでは強制適用されません。',
        explanationEn: 'Built-in initiatives cannot be edited directly and Audit mode does not enforce changes.',
      },
      {
        id: 'F',
        textJa: 'カスタマイズ方法：Desired State Configuration (DSC) を使用する／適用モード：DeployIfNotExists',
        textEn: 'Customization: Use DSC / Mode: DeployIfNotExists',
        isCorrect: false,
        explanationJa: '【不正解】DeployIfNotExists は ARM リソースのデプロイ効果であり、Machine Configuration の継続的な OS ドリフト修正モードではありません。',
        explanationEn: 'DeployIfNotExists deploys ARM resources rather than continuously autocorrecting in-guest OS configuration.',
      },
    ],
    overallExplanationJa: `Azure VM と Azure Arc サーバーの OS 内セキュリティ ベースラインをカスタマイズして継続強制するには、Azure Machine Configuration でカスタム パッケージを作成し、割り当てモードに「Apply and Autocorrect (ApplyAndAutoCorrect)」を指定します。`,
    overallExplanationEn: `Use Azure Machine Configuration custom packages with Apply and Autocorrect mode to enforce customized OS security baselines and automatically fix drift across Azure VMs and Arc servers.`,
    keyPointsJa: [
      'Azure VM ＋ Arc サーバーの OS 構成管理 → Azure Machine Configuration',
      'ドリフトの自動修正 → Apply and Autocorrect (ApplyAndAutoCorrect)',
      'Apply and Monitor は監視のみ、Audit は監査のみ',
    ],
    keyPointsEn: [
      'OS baseline management for VMs and Arc -> Azure Machine Configuration',
      'Auto-remediate drift -> Apply and Autocorrect',
      'Apply and Monitor only reports non-compliance after initial apply',
    ],
    referenceTopic: 'Azure Machine Configuration & ApplyAndAutoCorrect',
  },
  {
    id: 'pdf-q50',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: '【ケーススタディ：Fabrikam】NIST SP 800-53 Rev. 5 有効化の最小特権ユーザー選定',
    titleEn: '[Case Study: Fabrikam] Selecting Least-Privilege User to Enable NIST SP 800-53 Rev. 5',
    scenarioJa: `${FABRIKAM_CASE_STUDY_JA}

【設問】
Defender for Cloud に関する予定されている変更（Sub1 で NIST SP 800-53 Rev. 5 コンプライアンス標準を有効にする）を実装するユーザーを任命する必要があります。ソリューションは最小特権の原則に従う必要があります。`,
    scenarioEn: `${FABRIKAM_CASE_STUDY_EN}

Question:
You need to designate a user to implement the planned Defender for Cloud change (enabling the NIST SP 800-53 Rev. 5 compliance standard on Sub1). The solution must follow the principle of least privilege.`,
    questionJa: 'どのユーザーを1人選ぶべきですか。',
    questionEn: 'Which user should you choose?',
    options: [
      {
        id: 'A',
        textJa: 'Admin1',
        textEn: 'Admin1',
        isCorrect: true,
        explanationJa: '【正解】Defender for Cloud で規制コンプライアンス標準を追加するには Azure Policy イニシアティブの割り当て権限が必要です。Admin1 は Sub1 で「リソース ポリシー共同作成者 (Resource Policy Contributor)」を保持しており、Azure RBAC ロール割り当てやリソース全般の権限を持たないため最小特権に適合します。',
        explanationEn: 'Admin1 holds Resource Policy Contributor on Sub1, which grants policyAssignments/write permissions needed to enable compliance standards without broader RBAC or resource permissions.',
      },
      {
        id: 'B',
        textJa: 'Admin2',
        textEn: 'Admin2',
        isCorrect: false,
        explanationJa: '【不正解】Admin2 のユーザー アクセス管理者はポリシー操作も可能ですが、Azure RBAC のロール割り当て権限も含むため Resource Policy Contributor より広範です。',
        explanationEn: 'User Access Administrator includes RBAC assignment management in addition to policy permissions, exceeding least privilege compared to Admin1.',
      },
      {
        id: 'C',
        textJa: 'Admin3',
        textEn: 'Admin3',
        isCorrect: false,
        explanationJa: '【不正解】Contributor には Microsoft.Authorization/policyAssignments/write 権限が含まれないため、コンプライアンス標準を追加できません。',
        explanationEn: 'Contributor excludes Microsoft.Authorization write operations and cannot assign compliance initiatives.',
      },
      {
        id: 'D',
        textJa: 'Admin4',
        textEn: 'Admin4',
        isCorrect: false,
        explanationJa: '【不正解】Global Administrator は Entra ID の管理ロールであり、そのままでは Sub1 に対する Azure リソース/ポリシー操作権限を持ちません。',
        explanationEn: 'Global Administrator is an Entra role and has no Azure subscription RBAC permissions on Sub1 by default.',
      },
    ],
    overallExplanationJa: `Defender for Cloud のコンプライアンス標準の有効化は、裏側で Azure Policy イニシアティブの割り当て（Microsoft.Authorization/policyAssignments/write）として実行されます。Entra ロール（Admin4）ではなく Sub1 の Azure ロールを確認し、ポリシー操作に限定された Resource Policy Contributor（Admin1）を選びます。`,
    overallExplanationEn: `Enabling compliance standards in Defender for Cloud assigns Azure Policy initiatives under the hood. Resource Policy Contributor (Admin1) provides policy assignment permissions without unnecessary RBAC management rights.`,
    keyPointsJa: [
      'コンプライアンス標準の追加 ＝ Azure Policy イニシアティブの割り当て',
      'Resource Policy Contributor (Admin1) は最小特権でポリシー割り当てを実行可能',
      'Contributor にはポリシー割り当て権限がなく、Global Admin は Entra ロール',
    ],
    keyPointsEn: [
      'Adding compliance standards creates Azure Policy initiative assignments',
      'Resource Policy Contributor provides least-privilege policy assignment rights',
      'Contributor lacks Microsoft.Authorization write permissions',
    ],
    referenceTopic: 'Defender for Cloud 規制コンプライアンス標準 & Azure RBAC',
  },
  {
    id: 'pdf-q51',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '特定ストレージ アカウントのみのマルウェア スキャン月間上限オーバーライド',
    titleEn: 'Overriding Monthly Malware Scanning Cap for a Specific Storage Account',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションに storage1 という名前のストレージ アカウントがあります。Sub1 では Microsoft Defender for Storage が有効になっており、アップロード時のマルウェア スキャンはアカウントあたり月間上限 10,000 GB に設定されています。また、Microsoft Sentinel ワークスペースを使用してセキュリティ イベントを監視しています。

storage1 のマルウェア スキャンの上限のみを月間 2,000 GB に設定する必要があります。`,
    scenarioEn: `Your Azure subscription Sub1 contains a storage account named storage1. Microsoft Defender for Storage is enabled on Sub1 with on-upload malware scanning capped at 10,000 GB per month per storage account. A Microsoft Sentinel workspace monitors all Azure security events.
You need to set the malware scanning cap for storage1 only to 2,000 GB per month.`,
    questionJa: '行うべきことを1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'storage1 で「Defender for Storage のサブスクリプション レベルの設定をオーバーライド」を有効にする。',
        textEn: 'Enable "Override subscription-level settings for Defender for Storage" on storage1.',
        isCorrect: true,
        explanationJa: '【正解】storage1 側でサブスクリプション設定のオーバーライドを有効にし、capGBPerMonth を 2,000 GB に設定することで、他のアカウントに影響せず storage1 の月間スキャン上限だけを変更できます。',
        explanationEn: 'Enabling the subscription-level settings override on storage1 lets you configure a per-account monthly cap (capGBPerMonth = 2000) without affecting other accounts.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Sentinel からデータ収集規則（DCR）を変更して storage1 からのログの取り込みを制限する。',
        textEn: 'Modify a Data Collection Rule (DCR) in Microsoft Sentinel to limit log ingestion from storage1.',
        isCorrect: false,
        explanationJa: '【不正解】DCR は監視ログの取り込みを制限するものであり、Defender for Storage のマルウェア スキャン実行量の上限には影響しません。',
        explanationEn: 'DCRs filter ingested telemetry in Sentinel and do not control Defender for Storage scanning caps.',
      },
      {
        id: 'C',
        textJa: 'Sub1 全体の Defender for Storage で設定された月間マルウェア スキャン上限を変更する。',
        textEn: 'Modify the subscription-wide Defender for Storage malware scanning cap on Sub1.',
        isCorrect: false,
        explanationJa: '【不正解】サブスクリプション レベルの変更は継承しているすべてのストレージ アカウントに波及してしまいます。',
        explanationEn: 'Changing Sub1 settings affects all inheriting storage accounts rather than only storage1.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Sentinel ワークスペースの設定画面から、日次データ上限の制限値を変更する。',
        textEn: 'Modify the daily ingestion cap configured on the Microsoft Sentinel workspace.',
        isCorrect: false,
        explanationJa: '【不正解】Log Analytics の日次取り込み上限は Sentinel のログ課金制御であり、ストレージ スキャン上限とは無関係です。',
        explanationEn: 'Log Analytics workspace daily caps govern log ingestion, not Defender for Storage malware scanning.',
      },
    ],
    overallExplanationJa: `Microsoft Defender for Storage では、サブスクリプション レベルの上限を継承する設定を、個々のストレージ アカウント単位で「サブスクリプション レベルの設定をオーバーライド」することで個別調整（capGBPerMonth の変更）が可能です。`,
    overallExplanationEn: `Use the per-resource override option on storage1 to customize the Defender for Storage monthly malware scanning cap without altering subscription defaults or Sentinel ingestion.`,
    keyPointsJa: [
      '個別アカウントのみ設定変更 → storage1 でサブスクリプション設定をオーバーライド',
      'Sentinel の DCR や日次上限はマルウェア スキャン量とは無関係',
    ],
    keyPointsEn: [
      'Override subscription-level Defender for Storage settings on the target account',
      'Distinguish scanning caps from Log Analytics/Sentinel ingestion caps',
    ],
    referenceTopic: 'Defender for Storage アカウント単位オーバーライド',
  },
  {
    id: 'pdf-q52',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender CSPM で仮想マシン上の平文接続文字列・SSH キーを検出する設定',
    titleEn: 'Enabling Secret Scanning on Virtual Machines via Defender CSPM',
    scenarioJa: `複数の仮想マシンを含む Sub1 という名前の Azure サブスクリプションがあり、Microsoft Defender Cloud Security Posture Management (CSPM) プランが有効になっています。
しかし、Defender for Cloud が仮想マシンに保存されている平文の接続文字列と SSH キーを識別できていないことが分かりました。
仮想マシン上のシークレットを識別できるようにする必要があります。`,
    scenarioEn: `An Azure subscription named Sub1 contains multiple VMs and has the Microsoft Defender CSPM plan enabled.
You discover that Defender for Cloud is not identifying plaintext connection strings and SSH keys stored on the VMs.
You need to enable secret identification on the virtual machines.`,
    questionJa: '何を行うべきか、1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Sentinel でデータ コネクタを構成する。',
        textEn: 'Enable the Sentinel data connector.',
        isCorrect: false,
        explanationJa: '【不正解】データ コネクタはアラートを Sentinel へ連携するのみで、VM ディスクのシークレット スキャン自体は有効になりません。',
        explanationEn: 'The Sentinel connector forwards alerts and does not enable disk scanning on VMs.',
      },
      {
        id: 'B',
        textJa: 'エージェントレス マシン スキャンを有効にする。',
        textEn: 'Enable agentless machine scanning.',
        isCorrect: true,
        explanationJa: '【正解】Defender CSPM プラン上で「エージェントレス マシン スキャン（シークレット スキャンを含む）」を有効にすることで、VM ディスクのスナップショットを帯域外で検査し、平文の接続文字列や SSH キーを検出できます。',
        explanationEn: 'Enabling agentless machine scanning under Defender CSPM inspects VM disk snapshots out-of-band to detect exposed plaintext secrets and SSH keys.',
      },
      {
        id: 'C',
        textJa: 'VM に Azure Monitor エージェントを入れる。',
        textEn: 'Deploy Azure Monitor Agent to VMs.',
        isCorrect: false,
        explanationJa: '【不正解】AMA はログやメトリックを収集するエージェントであり、ディスク内の平文シークレットをスキャンする機能はありません。',
        explanationEn: 'Azure Monitor Agent collects telemetry logs and does not scan VM disks for plaintext secrets.',
      },
      {
        id: 'D',
        textJa: 'Defender for Key Vault を有効にする。',
        textEn: 'Enable Defender for Key Vault.',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault への不審アクセスを検出するプランであり、VM 内のファイルに置かれた平文シークレットはスキャンできません。',
        explanationEn: 'Defender for Key Vault monitors Key Vault access, not secrets left on VM disks.',
      },
    ],
    overallExplanationJa: `Defender CSPM プランが有効であっても、VM ディスク内のシークレット スキャンを実行するにはプラン設定で「エージェントレス マシン スキャン」が有効になっている必要があります。`,
    overallExplanationEn: `Secret scanning for VMs is part of agentless machine scanning in Defender CSPM and must be enabled in the plan's settings.`,
    keyPointsJa: [
      'VM 内の平文シークレット・SSH キー検出 → Defender CSPM のエージェントレス マシン スキャン',
      'Key Vault 保護や Sentinel コネクタではディスク内の露出は検出できない',
    ],
    keyPointsEn: [
      'Secret scanning relies on Defender CSPM agentless machine scanning',
      'Inspects VM disk snapshots without in-guest agents',
    ],
    referenceTopic: 'Defender CSPM エージェントレス シークレット スキャン',
  },
  {
    id: 'pdf-q53',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Windows Server 仮想マシンの既知脆弱性・構成ミス自動スキャン',
    titleEn: 'Automatically Scanning VMs for Known Vulnerabilities and Misconfigurations',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションに Windows Server を実行する仮想マシンが 20 台含まれており、Microsoft Defender for Cloud の Defender CSPM プランが有効になっています。
すべての仮想マシンが、既知のセキュリティ上の欠陥（CVE）と構成ミスについて自動的にスキャンされるようにする必要があります。`,
    scenarioEn: `Sub1 contains 20 Windows Server VMs and has Defender CSPM enabled.
You need to ensure all VMs are automatically scanned for known security vulnerabilities and misconfigurations.`,
    questionJa: '何を使用すべきか、1つ選んでください。',
    questionEn: 'What should you use?',
    options: [
      {
        id: 'A',
        textJa: '攻撃パス分析',
        textEn: 'Attack path analysis',
        isCorrect: false,
        explanationJa: '【不正解】攻撃パス分析は既存の検出結果や権限・公開状態を関連付けて攻撃経路を特定する機能であり、脆弱性スキャン自体ではありません。',
        explanationEn: 'Attack path analysis correlates existing posture findings rather than performing vulnerability scanning.',
      },
      {
        id: 'B',
        textJa: 'Microsoft クラウド セキュリティ ベンチマーク (MCSB)',
        textEn: 'Microsoft cloud security benchmark (MCSB)',
        isCorrect: false,
        explanationJa: '【不正解】MCSB はセキュリティ評価基準（標準）であり、VM 内のソフトウェア CVE をスキャンする実行機能ではありません。',
        explanationEn: 'MCSB is a compliance/security standard framework, not a VM software vulnerability scanner.',
      },
      {
        id: 'C',
        textJa: 'クラウド セキュリティ エクスプローラー',
        textEn: 'Cloud security explorer',
        isCorrect: false,
        explanationJa: '【不正解】収集済みのセキュリティ グラフを検索するクエリ機能であり、自動スキャン エンジンではありません。',
        explanationEn: 'Cloud security explorer queries the existing security graph rather than scanning VMs for CVEs.',
      },
      {
        id: 'D',
        textJa: 'Just-In-Time (JIT) VM アクセス',
        textEn: 'Just-In-Time (JIT) VM access',
        isCorrect: false,
        explanationJa: '【不正解】管理ポート（RDP/SSH）の時限開放によるネットワーク露出低減機能です。',
        explanationEn: 'JIT restricts management port exposure and does not scan VMs for software flaws.',
      },
      {
        id: 'E',
        textJa: '仮想マシンの脆弱性評価',
        textEn: 'Vulnerability assessment on the virtual machines',
        isCorrect: true,
        explanationJa: '【正解】仮想マシンの脆弱性評価（エージェントレスまたは Defender 脆弱性管理）を有効にすることで、OS やインストール済みソフトウェアの既知の脆弱性 (CVE) とセキュリティ構成の不備を継続的に自動スキャンできます。',
        explanationEn: 'Enabling Vulnerability assessment on virtual machines continuously scans OS and installed software for known CVEs and misconfigurations.',
      },
    ],
    overallExplanationJa: `VM の既知脆弱性（CVE）や OS 構成不備を自動検出する機能は「仮想マシンの脆弱性評価 (Vulnerability assessment on the virtual machines)」です。検出結果を分析・検索する攻撃パスやエクスプローラーとは役割が異なります。`,
    overallExplanationEn: `Vulnerability assessment on virtual machines performs the actual automated scanning of VM software and configurations, distinct from query/analysis tools like Attack Path Analysis or Cloud Security Explorer.`,
    keyPointsJa: [
      'VM 内の既知脆弱性・構成ミス自動スキャン → 仮想マシンの脆弱性評価',
      '攻撃パス分析・セキュリティ エクスプローラーは収集済みデータの分析・検索機能',
    ],
    keyPointsEn: [
      'VM vulnerability scanning -> Vulnerability assessment on virtual machines',
      'Separate from posture analysis and graph query tools',
    ],
    referenceTopic: 'Defender for Cloud 仮想マシンの脆弱性評価',
  },
  {
    id: 'pdf-q54',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Security Copilot 新規ワークスペースへのトラフィック切り替え前準備',
    titleEn: 'Preparing User Access Before Switching Security Copilot Workspaces',
    scenarioJa: `複数の Microsoft Security Copilot ワークスペースがあります。User1 は現在、既定のワークスペースを使用して Security Copilot にアクセスしています。
Workspace1 という新しいワークスペースを作成し、容量（SCU）を割り当てました。Security Copilot エージェントのトラフィックを Workspace1 にルーティングする予定です。
User1 が埋め込みエクスペリエンスをエラーなく使用できるようにする必要があります。`,
    scenarioEn: `You have multiple Microsoft Security Copilot workspaces. User1 currently accesses Security Copilot using the default workspace.
You create a new workspace named Workspace1 and assign capacity to it. You plan to route Security Copilot agent traffic to Workspace1.
You need to ensure User1 can use the embedded experience without errors.`,
    questionJa: 'Workspace1 に切り替える前に行うべきことを1つ選んでください。',
    questionEn: 'What should you do before switching to Workspace1?',
    options: [
      {
        id: 'A',
        textJa: 'User1 を Workspace1 に追加する。',
        textEn: 'Add User1 to Workspace1.',
        isCorrect: true,
        explanationJa: '【正解】既定のワークスペースへのアクセス権があっても新しい Workspace1 へのアクセス権は自動付与されません。トラフィックを切り替える前に User1 に Workspace1 の適切なロール/メンバーシップを割り当てておく必要があります。',
        explanationEn: 'Access to the default workspace does not transfer automatically; User1 must be added to Workspace1 before routing embedded traffic there.',
      },
      {
        id: 'B',
        textJa: 'User1 にセキュリティ オペレーターを割り当てる。',
        textEn: 'Grant Security Operator role.',
        isCorrect: false,
        explanationJa: '【不正解】Entra の Security Operator ロールは Workspace1 固有のメンバーシップを代替しません。',
        explanationEn: 'The Entra Security Operator role does not automatically grant access to a specific custom Security Copilot workspace.',
      },
      {
        id: 'C',
        textJa: '既定ワークスペースの SCU 容量を解除する。',
        textEn: 'Detach default SCU capacity.',
        isCorrect: false,
        explanationJa: '【不正解】既定ワークスペースの容量を外しても Workspace1 に対する User1 の利用権限は付与されません。',
        explanationEn: 'Removing capacity from the default workspace does not grant User1 permission on Workspace1.',
      },
      {
        id: 'D',
        textJa: 'Workspace1 用に新しい SCU を追加する。',
        textEn: 'Add new Workspace1 capacity.',
        isCorrect: false,
        explanationJa: '【不正解】Workspace1 にはすでに容量が割り当てられているため、不足しているのは容量ではなく User1 のアクセス許可です。',
        explanationEn: 'Workspace1 already has capacity assigned; the missing requirement is user membership.',
      },
    ],
    overallExplanationJa: `Security Copilot のワークスペースを新しく作成して埋め込みトラフィックを向ける場合、既存利用者がエラーなく利用できるよう、切り替え前に新ワークスペースへ対象ユーザーを追加（メンバー付与）しておく必要があります。`,
    overallExplanationEn: `Before routing embedded Security Copilot experiences to a newly created workspace, ensure target users are added as members/contributors of that workspace.`,
    keyPointsJa: [
      'ワークスペース単位のアクセス権が必要（既定ワークスペースから自動継承されない）',
      'トラフィック切り替え前に User1 を Workspace1 に追加',
    ],
    keyPointsEn: [
      'Workspace permissions are scoped per workspace',
      'Add User1 to Workspace1 before switching embedded traffic',
    ],
    referenceTopic: 'Microsoft Security Copilot マルチワークスペース権限管理',
  },
  {
    id: 'pdf-q55',
    domain: 'Defender XDR & 統合SecOps',
    difficulty: '応用 (Hard)',
    titleJa: 'Defender EASM の不要資産クリーンアップと非該当検出結果の抑制',
    titleEn: 'Cleaning Up Defender EASM Inventory and Suppressing Non-Applicable Findings',
    scenarioJa: `Contoso, Ltd. の Microsoft Defender External Attack Surface Management (Defender EASM) リソースを所有しています。次の要件を満たすようにワークフローを更新する必要があります。
・Contoso が所有しなくなったビジネス ドメインの資産を、インベントリから削除する必要がある。
・確認済みのインベントリに該当しない検出結果が、報告される件数に影響してはならない。

候補アクション：
・アクション1：資産にラベルを適用する。
・アクション2：資産の状態を「依存関係 (Dependency)」に設定する。
・アクション3：観測結果を「該当しない (non-applicable)」としてマークする。
・アクション4：資産の状態を「調査が必要 (Requires Investigation)」に設定する。
・アクション5：シードを削除し、そのシードを使用して検出された資産を削除する。`,
    scenarioEn: `You own a Microsoft Defender EASM resource for Contoso, Ltd. and need to update your workflow:
- Assets belonging to business domains that Contoso no longer owns must be removed from the inventory.
- Findings that do not apply to the confirmed inventory must not affect reported counts.

Candidate actions:
1. Apply a label to the assets.
2. Set asset state to Dependency.
3. Mark observations as non-applicable.
4. Set asset state to Requires Investigation.
5. Delete the seed and delete the assets discovered using that seed.`,
    questionJa: 'インベントリのクリーンアップと検出結果の抑制について、実行するアクションの正しい組み合わせを1つ選んでください。',
    questionEn: 'Which combination of actions should you perform for inventory cleanup and finding suppression?',
    options: [
      {
        id: 'A',
        textJa: 'インベントリのクリーンアップ：アクション1、検出結果の抑制：アクション2',
        textEn: 'Inventory cleanup: Action 1 / Suppress findings: Action 2',
        isCorrect: false,
        explanationJa: '【不正解】ラベル付けでは不要資産は削除されず、Dependency は第三者依存資産の状態分類であり観測結果の抑制ではありません。',
        explanationEn: 'Labels do not remove assets, and Dependency tracks third-party infrastructure rather than suppressing observations.',
      },
      {
        id: 'B',
        textJa: 'インベントリのクリーンアップ：アクション3、検出結果の抑制：アクション1',
        textEn: 'Inventory cleanup: Action 3 / Suppress findings: Action 1',
        isCorrect: false,
        explanationJa: '【不正解】non-applicable は観測結果の除外であり、資産インベントリからの削除になりません。',
        explanationEn: 'Marking observations non-applicable does not delete unowned domains from inventory.',
      },
      {
        id: 'C',
        textJa: 'インベントリのクリーンアップ：アクション2、検出結果の抑制：アクション5',
        textEn: 'Inventory cleanup: Action 2 / Suppress findings: Action 5',
        isCorrect: false,
        explanationJa: '【不正解】所有しなくなったドメインはインベントリから削除すべきであり、逆に観測結果の抑制のために資産ごと消すべきではありません。',
        explanationEn: 'Unowned domains should be removed via seed/asset deletion, while valid assets should not be deleted just to suppress an inapplicable finding.',
      },
      {
        id: 'D',
        textJa: 'インベントリのクリーンアップ：アクション5、検出結果の抑制：アクション3',
        textEn: 'Inventory cleanup: Action 5 / Suppress findings: Action 3',
        isCorrect: true,
        explanationJa: '【正解】所有しなくなったドメインは「シード削除＋そのシードから検出された資産の削除（アクション5）」でクリーンアップし、インベントリ上の資産に該当しない観測結果は「non-applicable としてマーク（アクション3）」することで件数から除外します。',
        explanationEn: 'Action 5 removes unowned domains and their discovered assets from inventory; Action 3 marks inapplicable observations as non-applicable so they do not inflate reported counts.',
      },
      {
        id: 'E',
        textJa: 'インベントリのクリーンアップ：アクション4、検出結果の抑制：アクション4',
        textEn: 'Inventory cleanup: Action 4 / Suppress findings: Action 4',
        isCorrect: false,
        explanationJa: '【不正解】Requires Investigation は追加確認待ちを示す状態であり、削除にも抑制にもなりません。',
        explanationEn: 'Requires Investigation only flags assets for review and neither deletes assets nor suppresses findings.',
      },
    ],
    overallExplanationJa: `Defender EASM では、シードを削除するだけでは既に検出済みの資産が自動消去されないことがあるため、シードと関連資産の両方を削除します。また、誤検知や非該当の検出事項は「該当しない (non-applicable)」としてマークし集計から除外します。`,
    overallExplanationEn: `In Defender EASM, remove both the seed and its discovered assets when a domain is divested, and mark irrelevant findings as non-applicable to exclude them from reporting.`,
    keyPointsJa: [
      '不要ドメインの除去＝シード削除＋関連検出資産の削除',
      '非該当の検出除外＝観測結果を non-applicable としてマーク',
      '依存資産(Dependency)と未確認(Requires Investigation)の意味を区別',
    ],
    keyPointsEn: [
      'Cleanup unowned domains: Delete seed and discovered assets',
      'Suppress irrelevant findings: Mark observations as non-applicable',
    ],
    referenceTopic: 'Microsoft Defender EASM 資産インベントリと観測結果管理',
  },
  {
    id: 'pdf-q56',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Security Copilot 組織全体カスタム プラグイン管理権限の限定',
    titleEn: 'Restricting Tenant-Wide Custom Plugin Management in Security Copilot',
    scenarioJa: `Microsoft Security Copilot を使用しています。現在、Security Copilot の共同作成者 (Contributor) は、自分のセッション用のカスタム プラグインを作成し、組織全体のカスタム プラグインも管理しています。
共同作成者が組織全体のカスタム プラグインを管理できないようにする必要があります。ただし、共同作成者が自分のセッション用のカスタム プラグインを作成する能力に影響を与えてはなりません。`,
    scenarioEn: `You use Microsoft Security Copilot. Currently, Security Copilot contributors can create custom plugins for their own sessions and manage organization-wide custom plugins.
You need to prevent contributors from managing organization-wide custom plugins without affecting their ability to create custom plugins for their own sessions.`,
    questionJa: 'プラグインの設定 (Plugin settings) では、どれを1つ選択しますか。',
    questionEn: 'Which option should you select in Plugin settings?',
    options: [
      {
        id: 'A',
        textJa: 'テナント スコープで共同作成者と所有者',
        textEn: 'Contributors and Owners for Tenant scope',
        isCorrect: false,
        explanationJa: '【不正解】共同作成者が引き続き組織全体（テナント スコープ）のプラグインを管理できてしまいます。',
        explanationEn: 'This continues to allow contributors to manage tenant-wide plugins.',
      },
      {
        id: 'B',
        textJa: 'ユーザー スコープで所有者のみ',
        textEn: 'Owners only for User scope',
        isCorrect: false,
        explanationJa: '【不正解】共同作成者が自分のセッション用プラグインを作成できなくなり、要件に反します。',
        explanationEn: 'This prevents contributors from creating custom plugins for their own user sessions.',
      },
      {
        id: 'C',
        textJa: 'ユーザー スコープで共同作成者と所有者',
        textEn: 'Contributors and Owners for User scope',
        isCorrect: false,
        explanationJa: '【不正解】個人用の作成は許可されますが、組織全体のテナント スコープ権限を制限できていません。',
        explanationEn: 'This preserves user-scope creation but fails to restrict tenant-scope management.',
      },
      {
        id: 'D',
        textJa: 'テナント スコープで所有者のみ',
        textEn: 'Owners only for Tenant scope',
        isCorrect: true,
        explanationJa: '【正解】テナント スコープ（組織全体）のプラグイン管理を「所有者のみ」に制限することで、ユーザー スコープでの個人用プラグイン作成権限を維持したまま、組織全体のカスタム プラグイン管理のみを禁止できます。',
        explanationEn: 'Setting Tenant scope to Owners only restricts organization-wide plugin management to owners while preserving contributors’ ability to add user-scoped plugins.',
      },
    ],
    overallExplanationJa: `Security Copilot のカスタム プラグイン管理設定には、個人セッション用の「ユーザー スコープ」と組織全体で共有される「テナント（ワークスペース）スコープ」の2種類があります。共有プラグインのみを制限するには、テナント スコープ側を「所有者のみ」に設定します。`,
    overallExplanationEn: `Security Copilot separates custom plugin settings into User scope (personal sessions) and Tenant/Workspace scope (organization-wide). Restricting Tenant scope to Owners only leaves personal plugin creation intact.`,
    keyPointsJa: [
      '組織全体のプラグイン管理を制限 → テナント スコープを「所有者のみ」',
      '自分のセッション用作成を維持 → ユーザー スコープは制限しない',
    ],
    keyPointsEn: [
      'Tenant scope = Owners only blocks org-wide plugin changes by contributors',
      'User scope controls personal session custom plugins',
    ],
    referenceTopic: 'Microsoft Security Copilot プラグイン設定',
  },
  {
    id: 'pdf-q57',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '非対応外部 ITSM システムへの Sentinel インシデント自動起票',
    titleEn: 'Automating Ticket Creation in an Unsupported External ITSM System',
    scenarioJa: `Workspace1 という名前の新しい Microsoft Sentinel ワークスペースを構成しています。Azure Marketplace のどの Microsoft Sentinel ソリューションにも対応していない外部の IT サービス管理（ITSM）システムがあります。
Workspace1 が新しいすべてのセキュリティ インシデントについて、ITSM システムにサービス チケットを作成するようにする必要があります。`,
    scenarioEn: `You are configuring a Microsoft Sentinel workspace named Workspace1. You have an external ITSM system that does not have a corresponding Microsoft Sentinel solution in Azure Marketplace.
You need Workspace1 to create a service ticket in the ITSM system for every new security incident.`,
    questionJa: '作成すべきものを1つ選んでください。',
    questionEn: 'What should you create?',
    options: [
      {
        id: 'A',
        textJa: 'プレイブック',
        textEn: 'A playbook',
        isCorrect: true,
        explanationJa: '【正解】Azure Logic Apps ベースのプレイブックを作成し、HTTP アクションやカスタム コネクタ経由で外部 ITSM の API を呼び出して起票するフローを実装し、新規インシデントの自動化ルールから起動します。',
        explanationEn: 'A Logic Apps-based playbook can call the external ITSM REST API via HTTP actions or custom connectors when triggered by an incident-creation automation rule.',
      },
      {
        id: 'B',
        textJa: 'ブック',
        textEn: 'A workbook',
        isCorrect: false,
        explanationJa: '【不正解】ブックはログやインシデントを可視化するダッシュボード機能であり、外部システムへの自動起票アクションは実行できません。',
        explanationEn: 'Workbooks visualize data and cannot execute external API calls to open ITSM tickets.',
      },
      {
        id: 'C',
        textJa: 'ウォッチリスト',
        textEn: 'A watchlist',
        isCorrect: false,
        explanationJa: '【不正解】ウォッチリストは KQL 照合用の参照リストであり、外部システム連携を実行しません。',
        explanationEn: 'Watchlists store reference data for KQL queries rather than automating external ticket creation.',
      },
      {
        id: 'D',
        textJa: '分析ルール',
        textEn: 'An analytics rule',
        isCorrect: false,
        explanationJa: '【不正解】分析ルールはログからアラート・インシデントを生成する機能であり、外部 ITSM への API 呼び出しはプレイブックが担当します。',
        explanationEn: 'Analytics rules generate alerts and incidents; playbooks automate external response actions.',
      },
    ],
    overallExplanationJa: `Marketplace に既成ソリューションが存在しない外部 ITSM 連携でも、Azure Logic Apps を基盤とする Sentinel プレイブックで HTTP コネクタ等を使えばインシデント情報を API 連携してチケットを自動作成できます。`,
    overallExplanationEn: `Even without a Marketplace connector, Sentinel playbooks (Azure Logic Apps) can invoke any external ITSM REST API using HTTP actions triggered by automation rules.`,
    keyPointsJa: [
      '外部システムへの操作（チケット起票など）＝ プレイブック (Logic Apps)',
      'すべての新規インシデントで自動起動するには自動化ルールと併用',
    ],
    keyPointsEn: [
      'Playbooks execute automated external API workflows via Logic Apps',
      'Triggered on all new incidents via automation rules',
    ],
    referenceTopic: 'Microsoft Sentinel プレイブックによる外部 ITSM 連携',
  },
  {
    id: 'pdf-q58',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'マルチクラウド環境で複数リスクの連鎖による潜在的影響の特定',
    titleEn: 'Identifying Potential Impact of Chained Risks Across Azure and AWS',
    scenarioJa: `Microsoft Defender for Cloud が有効になっている Azure サブスクリプションと、Defender for Cloud に接続された AWS アカウントがあり、Defender CSPM プランが有効になっています。
Defender CSPM によって報告された複数のリスク（公開状態、脆弱性、過剰権限など）を悪用するセキュリティ インシデントの潜在的な影響を特定する必要があります。`,
    scenarioEn: `You have an Azure subscription and a connected AWS account in Microsoft Defender for Cloud with the Defender CSPM plan enabled.
You need to identify the potential impact of a security incident that exploits multiple risks reported by Defender CSPM.`,
    questionJa: '使用すべきものを1つ選んでください。',
    questionEn: 'What should you use?',
    options: [
      {
        id: 'A',
        textJa: '規制コンプライアンス',
        textEn: 'Regulatory compliance',
        isCorrect: false,
        explanationJa: '【不正解】標準コントロールへの準拠状況を確認する機能であり、複数リスクの連鎖による侵入経路と影響範囲は示しません。',
        explanationEn: 'Regulatory compliance measures adherence to standards rather than chained attack paths.',
      },
      {
        id: 'B',
        textJa: 'クラウド セキュリティ エクスプローラー',
        textEn: 'Cloud security explorer',
        isCorrect: false,
        explanationJa: '【不正解】資産や関係を任意条件で検索する機能であり、事前分析された悪用連鎖の潜在的影響を示す専用機能は攻撃パス分析です。',
        explanationEn: 'Cloud security explorer runs custom graph queries, whereas Attack path analysis automatically maps exploitable chains to high-value assets.',
      },
      {
        id: 'C',
        textJa: 'セキュリティに関する推奨事項',
        textEn: 'Security recommendations',
        isCorrect: false,
        explanationJa: '【不正解】個々の構成不備・脆弱性の是正内容を示すものであり、複数リスクが連鎖した到達先は分かりません。',
        explanationEn: 'Recommendations list individual remediations rather than chained incident impact paths.',
      },
      {
        id: 'D',
        textJa: '攻撃パス分析',
        textEn: 'Attack path analysis',
        isCorrect: true,
        explanationJa: '【正解】攻撃パス分析 (Attack path analysis) は、外部公開、脆弱性、横展開権限などの複数リスクを自動的に相関させ、攻撃者が重要資産へ到達する連鎖経路と潜在的影響を可視化します（AWS も対象）。',
        explanationEn: 'Attack path analysis automatically maps chained vulnerabilities, exposures, and permissions across Azure and AWS to show how attackers can reach critical assets.',
      },
    ],
    overallExplanationJa: `Defender CSPM の「攻撃パス分析」は、単独では見落としがちな複数のリスクが連鎖して重要資産に到達する経路（攻撃パス）と潜在的影響をグラフで特定します。`,
    overallExplanationEn: `Attack path analysis in Defender CSPM correlates multiple chained risks across Azure and connected AWS accounts to pinpoint potential blast radius and lateral movement paths.`,
    keyPointsJa: [
      '複数リスクの連鎖・潜在的影響の特定 → 攻撃パス分析 (Attack path analysis)',
      'AWS コネクタ経由で接続された AWS リソースも分析対象',
    ],
    keyPointsEn: [
      'Chained risk impact & lateral movement -> Attack path analysis',
      'Covers multi-cloud resources including connected AWS accounts',
    ],
    referenceTopic: 'Defender CSPM 攻撃パス分析',
  },
  {
    id: 'pdf-q59',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Security Copilot スタンドアロンから Sentinel インシデントを取得する最小権限',
    titleEn: 'Granting Least-Privilege Access to Fetch Sentinel Incidents from Security Copilot',
    scenarioJa: `RG1 という名前のリソース グループに、Workspace1 という名前の Microsoft Sentinel ワークスペースと統合された Microsoft Security Copilot のデプロイが含まれています。アナリストは、Microsoft Sentinel プラグインを使用してインシデントを取得するために、Security Copilot のスタンドアロン エクスペリエンスを使用しています。
User1 は Security Copilot にサインインできますが、Workspace1 からインシデントを取得できません。User1 には Security Copilot 共同作成者 (Security Copilot Contributor) ロールのみが割り当てられています。

User1 がインシデントを取得できるようにする必要があります。ソリューションは最小特権の原則に従い、Security Copilot の構成変更を一切必要としない必要があります。`,
    scenarioEn: `Resource group RG1 contains a Microsoft Sentinel workspace named Workspace1 integrated with Microsoft Security Copilot. Analysts use the standalone Security Copilot experience with the Sentinel plugin.
User1 can sign in to Security Copilot (having the Security Copilot Contributor role) but cannot retrieve incidents from Workspace1.
You need to allow User1 to retrieve incidents using least privilege without changing Security Copilot configuration.`,
    questionJa: 'User1 に割り当てるべきロールを1つ選んでください。',
    questionEn: 'Which role should you assign to User1?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Entra のセキュリティ閲覧者 (Security Reader) ロール',
        textEn: 'Microsoft Entra Security Reader role',
        isCorrect: false,
        explanationJa: '【不正解】Entra のセキュリティ閲覧者はディレクトリ情報向けであり、Azure RBAC で管理される Sentinel ワークスペースのインシデント読み取り権限を与えません。',
        explanationEn: 'Entra Security Reader does not grant Azure RBAC read access to Sentinel workspace incidents.',
      },
      {
        id: 'B',
        textJa: 'Workspace1 に対する Microsoft Sentinel 閲覧者 (Microsoft Sentinel Reader) ロール',
        textEn: 'Microsoft Sentinel Reader role on Workspace1',
        isCorrect: true,
        explanationJa: '【正解】Security Copilot のプラグインは実行ユーザーの Azure RBAC 権限を尊重します。Workspace1 に「Microsoft Sentinel 閲覧者」を付与することで、編集・更新権限を与えず最小特権でインシデントを取得できるようになります。',
        explanationEn: 'Security Copilot runs Sentinel queries under the user’s permissions; assigning Microsoft Sentinel Reader on Workspace1 provides least-privilege incident read access.',
      },
      {
        id: 'C',
        textJa: 'Security Copilot 所有者 (Security Copilot Owner) ロール',
        textEn: 'Security Copilot Owner role',
        isCorrect: false,
        explanationJa: '【不正解】Copilot 側の管理ロールを上げても、接続先 Sentinel ワークスペースの Azure RBAC 権限不足は解消しません。',
        explanationEn: 'Raising the Security Copilot role does not grant Azure RBAC permissions on the Sentinel workspace.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Entra のセキュリティ管理者 (Security Administrator) ロール',
        textEn: 'Microsoft Entra Security Administrator role',
        isCorrect: false,
        explanationJa: '【不正解】Entra ディレクトリ ロールであり、Workspace1 のデータ参照権限を付与しません。',
        explanationEn: 'Entra Security Administrator does not govern Azure RBAC access to Sentinel workspaces.',
      },
      {
        id: 'E',
        textJa: 'Azure での RG1 に対する共同作成者 (Contributor) ロール',
        textEn: 'Contributor role on RG1 in Azure',
        isCorrect: false,
        explanationJa: '【不正解】RG1 全体の共同作成者はリソース構成変更まで許可するため過剰であり、最小特権に反します。',
        explanationEn: 'Contributor on RG1 grants broad resource modification rights beyond reading incidents.',
      },
    ],
    overallExplanationJa: `Security Copilot のプラグインはユーザー自身の権限（On-behalf-of）で接続先データを参照します。Copilot のロールだけでなく、接続先である Workspace1 に対して最小特権の「Microsoft Sentinel 閲覧者」を付与します。`,
    overallExplanationEn: `Security Copilot plugins respect user-level RBAC permissions on connected data sources. Granting Microsoft Sentinel Reader on Workspace1 resolves the access issue with least privilege.`,
    keyPointsJa: [
      'Security Copilot にサインイン可 ＝ Copilot ロールあり、接続先データ権限は別途必要',
      'インシデントの取得のみ＝ Workspace1 スコープの Microsoft Sentinel Reader',
    ],
    keyPointsEn: [
      'Security Copilot Contributor allows signing in, not reading Sentinel data',
      'Assign Microsoft Sentinel Reader at Workspace1 scope for least-privilege reads',
    ],
    referenceTopic: 'Security Copilot & Microsoft Sentinel Azure RBAC 連携',
  },
  {
    id: 'pdf-q60',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '外部ゲスト アカウントによる Sentinel インシデントの担当者割り当て権限',
    titleEn: 'Granting a Guest User Permission to Assign Microsoft Sentinel Incidents',
    scenarioJa: `Workspace1 という名前の Microsoft Sentinel ワークスペースがあります。外部のセキュリティ コンサルタントを雇用し、Microsoft Entra テナントで User1 という名前のゲスト アカウントを提供します。
User1 が Workspace1 でインシデントを担当者に割り当てられるようにする必要があります。`,
    scenarioEn: `You have a Microsoft Sentinel workspace named Workspace1. You hire an external security consultant and provide a guest account named User1 in your Microsoft Entra tenant.
You need to ensure User1 can assign incidents in Workspace1.`,
    questionJa: 'User1 に割り当てるべき Microsoft Entra ロールと Azure ロールの組み合わせを1つ選んでください。',
    questionEn: 'Which Microsoft Entra role and Azure role combination should you assign to User1?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Entra ロール：セキュリティ閲覧者 (Security Reader)／Azure ロール：Microsoft Sentinel レスポンダー (Microsoft Sentinel Responder)',
        textEn: 'Entra role: Security Reader / Azure role: Microsoft Sentinel Responder',
        isCorrect: false,
        explanationJa: '【不正解】テナント全体のセキュリティ情報を広く閲覧できる Security Reader は過剰であり、担当者検索にはディレクトリ閲覧者で十分です。',
        explanationEn: 'Security Reader provides unnecessarily broad security posture access compared to Directory Readers.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Entra ロール：セキュリティ管理者 (Security Administrator)／Azure ロール：Microsoft Sentinel 閲覧者 (Microsoft Sentinel Reader)',
        textEn: 'Entra role: Security Administrator / Azure role: Microsoft Sentinel Reader',
        isCorrect: false,
        explanationJa: '【不正解】Sentinel 閲覧者はインシデントの所有者を更新（割り当て）できません。',
        explanationEn: 'Microsoft Sentinel Reader is read-only and cannot assign incidents.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Entra ロール：ディレクトリ閲覧者 (Directory Reader)／Azure ロール：Microsoft Sentinel 閲覧者 (Microsoft Sentinel Reader)',
        textEn: 'Entra role: Directory Reader / Azure role: Microsoft Sentinel Reader',
        isCorrect: false,
        explanationJa: '【不正解】閲覧者ロールではインシデントの所有者を変更できないため、Sentinel レスポンダーが必要です。',
        explanationEn: 'Sentinel Reader cannot modify incident ownership; Microsoft Sentinel Responder is required.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Entra ロール：セキュリティ閲覧者 (Security Reader)／Azure ロール：Microsoft Sentinel 共同作成者 (Microsoft Sentinel Contributor)',
        textEn: 'Entra role: Security Reader / Azure role: Microsoft Sentinel Contributor',
        isCorrect: false,
        explanationJa: '【不正解】Sentinel 共同作成者は分析ルールやプレイブック構成まで変更でき過剰です。',
        explanationEn: 'Sentinel Contributor allows editing analytics rules and configurations, exceeding incident assignment needs.',
      },
      {
        id: 'E',
        textJa: 'Microsoft Entra ロール：ディレクトリ閲覧者 (Directory Reader)／Azure ロール：Microsoft Sentinel レスポンダー (Microsoft Sentinel Responder)',
        textEn: 'Entra role: Directory Reader / Azure role: Microsoft Sentinel Responder',
        isCorrect: true,
        explanationJa: '【正解】ゲスト ユーザーは既定で他のテナント内ユーザーの一覧参照権限が制限されているため、担当者候補を検索できるよう Entra の「ディレクトリ閲覧者」を付与し、インシデントの割り当て・状態更新用として Azure の「Microsoft Sentinel レスポンダー」を付与します。',
        explanationEn: 'Directory Reader lets the guest look up users to assign incidents to, and Microsoft Sentinel Responder permits updating incident owners and statuses without rule-editing rights.',
      },
      {
        id: 'F',
        textJa: 'Microsoft Entra ロール：セキュリティ管理者 (Security Administrator)／Azure ロール：Microsoft Sentinel 共同作成者 (Microsoft Sentinel Contributor)',
        textEn: 'Entra role: Security Administrator / Azure role: Microsoft Sentinel Contributor',
        isCorrect: false,
        explanationJa: '【不正解】Entra 側・Azure 側ともに必要以上の広範な管理権限を与えています。',
        explanationEn: 'Both roles grant overly broad administrative privileges.',
      },
    ],
    overallExplanationJa: `外部ゲストが Sentinel インシデントを担当者に割り当てるには、(1) 担当者候補をディレクトリ検索できる「ディレクトリ閲覧者 (Directory Reader)」と、(2) インシデントを更新できる「Microsoft Sentinel レスポンダー」の2つが必要です。`,
    overallExplanationEn: `Guest accounts have restricted directory visibility by default; assigning Directory Reader allows searching assignees, and Microsoft Sentinel Responder enables incident assignment.`,
    keyPointsJa: [
      'ゲストのユーザー一覧参照（既定制限の解除）→ Directory Reader',
      'インシデントの割り当て・トリアージ操作 → Microsoft Sentinel Responder',
      '分析ルール作成権限を含む Sentinel Contributor や閲覧専用の Reader と区別',
    ],
    keyPointsEn: [
      'Guest directory lookup -> Directory Reader',
      'Incident assignment and status updates -> Microsoft Sentinel Responder',
    ],
    referenceTopic: 'Microsoft Sentinel ゲスト ユーザー権限設計',
  },
];
