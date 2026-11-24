import { PdfQuestionSeed } from './pdfCaseStudies';

export const SAKITOO_QUESTIONS_PART5: PdfQuestionSeed[] = [
  {
    id: 'sakitoo-q81',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Virtual Machine Contributor ロールの権限制約（RBAC 割り当て不可）',
    titleEn: 'Scope Limits of the Virtual Machine Contributor Built-In RBAC Role',
    scenarioJa:
      '運用担当グループに対して、Azure 仮想マシンの日々の運用・サイズ変更・再起動・ディスク構成管理を行わせるため、Azure RBAC 組み込みロール「Virtual Machine Contributor」をリソース グループ スコープで割り当てました。運用担当者が誤って他ユーザーへアクセス権を付与できないか検証しています。',
    scenarioEn:
      'An operations group is assigned the built-in Virtual Machine Contributor RBAC role on a resource group to manage VM lifecycle, disks, and networking, while preventing them from delegating permissions to other identities.',
    questionJa:
      'Azure VM にロールベース アクセス制御（RBAC）で「Virtual Machine Contributor」を割り当てた場合、割り当て先が実行できないことはどれですか？',
    questionEn:
      'When the built-in Virtual Machine Contributor RBAC role is assigned to an Azure VM, which action is the assignee NOT permitted to perform?',
    options: [
      {
        id: 'A',
        textJa: '管理ディスクのサイズ変更・拡張',
        textEn: 'Expand or resize attached managed disks',
        isCorrect: false,
        explanationJa:
          'Virtual Machine Contributor には `Microsoft.Compute/*`（ディスク操作やサイズ変更など）および関連するネットワーク・ストレージ操作権限が含まれるため実行可能です。',
        explanationEn:
          'Virtual Machine Contributor grants compute and storage permissions needed to resize or expand attached disks.',
      },
      {
        id: 'B',
        textJa: 'VM の OS ディスク構成の変更',
        textEn: 'Swap or modify the VM OS disk configuration',
        isCorrect: false,
        explanationJa:
          'VM 構成の変更や OS ディスクのスワップ等を含むコンピューティング リソース管理権限を保持しています。',
        explanationEn:
          'Modifying VM disk attachments and OS disk properties is permitted under Microsoft.Compute/virtualMachines/write.',
      },
      {
        id: 'C',
        textJa: 'VM の起動・停止・再起動操作',
        textEn: 'Start, stop, or restart the virtual machine',
        isCorrect: false,
        explanationJa:
          'VM の起動・停止・再起動・割り当て解除は Virtual Machine Contributor の基本的な管理操作に含まれます。',
        explanationEn:
          'Starting, stopping, restarting, and deallocating VMs are core Virtual Machine Contributor operations.',
      },
      {
        id: 'D',
        textJa: 'VM への Azure RBAC ロール割り当て',
        textEn: 'Assign Azure RBAC roles to the VM',
        isCorrect: true,
        explanationJa:
          'Virtual Machine Contributor には VM の作成・構成変更・電源管理の権限がありますが、`Microsoft.Authorization/roleAssignments/write` 権限を持たないため、他のユーザーやグループに対して Azure RBAC ロールを付与・変更すること（Owner や User Access Administrator の役割）はできません。',
        explanationEn:
          'Like other Contributor roles, Virtual Machine Contributor lacks Microsoft.Authorization/roleAssignments/write permissions and therefore cannot assign or modify Azure RBAC roles on the VM (which requires Owner or User Access Administrator).',
      },
    ],
    overallExplanationJa:
      'Azure RBAC の原則として、「Contributor」系ロールはデータ管理やロール割り当て権限（`Microsoft.Authorization/*`）を含みません。VM へのアクセス権の委任・ロール付与まで許可したい場合は「Owner」または「User Access Administrator」（あるいは「Role Based Access Control Administrator」）が必要であり、CIEM の最小権限設計でも重要な区別となります。',
    overallExplanationEn:
      'Contributor roles manage resources without managing Azure RBAC authorization (`Microsoft.Authorization/roleAssignments/*`). Only Owner, User Access Administrator, or Role Based Access Control Administrator can assign roles.',
    keyPointsJa: [
      'Virtual Machine Contributor は VM・ディスク・NIC の管理はできるが、Azure RBAC の割り当て変更は不可',
      'RBAC の割り当て変更には Owner または User Access Administrator / RBAC Administrator が必要',
    ],
    keyPointsEn: [
      'Virtual Machine Contributor excludes Microsoft.Authorization/roleAssignments/*',
      'Virtual Machine Contributor also grants VM management without Azure Portal VM Guest OS sign-in roles unless explicitly assigned',
    ],
    referenceTopic: 'Azure 組み込みロール - Virtual Machine Contributor',
  },
  {
    id: 'sakitoo-q82',
    domain: 'Defender XDR & 統合SecOps',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Servers に統合された EDR エンジン（MDE）',
    titleEn: 'Integrated EDR Product Within Microsoft Defender for Servers',
    scenarioJa:
      'Microsoft Defender for Cloud の「Defender for Servers（Plan 1 または Plan 2）」をサブスクリプションで有効化し、Azure VM および Azure Arc 接続済みオンプレミス サーバーに対してエンドポイントの振る舞い検知、プロセス監視、脅威封じ込め（EDR）を展開したいと考えています。',
    scenarioEn:
      'You enable Microsoft Defender for Servers (Plan 1 or Plan 2) in Defender for Cloud to deploy behavioral endpoint detection and response (EDR) and threat containment across Azure VMs and Arc-enabled servers.',
    questionJa:
      'Defender for Servers のエンドポイント検出・応答（EDR）機能として統合されている Microsoft セキュリティ製品はどれですか？',
    questionEn:
      'Which Microsoft security product provides the integrated EDR (Endpoint Detection and Response) capability inside Defender for Servers?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Identity',
        textEn: 'Microsoft Defender for Identity',
        isCorrect: false,
        explanationJa:
          'Defender for Identity はオンプレミス Active Directory ドメイン コントローラー／AD FS 等の ID 基盤攻撃を検知する製品であり、汎用サーバー向け EDR ではありません。',
        explanationEn:
          'Defender for Identity protects Active Directory Domain Services and identity infrastructure rather than acting as a general server EDR.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Sentinel',
        textEn: 'Microsoft Sentinel',
        isCorrect: false,
        explanationJa:
          'Microsoft Sentinel は SIEM/SOAR プラットフォームであり、サーバー上に展開される EDR エージェントではありません。',
        explanationEn:
          'Microsoft Sentinel is a cloud SIEM/SOAR platform rather than an endpoint EDR sensor.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Defender for Endpoint',
        textEn: 'Microsoft Defender for Endpoint',
        isCorrect: true,
        explanationJa:
          'Defender for Servers（Plan 1 / Plan 2 双方）には Microsoft Defender for Endpoint（MDE）サーバー ライセンスが含まれており、自動プロビジョニング機能を有効にすることで Azure VM や Arc 接続サーバーに MDE.Windows / MDE.Linux 拡張機能が自動展開され、Defender ポータルでの EDR 調査・ホスト隔離が可能になります。',
        explanationEn:
          'Microsoft Defender for Servers includes Microsoft Defender for Endpoint (MDE) for servers. Automatic provisioning deploys the MDE extension to Windows and Linux VMs (and Arc-enabled servers), feeding EDR alerts and device isolation directly into Microsoft Defender XDR.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Office 365',
        textEn: 'Microsoft Defender for Office 365',
        isCorrect: false,
        explanationJa:
          'Defender for Office 365 はメールや Teams、SharePoint のコラボレーション脅威防御製品です。',
        explanationEn:
          'Defender for Office 365 protects email and Microsoft 365 collaboration tools, not server endpoints.',
      },
    ],
    overallExplanationJa:
      'Defender for Servers を有効化する最大の利点の 1 つが「MDE 自動オンボーディング統合」です。さらに Plan 2 では MDE に加えてファイル整合性監視（FIM）、JIT VM アクセス、エージェントレス スキャン、適応型アプリ制御・ネットワーク強化などの高度なサーバー保護が解放されます。',
    overallExplanationEn:
      'Integrating MDE directly inside Defender for Servers removes separate licensing friction and ensures every new Azure or Arc server is automatically onboarded to Defender XDR for EDR and vulnerability management.',
    keyPointsJa: [
      'Defender for Servers（P1 / P2）の EDR エンジン ＝ Microsoft Defender for Endpoint（MDE）',
      'MDE.Windows / MDE.Linux 拡張機能の自動プロビジョニングにより、新規 VM へも自動で EDR が有効化される',
    ],
    keyPointsEn: [
      'Defender for Servers embeds Microsoft Defender for Endpoint (MDE) for both Plan 1 and Plan 2',
      'Direct MDE onboarding enables Defender XDR device isolation, timeline, and live response on servers',
    ],
    referenceTopic: 'Defender for Servers によるエンドポイント保護（MDE 統合）',
  },
  {
    id: 'sakitoo-q83',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure IaC テンプレートへのセキュリティ組み込みと Defender for DevOps スキャン',
    titleEn: 'Embedding Security Controls in IaC Templates and Scanning with Defender for DevOps',
    scenarioJa:
      'Azure 環境のインフラを ARM テンプレート、Bicep、Terraform などの IaC（Infrastructure as Code）を用いて継続的にプロビジョニングしています。設定ミスのあるストレージや過剰なネットワーク公開が本番環境へデプロイされる前に防ぐ、セキュリティのベスト プラクティスを確立したいと考えています。',
    scenarioEn:
      'Your platform team provisions Azure infrastructure via ARM, Bicep, and Terraform templates. You need a shift-left best practice to ensure security misconfigurations are caught before resources reach production.',
    questionJa:
      'Azure のインフラストラクチャ・アズ・コード（IaC）でセキュリティ コントロールを実装する際の推奨プラクティスはどれですか？',
    questionEn:
      'What is the recommended practice for implementing security controls in Azure Infrastructure as Code (IaC)?',
    options: [
      {
        id: 'A',
        textJa: 'すべてのセキュリティ設定をポータルからデプロイごとに手動で適用する',
        textEn: 'Apply all security settings manually in the Azure portal after deployment',
        isCorrect: false,
        explanationJa:
          '手動適用は人的ミスや構成ドリフトを招き、次回の IaC デプロイで上書きされてしまうため非推奨です。',
        explanationEn:
          'Manual portal edits cause configuration drift and get overwritten on subsequent IaC deployments.',
      },
      {
        id: 'B',
        textJa: 'デプロイ完了を待ってから後から手動でセキュリティ設定を追加変更する',
        textEn: 'Add and harden security controls manually only after deployment finishes',
        isCorrect: false,
        explanationJa:
          'デプロイ完了から設定修正までの間に無防備な露出ウィンドウが生じ、シフトレフトの原則に反します。',
        explanationEn:
          'Post-deployment manual fixes leave an exposed window before hardening is applied.',
      },
      {
        id: 'C',
        textJa: 'IaC テンプレートには運用構成のみを記述しセキュリティ設定は含めない',
        textEn: 'Keep IaC templates limited to compute and exclude security settings',
        isCorrect: false,
        explanationJa:
          '暗号化、TLS バージョン、パブリック アクセス無効化、RBAC などのセキュリティ設計こそコードとしてバージョン管理すべきです。',
        explanationEn:
          'Security controls belong directly inside version-controlled IaC templates.',
      },
      {
        id: 'D',
        textJa: 'テンプレートにセキュリティを組み込み Defender for DevOps で検査する',
        textEn: 'Embed security controls in IaC templates and scan with Defender for DevOps',
        isCorrect: true,
        explanationJa:
          'セキュリティ・バイ・デザインおよびシフトレフトの原則に基づき、マネージド ID・プライベート エンドポイント・TLS/暗号化設定などを IaC テンプレート自体に組み込んだ上で、GitHub や Azure DevOps パイプライン上で Microsoft Security DevOps CLI / Defender for DevOps を用いて自動静的解析し、デプロイ前に設定誤りを遮断するのが推奨プラクティスです。',
        explanationEn:
          'Recommended practice is Security by Design + Shift Left: encode encryption, managed identities, and network isolation directly in ARM/Bicep/Terraform templates, then scan repositories and pull requests continuously with Defender for DevOps.',
      },
    ],
    overallExplanationJa:
      'さらにデプロイ先のクラウド側では Azure Policy（Deny / DeployIfNotExists）をガードレールとして併用することで、「開発段階（Defender for DevOps）＋デプロイ関門（Azure Policy）＋運用時（Defender CSPM）」の多層統制が完成します。',
    overallExplanationEn:
      'Combining hardened IaC templates, Defender for DevOps pipeline scanning, and Azure Policy guardrails ensures misconfigurations are blocked both pre-deployment and at control-plane admission.',
    keyPointsJa: [
      'IaC（ARM / Bicep / Terraform）に最初から最小権限・暗号化・閉域化設定をコード化する',
      'Defender for DevOps（MSDO 拡張）で PR 時に自動スキャンし、本番流出を未然防止する',
    ],
    keyPointsEn: [
      'Encode security baselines directly into ARM, Bicep, and Terraform templates',
      'Scan pull requests and repos using Microsoft Defender for DevOps prior to deployment',
    ],
    referenceTopic: 'Defender for DevOps による IaC スキャンとシフトレフト セキュリティ',
  },
  {
    id: 'sakitoo-q84',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ランサムウェア対策としての Azure Backup 保護強化（不変性・ソフト削除・MFA）',
    titleEn: 'Hardening Azure Backup Vaults Against Ransomware in Defender for Cloud',
    scenarioJa:
      'ランサムウェア攻撃者が侵入後に管理者権限を奪取し、サーバー暗号化と同時に Recovery Services コンテナー内のバックアップ データ自体を削除・改ざんして復旧を妨害する攻撃が増えています。Defender for Cloud の推奨事項に沿って Azure Backup の耐障害性を強化する必要があります。',
    scenarioEn:
      'Ransomware actors often attempt to delete or tamper with Recovery Services vault backups before encrypting VMs. You need to harden Azure Backup following Microsoft Defender for Cloud recommendations.',
    questionJa:
      'Azure VM のバックアップを Azure Backup で保護する際に Defender for Cloud のバックアップ保護機能で設定できるセキュリティ強化はどれですか？',
    questionEn:
      'Which security hardening capabilities are recommended and supported by Defender for Cloud for protecting Azure VM backups in Azure Backup?',
    options: [
      {
        id: 'A',
        textJa: 'ストレージ階層を見直してバックアップの保存コストと課金額を削減する',
        textEn: 'Optimize backup storage tiers to reduce monthly retention and vault costs',
        isCorrect: false,
        explanationJa:
          'ストレージ課金の最適化はコスト管理であり、バックアップ データの悪意ある削除防止策ではありません。',
        explanationEn:
          'Storage cost tuning is unrelated to ransomware deletion protection.',
      },
      {
        id: 'B',
        textJa: '業務ピークを避けるようにバックアップの実行スケジュールを最適化する',
        textEn: 'Adjust backup schedules and retention windows to avoid business peak hours',
        isCorrect: false,
        explanationJa:
          '取得頻度の最適化は RPO 要件に関わる設定であり、コンテナー破壊防止ではありません。',
        explanationEn:
          'Backup frequency addresses RPO rather than protecting vaults against malicious deletion.',
      },
      {
        id: 'C',
        textJa: 'コンテナーのソフト削除・多要素認証（MFA）・不変ポリシーを有効化する',
        textEn: 'Enable vault soft delete, MUA/MFA checks, and immutable backup policies',
        isCorrect: true,
        explanationJa:
          'Defender for Cloud および Azure Backup セキュリティでは、バックアップ削除を少なくとも 14 日以上保護する「ソフト削除（Soft Delete / 論理削除・Always-on）」、重要操作への複数承認者要求／MFA（MUA：Multi-User Authorization with Resource Guard）、および保持期間短縮や削除を一切禁止する「不変コンテナー（Immutable Vault）」を組み合わせて悪意ある破壊を防御します。',
        explanationEn:
          'Azure Backup security hardening includes Soft Delete (keeping deleted backup data recoverable), Multi-User Authorization (MUA) / MFA protection on destructive operations, and Immutable Vault policies that prevent deletion or retention reduction.',
      },
      {
        id: 'D',
        textJa: 'バックアップ データを災害復旧用に自動的に別リージョンへ複製する',
        textEn: 'Automatically replicate vault backup data across paired Azure regions',
        isCorrect: false,
        explanationJa:
          'Geo 冗長（GRS）と Cross-Region Restore（CRR）はリージョン障害（災害復旧）向けであり、管理者権限悪用による論理的な削除操作を防ぐセキュリティ強化とは異なります。',
        explanationEn:
          'Geo-redundancy protects against regional outages rather than malicious administrative deletion.',
      },
    ],
    overallExplanationJa:
      'ランサムウェア対策の 3 大原則は「ソフト削除の常時有効化（およびロック）」「不変性（Immutable Vault）のロック設定」「重要操作に対する Multi-User Authorization（別のリソース ガードによる二要素的承認分離）」です。',
    overallExplanationEn:
      'Defending backups against compromised privileged admins relies on Soft Delete (always-on), locked Immutable Vaults, and Multi-User Authorization (MUA) via an isolated Azure Backup Resource Guard.',
    keyPointsJa: [
      'バックアップ破壊対策の要＝「ソフト削除」「重要操作の追加認証／MUA」「不変ポリシー（Immutable Vault）」',
      '不変性ロックを有効にすると、最上位の全体管理者であっても有効期限前にバックアップを削除・短縮できなくなる',
    ],
    keyPointsEn: [
      'Key anti-ransomware backup controls: Soft Delete, MFA/MUA (Resource Guard), and Immutable Vault',
      'Once locked, Immutable Vaults block even Subscription Owners from reducing retention or deleting backups',
    ],
    referenceTopic: 'Azure Backup のセキュリティ機能とランサムウェア保護',
  },
  {
    id: 'sakitoo-q85',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Entra Agent ID の条件付きアクセスにおけるワークロード ID としての制御',
    titleEn: 'Governing Entra Agent IDs Using Conditional Access for Workload Identities',
    scenarioJa:
      '社内で自律型 AI エージェントを展開するため、Microsoft Entra でエージェント専用の ID（Entra Agent ID）を発行しました。このエージェントが不正なネットワークや意図しないクラウド サービスへアクセスできないよう、条件付きアクセス ポリシーで制御を適用したいと考えています。',
    scenarioEn:
      'Your organization provisions Microsoft Entra Agent IDs for autonomous AI agents and needs to enforce Conditional Access policies restricting which IP locations and cloud apps those agents may access.',
    questionJa:
      'Entra Agent ID で条件付きアクセスを設定する場合、エージェント ID をどのように扱いますか？',
    questionEn:
      'How are Entra Agent IDs treated when configuring Microsoft Entra Conditional Access policies?',
    options: [
      {
        id: 'A',
        textJa: 'エージェント ID は非人間アカウントのため条件付きアクセスを適用できない',
        textEn: 'Agent IDs cannot be targeted by Conditional Access policies at all',
        isCorrect: false,
        explanationJa:
          'ワークロード ID 向け条件付きアクセスを用いて、アクセス先リソース制限やネームド ロケーション（IP）制限、リスクベース遮断を適用可能です。',
        explanationEn:
          'Conditional Access for Workload Identities explicitly supports governing non-human identities and service principals.',
      },
      {
        id: 'B',
        textJa: 'エージェントの自動化処理を止めないよう管理者相当の例外として特別扱いする',
        textEn: 'Exempt Agent IDs from Conditional Access like emergency admin accounts',
        isCorrect: false,
        explanationJa:
          'エージェント ID に特権バイパスを与えるべきではなく、ゼロトラストに基づき厳格な検証・スコープ制限を行います。',
        explanationEn:
          'AI agents should follow strict least privilege and Zero Trust verification, never privileged bypasses.',
      },
      {
        id: 'C',
        textJa: '通常の人間ユーザーと同じように扱い毎回対話型の多要素認証（MFA）を要求する',
        textEn: 'Treat Agent IDs as human users and require interactive MFA prompts',
        isCorrect: false,
        explanationJa:
          '自律型 AI エージェントやサービス プリンシパルは対話型認証（人間のパスワード＋SMS/Authenticator MFA 応答）を行えないため、通常の対話型 MFA グラントは適合しません。',
        explanationEn:
          'Non-human agent/workload identities cannot complete interactive human MFA prompts.',
      },
      {
        id: 'D',
        textJa: 'ワークロード ID として扱い IP 制限やサービス プリンシパル向けポリシーを適用する',
        textEn: 'Treat them as workload identities and apply IP and resource policies',
        isCorrect: true,
        explanationJa:
          'Microsoft Entra Agent ID（AI エージェント用の非人間 ID）はワークロード ID の枠組みで管理され、「ワークロード ID 向けの条件付きアクセス（Conditional Access for Workload Identities）」を使用して、許可された名前付きロケーション（送信元 IP）からの通信のみ許可したり、ID 保護のサービス プリンシパル リスク検出時にブロックしたりできます。',
        explanationEn:
          'Microsoft Entra Agent IDs are governed under Entra Workload Identities. Administrators apply Conditional Access for Workload Identities to enforce trusted IP location fences, restrict reachable target apps, and block compromised high-risk service principals.',
      },
    ],
    overallExplanationJa:
      'AI エージェントが自律的に外部 API や企業リソースを操作する時代において、人間の「User Conditional Access（MFA やデバイス準拠）」と非人間の「Workload Identity Conditional Access（送信元 IP・リスクレベル・対象アプリ制限）」の区別が試験上の重要ポイントです。',
    overallExplanationEn:
      'Unlike human users verified with MFA and device compliance, AI agent identities use Conditional Access for Workload Identities (Microsoft Entra Workload ID license) to enforce network origin and risk-based controls.',
    keyPointsJa: [
      'Entra Agent ID ＝ 非人間の「ワークロード ID」として取り扱い、対話型 MFA ではなく IP 制限・リスク制御を適用',
      'Conditional Access for Workload Identities により不正リージョンや侵害時の自動遮断を実現',
    ],
    keyPointsEn: [
      'Entra Agent IDs are workload identities governed via Workload Identity Conditional Access policies',
      'Uses named IP locations and service principal risk levels instead of interactive human MFA',
    ],
    referenceTopic: 'ワークロード ID の条件付きアクセスと Entra Agent ID ガバナンス',
  },
  {
    id: 'sakitoo-q86',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Container Registry (ACR) イメージの自動脆弱性スキャン',
    titleEn: 'Automating Vulnerability Scanning for ACR Container Images',
    scenarioJa:
      '開発チームが CI/CD パイプラインから Azure Container Registry（ACR）へ新しい Docker コンテナ イメージを継続的にプッシュしています。イメージ内の OS パッケージやアプリケーション ライブラリ（npm / Python / Go 等）に既知の CVE 脆弱性が含まれていないか自動スキャンする仕組みを導入する必要があります。',
    scenarioEn:
      'Your development teams continuously push container images to Azure Container Registry (ACR). You need automated vulnerability scanning covering both OS packages and language-specific libraries (npm, Python, Go, etc.).',
    questionJa:
      'Azure Container Registry（ACR）に保存されたコンテナ イメージの脆弱性スキャンを自動化するサービスはどれですか？',
    questionEn:
      'Which service automates vulnerability scanning for container images stored in Azure Container Registry (ACR)?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Policy',
        textEn: 'Azure Policy',
        isCorrect: false,
        explanationJa:
          'Azure Policy はデプロイ時の構成コンプライアンスや AKS Admission 制御（Gatekeeper）を評価しますが、ACR 内イメージのバイナリ・CVE パッケージ スキャン機能自体は持ちません。',
        explanationEn:
          'Azure Policy governs ARM/Kubernetes compliance rules rather than scanning container image layers for CVEs.',
      },
      {
        id: 'B',
        textJa: 'Azure Security Center',
        textEn: 'Azure Security Center',
        isCorrect: false,
        explanationJa:
          'Azure Security Center は過去のブランド名称であり、現在の ACR スキャンは Microsoft Defender for Containers（Defender for Container Registries）が担います。',
        explanationEn:
          'Azure Security Center is the legacy product name, replaced by Microsoft Defender for Cloud / Defender for Containers.',
      },
      {
        id: 'C',
        textJa: 'Azure Monitor',
        textEn: 'Azure Monitor',
        isCorrect: false,
        explanationJa:
          'Azure Monitor はメトリックやログの監視サービスであり、コンテナ イメージ脆弱性評価サービスではありません。',
        explanationEn:
          'Azure Monitor collects telemetry and logs rather than scanning container images for vulnerabilities.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Containers',
        textEn: 'Microsoft Defender for Containers',
        isCorrect: true,
        explanationJa:
          'Microsoft Defender for Containers（エージェントレス脆弱性評価機能）を有効にすると、ACR へのイメージ プッシュ、最近プルされたイメージ、または稼働中クラスターで使用中のイメージに対して MDVM エンジンによる継続的スキャンが自動実行され、OS および言語パッケージの CVE と修正アドバイスを検出します。',
        explanationEn:
          'Enabling Microsoft Defender for Containers automatically triggers agentless Microsoft Defender Vulnerability Management (MDVM) scanning whenever images are pushed to ACR, pulled recently, or running in clusters, surfacing both OS and language-package CVEs.',
      },
    ],
    overallExplanationJa:
      'Defender for Containers によるレジストリ スキャンはエージェントレスで動作し、ACR のみならず AWS ECR や GCP Artifact Registry のマルチクラウド コンテナ イメージも統一された基準で脆弱性評価できます。',
    overallExplanationEn:
      'Defender for Containers performs agentless MDVM registry scanning not only on Azure Container Registry (ACR), but also across AWS ECR and GCP Artifact Registry in multi-cloud deployments.',
    keyPointsJa: [
      'ACR の自動脆弱性スキャン ＝ Microsoft Defender for Containers（MDVM エージェントレス スキャン）',
      'プッシュ時・最近プルされたイメージ・実行中イメージを対象に、OS＋アプリケーション パッケージの CVE を検出',
    ],
    keyPointsEn: [
      'ACR vulnerability scanning = Microsoft Defender for Containers powered by MDVM',
      'Scans images on push, recent pull, and running workloads agentlessly',
    ],
    referenceTopic: 'Microsoft Defender for Containers によるコンテナ イメージの脆弱性評価',
  },
  {
    id: 'sakitoo-q87',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Policy の AuditIfNotExists と DeployIfNotExists による監査・自動修復',
    titleEn: 'Enforcing and Remediating App Service HTTPS-Only with Azure Policy Effects',
    scenarioJa:
      '組織内の全 Azure App Service（Web Apps）に対して「HTTPS のみ（HTTPS Only）」設定を強制したいと考えています。既存の非準拠 App Service については監査で検出しつつ、修復タスクを実行して自動的に設定を有効化できるポリシー効果を設計する必要があります。',
    scenarioEn:
      'You need an Azure Policy definition that evaluates whether all Azure App Services have HTTPS-Only enabled and automatically remediates non-compliant apps via remediation tasks.',
    questionJa:
      'App Service で HTTPS のみを強制する設定を Azure Policy で確認・修復する場合、使用するポリシー効果はどれですか？',
    questionEn:
      'Which Azure Policy effects are used to detect and automatically remediate missing HTTPS-Only configurations on App Service?',
    options: [
      {
        id: 'A',
        textJa: 'Append + Modify（作成時の構成値追加・変更）',
        textEn: 'Append + Modify (creation-time updates)',
        isCorrect: false,
        explanationJa:
          'Append はリソース作成・更新時に特定フィールド値を追加する効果であり、既存リソースへの修復タスクや関連プロパティ評価には向いていません。',
        explanationEn:
          'Append adds fields during resource creation/update and does not run post-hoc remediation tasks.',
      },
      {
        id: 'B',
        textJa: 'AuditIfNotExists + DeployIfNotExists',
        textEn: 'AuditIfNotExists + DeployIfNotExists',
        isCorrect: true,
        explanationJa:
          'Azure Policy において、対象または関連設定の欠如を検出してコンプライアンス状態を可視化するには `AuditIfNotExists`（または `Audit`）、そして検出した非準拠の既存／新規リソースに対してマネージド ID を用いたテンプレート展開（修復タスク）で自動的に HTTPS Only を有効化するには `DeployIfNotExists` を使用します。',
        explanationEn:
          'AuditIfNotExists evaluates missing configurations for compliance visibility, while DeployIfNotExists evaluates compliance and deploys an ARM remediation template (via Managed Identity) to automatically enable HTTPS-Only on existing and new App Services.',
      },
      {
        id: 'C',
        textJa: 'Disabled + Audit（評価停止と監査ログ記録のみ）',
        textEn: 'Disabled + Audit (pause or log checks)',
        isCorrect: false,
        explanationJa:
          'Disabled はポリシー評価自体を無効化する効果であり、確認も修復も行いません。',
        explanationEn:
          'Disabled turns off policy evaluation entirely.',
      },
      {
        id: 'D',
        textJa: 'Deny + Append（非準拠作成の拒否と設定追記のみ）',
        textEn: 'Deny + Append (block or append values)',
        isCorrect: false,
        explanationJa:
          'Deny は非準拠の新規作成・更新をデプロイ時点でブロックしますが、既に存在する非準拠リソースを後から自動修復（Remediate）する機能はありません。',
        explanationEn:
          'Deny blocks new non-compliant deployments at admission time, but it cannot remediate pre-existing resources.',
      },
    ],
    overallExplanationJa:
      'Azure Policy 効果の使い分けは頻出テーマです。「ブロックしたい → Deny」「設定値をデプロイ時に書き換えたい → Modify / Append」「関連設定の有無を検査しつつ後から自動修復したい → AuditIfNotExists / DeployIfNotExists」と整理して覚えましょう。',
    overallExplanationEn:
      'Key Azure Policy effects distinction: Deny blocks creation/modification; Modify/Append alters fields inline at PUT time; AuditIfNotExists inspects; DeployIfNotExists inspects and runs Managed Identity remediation templates.',
    keyPointsJa: [
      '確認＋修復要件には AuditIfNotExists（検査・監査）と DeployIfNotExists（自動修復・展開）を組み合わせる',
      'DeployIfNotExists の修復タスク実行には、ポリシー割り当て側のマネージド ID と適切な RBAC ロールが必要',
    ],
    keyPointsEn: [
      'AuditIfNotExists audits compliance; DeployIfNotExists supports automated remediation tasks',
      'DeployIfNotExists remediation tasks require a system/user-assigned Managed Identity with contributor scope',
    ],
    referenceTopic: 'Azure Policy の効果（AuditIfNotExists / DeployIfNotExists）の理解',
  },
  {
    id: 'sakitoo-q88',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Purview DSPM Data and AI Security Dashboard の監視項目',
    titleEn: 'Monitoring AI Exposure and DLP Risks in Purview Data and AI Security Dashboard',
    scenarioJa:
      '社内で Microsoft 365 Copilot およびサードパーティ製生成 AI アプリが広く利用され始めました。情報セキュリティ責任者から、Copilot がアクセスしたファイルの中で DLP ポリシー違反や過剰共有が発生していないか、また機密コンテンツがどの程度 AI インタラクションに晒されているかを定常監視するダッシュボードを求められています。',
    scenarioEn:
      'Microsoft 365 Copilot and third-party generative AI apps are in active use. Security leadership needs a unified dashboard tracking DLP violations on files accessed by Copilot, overshared repositories, and sensitive content exposure risks.',
    questionJa:
      'Microsoft Purview DSPM の Data and AI Security Dashboard で AI セキュリティを監視する際に確認できる項目はどれですか？',
    questionEn:
      'What metrics and risks can you inspect on the Microsoft Purview DSPM Data and AI Security Dashboard?',
    options: [
      {
        id: 'A',
        textJa: 'AI モデルの学習・推論にかかる Azure コンピューティング コストと課金額',
        textEn: 'Compute billing costs and token spend for training custom AI models',
        isCorrect: false,
        explanationJa:
          'GPU 学習コストなどは Azure Cost Management の領域であり、Purview DSPM の管轄外です。',
        explanationEn:
          'Model training costs are tracked in Azure Cost Management, not Purview DSPM.',
      },
      {
        id: 'B',
        textJa: 'Copilot が参照したファイルの DLP 違反・過剰共有・機密露出リスク',
        textEn: 'DLP violations on Copilot files, overshared sites, and sensitive risks',
        isCorrect: true,
        explanationJa:
          'Microsoft Purview DSPM（Data Security Posture Management）の Data and AI Security ダッシュボードでは、Microsoft 365 Copilot や生成 AI アプリが参照・処理したファイルに対する DLP ポリシー一致、機密情報の種類（SIT）・ラベル別の AI アクセス件数、ゲスト／全社共有などの過剰共有リスク、さらに推奨データ セキュリティ対策（One-click policies）を一元確認できます。',
        explanationEn:
          'Purview DSPM (and DSPM for AI) surfaces overshared SharePoint/OneDrive data at risk of Copilot grounding, DLP policy hits involving AI apps/prompts, sensitive info type exposure in AI interactions, and guided posture recommendations.',
      },
      {
        id: 'C',
        textJa: '組織内の Microsoft 365 Copilot ライセンス割り当てと月間稼働状況',
        textEn: 'Microsoft 365 Copilot seat license assignments and active monthly usage',
        isCorrect: false,
        explanationJa:
          'ライセンス割り当て状況やアクティブ利用数レポートは Microsoft 365 管理センターや Viva Insights の役割です。',
        explanationEn:
          'License utilization reports live in the Microsoft 365 admin center.',
      },
      {
        id: 'D',
        textJa: '生成 AI モデルの応答精度やハルシネーション率に関する品質メトリクス',
        textEn: 'LLM response accuracy, F1 scores, and hallucination evaluation metrics',
        isCorrect: false,
        explanationJa:
          'モデルの精度・応答品質評価は Azure AI Foundry Evaluation 等の領域です。',
        explanationEn:
          'Model accuracy metrics are evaluated in AI Foundry evaluation pipelines, not Purview DSPM.',
      },
    ],
    overallExplanationJa:
      'Microsoft Purview DSPM は従来のデータ分類・DLP ダッシュボードと DSPM for AI 機能を統合し、「データ資産側のポスチャ（過剰共有・ラベル未付与）」と「AI インタラクション側のリスク（機密データ参照・プロンプト送信）」の両面を可視化・対策提案する中核画面です。',
    overallExplanationEn:
      'Purview DSPM bridges data security posture (oversharing assessments, unlabeled sensitive files) with AI runtime telemetry (prompts, sensitive citations, and DLP matches) in one dashboard.',
    keyPointsJa: [
      'Purview DSPM ＝ Copilot が参照する過剰共有サイト・機密ファイル露出・AI 関連 DLP 違反・非倫理対話リスクを統合監視',
      '可視化だけでなく、ワンクリックでの推奨 DLP / 監査 / 過剰共有制限ポリシー展開にも対応',
    ],
    keyPointsEn: [
      'Monitors oversharing exposure, sensitive file grounding, and DLP matches across Copilot and AI apps',
      'Provides actionable posture assessments and one-click policy deployment directly from DSPM',
    ],
    referenceTopic: 'Microsoft Purview DSPM / DSPM for AI による生成 AI データ セキュリティ監視',
  },
  {
    id: 'sakitoo-q89',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Functions マネージド ID に対する Service Bus 送信の最小権限 RBAC',
    titleEn: 'Least-Privilege RBAC Role for Azure Functions Sending to Azure Service Bus',
    scenarioJa:
      'Azure Functions（Function App）がシステム割り当てマネージド ID を使って認証し、Azure Service Bus のキューへメッセージを送信（Send）するだけの処理を行います。メッセージの受信・削除や、キュー自体の構成変更・削除権限は与えない最小権限構成にする必要があります。',
    scenarioEn:
      'An Azure Function App authenticates with its system-assigned Managed Identity solely to send messages to an Azure Service Bus queue. It must not listen/receive messages or modify queue configurations.',
    questionJa:
      'Azure Functions（Function App）でマネージド ID を使用して Azure Service Bus にメッセージを送信する場合に付与すべき RBAC ロールはどれですか？',
    questionEn:
      'Which Azure RBAC role provides least privilege for an Azure Function App Managed Identity that only needs to send messages to Azure Service Bus?',
    options: [
      {
        id: 'A',
        textJa: 'Service Bus Data Sender',
        textEn: 'Azure Service Bus Data Sender',
        isCorrect: true,
        explanationJa:
          '`Azure Service Bus Data Sender` はデータ プレーン ロールであり、Service Bus 名前空間・キュー・トピックに対してメッセージを送信（Send）する権限のみを許可します。メッセージ受信（Receiver）や管理操作（Owner / Contributor）を許可しないため最小権限の原則に完全に適合します。',
        explanationEn:
          'Azure Service Bus Data Sender is a data-plane RBAC role granting permission strictly to send messages to Service Bus queues and topics, without receive or control-plane management rights.',
      },
      {
        id: 'B',
        textJa: 'Contributor',
        textEn: 'Contributor',
        isCorrect: false,
        explanationJa:
          'Contributor は Service Bus リソースやキュー自体を作成・変更・削除できる「コントロール プレーン」ロールであり、通常のアプリ送信処理に対して過剰かつ不適切です（データ プレーン送信にも本来別ロールを使用します）。',
        explanationEn:
          'Contributor is a control-plane role for managing Azure resources, granting far too much authority and failing data-plane least privilege.',
      },
      {
        id: 'C',
        textJa: 'Service Bus Data Owner',
        textEn: 'Azure Service Bus Data Owner',
        isCorrect: false,
        explanationJa:
          'Azure Service Bus Data Owner はメッセージの送信だけでなく受信、削除、およびデータ プレーン エンティティの完全なアクセス権限を含むため過剰です。',
        explanationEn:
          'Azure Service Bus Data Owner grants full data-plane access (send, receive, manage entities), violating least privilege.',
      },
      {
        id: 'D',
        textJa: 'Service Bus Data Reader',
        textEn: 'Azure Service Bus Data Reader',
        isCorrect: false,
        explanationJa:
          'Service Bus Data Receiver（または読取り相当）は受信／読取り側であり、キューへのメッセージ送信権限を持ちません（なお Service Bus の受信標準ロール名は `Azure Service Bus Data Receiver` です）。',
        explanationEn:
          'A reader/receiver role does not allow sending messages to Service Bus queues.',
      },
    ],
    overallExplanationJa:
      'Azure Service Bus のデータ プレーン RBAC は役割別に明確に分離されています：`Azure Service Bus Data Sender`（送信のみ）、`Azure Service Bus Data Receiver`（受信のみ）、`Azure Service Bus Data Owner`（全データ操作）。さらにマネージド ID を併用することで SAS キー（共有アクセス署名）の埋め込みやローテーションも不要になります。',
    overallExplanationEn:
      'Azure Service Bus cleanly separates data-plane RBAC into Sender, Receiver, and Owner. Combining Managed Identity with Azure Service Bus Data Sender eliminates Shared Access Signature (SAS) keys and fulfills least privilege.',
    keyPointsJa: [
      'Service Bus メッセージ送信のみ ＝「Azure Service Bus Data Sender」（受信なら Receiver、全権なら Owner）',
      'マネージド ID + データ プレーン RBAC により接続文字列／SAS シークレット管理を排除できる',
    ],
    keyPointsEn: [
      'Use Azure Service Bus Data Sender for send-only workloads (Receiver for read/consume)',
      'Managed Identity + data-plane RBAC removes SAS connection strings completely',
    ],
    referenceTopic: 'Azure Service Bus に対する Azure ロールベース アクセス制御（Sender / Receiver / Owner）',
  },
  {
    id: 'sakitoo-q90',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'AMA による Windows イベント ID 4625 収集と RDP ブルートフォース検知',
    titleEn: 'Collecting Event ID 4625 via AMA to Detect RDP Brute-Force Attacks in Sentinel',
    scenarioJa:
      'インターネットまたは企業ネットワーク上から Azure Windows VM への RDP（ポート 3389）に対するパスワード総当たり攻撃（ブルートフォース攻撃）を検知したいと考えています。Windows のセキュリティ監査イベントを Microsoft Sentinel へ転送し、短時間の連続ログオン失敗をアラート化する構成を選択する必要があります。',
    scenarioEn:
      'You need to detect RDP brute-force attacks against Azure Windows VMs in Microsoft Sentinel by forwarding Windows failed logon events for KQL correlation.',
    questionJa:
      'Azure VM への RDP 接続ログを Microsoft Sentinel に転送してブルートフォース攻撃を検出する場合に使用するデータ コレクターはどれですか？',
    questionEn:
      'Which data collection method should you use to forward Windows VM RDP logon logs to Microsoft Sentinel for brute-force detection?',
    options: [
      {
        id: 'A',
        textJa: 'Syslog データ コネクター（Linux・ネットワーク機器向け転送設定）',
        textEn: 'Syslog data connector for Linux appliances and syslog streams',
        isCorrect: false,
        explanationJa:
          'Syslog コネクターは Linux アプライアンスやサーバーの Syslog メッセージ収集用であり、Windows セキュリティ イベント収集には使用しません。',
        explanationEn:
          'The Syslog connector is designed for Linux hosts and network appliances, not Windows Security Events.',
      },
      {
        id: 'B',
        textJa: 'レガシー Azure Diagnostics 拡張機能（WAD による診断テーブル収集）',
        textEn: 'Legacy Azure Diagnostics extension (WAD) storage table routing',
        isCorrect: false,
        explanationJa:
          '旧来の Azure Diagnostics 拡張機能（WAD）や MMA（Log Analytics エージェント）は廃止・レガシー化しており、現在の Sentinel 推奨方式は Azure Monitor Agent（AMA）です。',
        explanationEn:
          'The legacy Azure Diagnostics extension and MMA are deprecated for Sentinel security event collection in favor of AMA.',
      },
      {
        id: 'C',
        textJa: 'Azure Monitor Agent（AMA）による Windows セキュリティ イベント収集',
        textEn: 'Windows Security Events via Azure Monitor Agent (AMA) and DCR',
        isCorrect: true,
        explanationJa:
          '現在の Microsoft Sentinel 標準設計では、「Windows Security Events via AMA」データ コネクターとデータ収集ルール（DCR）を使って対象 VM に AMA を展開し、ログオン失敗を表す Windows イベント ID 4625（および成功の 4624 等）を `SecurityEvent` テーブルへ取り込んでブルートフォース検知を行います。',
        explanationEn:
          'Use the Windows Security Events via AMA connector and a Data Collection Rule (DCR) to ingest failed logon events (Event ID 4625) into the Sentinel SecurityEvent table for brute-force KQL rules.',
      },
      {
        id: 'D',
        textJa: 'Azure Activity Log コネクター（ARM コントロール プレーン操作監視）',
        textEn: 'Azure Activity Log connector capturing control-plane operations',
        isCorrect: false,
        explanationJa:
          'Azure Activity Log は ARM（コントロール プレーン）の操作履歴のみを記録し、VM OS 内部への RDP ログオン試行イベントは含まれません。',
        explanationEn:
          'Azure Activity Logs record Azure control-plane operations, not guest OS RDP logon attempts.',
      },
    ],
    overallExplanationJa:
      'DCR（Data Collection Rule）を使うことで、「すべてのイベント」「一般的（Common）」「最小限（Minimal）」「カスタム XPath（例：Event ID 4625 のみ限定）」など必要なイベントだけを取捨選択してコストを抑えながら AMA 経由で収集できます。',
    overallExplanationEn:
      'AMA Data Collection Rules (DCRs) let you filter Windows Security Events (Common, Minimal, or custom XPath filters targeting Event ID 4625/4624) to minimize ingestion cost while catching brute-force attempts.',
    keyPointsJa: [
      'Windows VM のログオン失敗イベント ＝ イベント ID 4625（成功は 4624、ログオフは 4634）',
      '収集方式は旧 MMA ではなく「Azure Monitor Agent（AMA）+ Data Collection Rule（DCR）」を使用',
    ],
    keyPointsEn: [
      'Windows failed logon = Event ID 4625 (successful logon = 4624)',
      'Modern Sentinel collection uses Azure Monitor Agent (AMA) + Data Collection Rules (DCR)',
    ],
    referenceTopic: 'AMA 経由での Windows セキュリティ イベントの収集（イベント ID 4625）',
  },
  {
    id: 'sakitoo-q91',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Cloud セキュア スコア（Secure Score）向上の仕組み',
    titleEn: 'How to Improve Secure Score in Microsoft Defender for Cloud CSPM',
    scenarioJa:
      '情報セキュリティ委員会から、Azure・AWS・GCP 環境全体のセキュリティ成熟度を示す指標として、Microsoft Defender for Cloud のセキュア スコア（Secure Score）を現在の 62% から 85% 以上へ引き上げるよう目標が課されました。スコアを実質的かつ効果的に上げる運用方法を検討しています。',
    scenarioEn:
      'Leadership set an OKR to raise Microsoft Defender for Cloud\'s Secure Score across your cloud subscriptions from 62% to at least 85%. You need to determine what actions legitimately improve Secure Score.',
    questionJa:
      'Microsoft Defender for Cloud の CSPM（Cloud Security Posture Management）でセキュリティ スコアを向上させる方法はどれですか？',
    questionEn:
      'How do you increase the Secure Score in Microsoft Defender for Cloud CSPM?',
    options: [
      {
        id: 'A',
        textJa: '不要なクラウド リソースをサブスクリプションから手動で削除して数を減らす',
        textEn: 'Delete unnecessary cloud resources solely to reduce evaluated counts',
        isCorrect: false,
        explanationJa:
          '未使用リソースの整理自体はコストや攻撃面縮小に役立ちますが、セキュア スコアは「推奨事項に基づくセキュリティ コントロールをすべての対象リソースで完全に満たしているか」で加算される仕組みであり、リソース数削減だけでは未修復コントロールのポイントは得られません。',
        explanationEn:
          'Secure Score is awarded per completed security control across applicable resources; simply deleting a subset of resources will not award points while other non-compliant resources remain in that control.',
      },
      {
        id: 'B',
        textJa: '監視対象の Azure サブスクリプションを Defender for Cloud に追加する',
        textEn: 'Onboard additional Azure subscriptions into Defender for Cloud scope',
        isCorrect: false,
        explanationJa:
          'サブスクリプションを追加するだけではスコアは上がらず、むしろ未対策リソースが増えればスコアが下がる可能性があります。',
        explanationEn:
          'Adding subscriptions increases evaluated scope and can lower the score if those subscriptions have unaddressed findings.',
      },
      {
        id: 'C',
        textJa: '推奨事項を修復しセキュア スコアに影響するセキュリティ コントロールを達成する',
        textEn: 'Remediate recommendations and complete Security Controls for Secure Score',
        isCorrect: true,
        explanationJa:
          'Defender for Cloud のセキュア スコアは、MFA の有効化、脆弱性の修復、暗号化、ネットワーク制限といった「セキュリティ コントロール（Security Controls）」配下の推奨事項（Recommendations）を修復・完了することでポイントが加算される設計になっています。特に「All resources」が準拠して初めてコントロールの最大ポイントを獲得できるため、優先度の高いコントロールから順に完了させるのが効果的です。',
        explanationEn:
          'Secure Score measures progress across Security Controls (e.g., Enable MFA, Remediate vulnerabilities, Secure management ports). Remediating the underlying recommendations until all applicable resources pass unlocks the full points for each control.',
      },
      {
        id: 'D',
        textJa: 'VM やデータベースのコンピュート SKU サイズを小さい構成へ縮小する',
        textEn: 'Downsize VM or database compute SKUs across production resource groups',
        isCorrect: false,
        explanationJa:
          'コンピュート SKU の変更はパフォーマンスや料金に影響しますが、セキュリティ推奨事項の準拠状況（セキュア スコア）には影響しません。',
        explanationEn:
          'Resizing compute SKUs alters cost and capacity, not security posture or Secure Score.',
      },
    ],
    overallExplanationJa:
      '試験でも実務でも重要なポイントとして、セキュア スコアは個々の推奨事項単位ではなく「Security Control（セキュリティ コントロール）単位の達成率（Healthy リソース数 / Total 対象リソース数 × コントロールの最大スコア）」で計算されます。Impact（スコア上昇幅）の大きいコントロールから優先的に修復しましょう。',
    overallExplanationEn:
      'Each Security Control carries a maximum score proportional to its risk reduction impact, calculated as (Healthy resources / Total resources) × Max Control Score. Prioritizing high-impact controls accelerates Secure Score improvement.',
    keyPointsJa: [
      'セキュア スコア ＝「推奨事項を修復し、セキュリティ コントロール内の全対象リソースを準拠させる」ことで向上',
      '高ポイント（Potential score increase）のセキュリティ コントロールから優先対応するのが鉄則',
    ],
    keyPointsEn: [
      'Secure Score increases by remediating recommendations inside weighted Security Controls',
      'Prioritize controls with the highest Potential Score Increase for maximum risk reduction',
    ],
    referenceTopic: 'Defender for Cloud のセキュア スコアの計算と向上方法',
  },
  {
    id: 'sakitoo-q92',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Lighthouse による複数テナント・サブスクリプションの Sentinel 横断管理',
    titleEn: 'Cross-Tenant and Multi-Workspace Sentinel Management with Azure Lighthouse',
    scenarioJa:
      '複数部門またはグループ会社の各 Azure AD (Entra) テナント／サブスクリプションごとに個別の Microsoft Sentinel ワークスペースが構築されています。中央の SOC（または MSSP）のアナリストが、アカウントを切り替えることなく単一の管理テナントから全ワークスペースのインシデント調査や分析ルール展開を行いたいと考えています。',
    scenarioEn:
      'Separate Microsoft Sentinel workspaces exist across multiple Azure subscriptions and Microsoft Entra tenants. Your central SOC (or MSSP) needs delegated cross-tenant visibility to investigate incidents and deploy rules from one managing tenant.',
    questionJa:
      'Microsoft Sentinel のワークスペースを Azure サブスクリプション間で共有するマルチテナント展開で使用する機能はどれですか？',
    questionEn:
      'Which Azure capability enables cross-tenant delegated management of multiple Microsoft Sentinel workspaces across different tenants and subscriptions?',
    options: [
      {
        id: 'A',
        textJa: 'サブスクリプションのテナント間移行',
        textEn: 'Azure subscription tenant migration',
        isCorrect: false,
        explanationJa:
          'サブスクリプション自体を別テナントへ移動すると所有権や課金・RBAC が根本的に変わり、複数顧客・独立テナントの分離を維持したまま横断管理する要件に合致しません。',
        explanationEn:
          'Moving subscriptions breaks tenant isolation and ownership boundaries rather than enabling delegated multi-tenant SOC management.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Entra B2B ゲスト招待',
        textEn: 'Microsoft Entra B2B guest access',
        isCorrect: false,
        explanationJa:
          'Entra B2B ゲスト招待では管理者が各顧客テナントに毎回ディレクトリを切り替えてログインし直す必要があり、単一ビューでの横断インシデント管理やシームレスな自動展開ができません。',
        explanationEn:
          'Entra B2B requires switching directories tenant-by-tenant and lacks unified multi-workspace Sentinel portal aggregation.',
      },
      {
        id: 'C',
        textJa: 'Virtual Network ピアリング接続',
        textEn: 'Virtual Network (VNet) peering',
        isCorrect: false,
        explanationJa:
          'VNet ピアリングは仮想ネットワーク間のプライベート IP 通信接続であり、Sentinel のマルチテナント RBAC 委任管理機能ではありません。',
        explanationEn:
          'VNet peering connects private IP networks and has nothing to do with Sentinel multi-tenant delegation.',
      },
      {
        id: 'D',
        textJa: 'Azure Lighthouse（委任リソース管理）',
        textEn: 'Azure Lighthouse delegated access',
        isCorrect: true,
        explanationJa:
          'Azure Lighthouse を用いることで、顧客／子テナントのサブスクリプションやリソース グループ（Sentinel ワークスペース）に対する委任 RBAC 権限を中央 SOC / MSSP テナントに付与でき、単一サインインのまま複数ワークスペース横断（Multiple workspace view）でインシデント確認・KQL クエリ・コンテンツ展開を実行できます。',
        explanationEn:
          'Azure Lighthouse projects delegated RBAC permissions from target customer/subsidiary subscriptions into the managing SOC/MSSP tenant, allowing analysts to triage incidents, run cross-workspace KQL queries, and deploy content from one view.',
      },
    ],
    overallExplanationJa:
      'マルチテナント／MSSP 環境での Microsoft Sentinel 運用では、各テナントにデータを複製（コスト二重化）することなく管理権限だけを委任する「Azure Lighthouse」＋「Multiple Sentinel workspaces ビュー（現 Defender ポータル／Azure ポータル統合）」が標準アーキテクチャです。',
    overallExplanationEn:
      'Azure Lighthouse avoids data duplication costs across tenants by delegating scoped RBAC control planes to the managing SOC tenant, supporting PIM-backed just-in-time access as well.',
    keyPointsJa: [
      '複数テナント／サブスクリプションの Sentinel 統合運用 ＝「Azure Lighthouse（委任リソース管理）」',
      'Azure AD B2B と異なり、ディレクトリ切替なしで単一画面から全顧客・全子会社のインシデントを横断閲覧・対応できる',
    ],
    keyPointsEn: [
      'Cross-tenant Sentinel management = Azure Lighthouse delegated RBAC',
      'Supports cross-workspace KQL queries, incident queues, and SOC automation without switching directories',
    ],
    referenceTopic: 'Azure Lighthouse を使用して複数のテナントにわたり Microsoft Sentinel を管理する',
  },
  {
    id: 'sakitoo-q93',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure リソースから Sentinel への推奨ログ転送方式（Azure Monitor / AMA）',
    titleEn: 'Recommended Method to Ingest Azure Resource Telemetry into Microsoft Sentinel',
    scenarioJa:
      'Azure Key Vault、Azure Firewall、Azure Storage、Azure Virtual Machines などの各種 Azure リソースから出力される診断ログやプラットフォーム セキュリティ イベントを、Microsoft Sentinel のワークスペースに自動かつ継続的に取り込む標準アーキテクチャを選定しています。',
    scenarioEn:
      'You are configuring automated ingestion of platform diagnostic logs and VM security events from Azure resources (Key Vault, Azure Firewall, Storage, VMs) into Microsoft Sentinel.',
    questionJa:
      'Microsoft Sentinel でデータ コネクターを設定する際、Azure リソースのデータを Sentinel に転送する推奨方法はどれですか？',
    questionEn:
      'What is the recommended method for ingesting telemetry from Azure resources into Microsoft Sentinel?',
    options: [
      {
        id: 'A',
        textJa: 'ポータルからログを手動エクスポートして Sentinel へ定期アップロードする',
        textEn: 'Manually export telemetry files and upload them to Sentinel periodically',
        isCorrect: false,
        explanationJa:
          '手動でのエクスポート／アップロードはリアルタイム性がなく、SIEM としての自動検知・運用に不向きです。',
        explanationEn:
          'Manual log exports lack real-time alerting capabilities and do not scale.',
      },
      {
        id: 'B',
        textJa: 'Azure Monitor 診断設定または AMA を用いてワークスペースへ転送する',
        textEn: 'Stream via Azure Monitor Diagnostic Settings or AMA into the workspace',
        isCorrect: true,
        explanationJa:
          'Azure PaaS リソース（Key Vault / Azure Firewall / NSG / AKS 等）やサブスクリプションの Activity Log は「Azure Monitor 診断設定（Diagnostic Settings）」、また Azure VM や Arc サーバー内部の OS ログは「Azure Monitor Agent（AMA）+ DCR」を通じて Sentinel の基盤である Log Analytics ワークスペースへ直接ストリーミングするのが公式推奨です。',
        explanationEn:
          'Azure Monitor pipelines are the recommended ingestion path: Diagnostic Settings route PaaS/control-plane logs natively to the Log Analytics workspace, while Azure Monitor Agent (AMA) + DCR streams VM guest OS logs.',
      },
      {
        id: 'C',
        textJa: 'アーカイブしたログ ファイルを定期的に FTP で外部サーバーから転送する',
        textEn: 'Archive diagnostic files and transfer them over FTP to Log Analytics',
        isCorrect: false,
        explanationJa:
          'FTP によるファイル転送ベースの取り込みは非推奨・非標準です。',
        explanationEn:
          'FTP file transfers are not a supported Sentinel ingestion mechanism.',
      },
      {
        id: 'D',
        textJa: '一旦 Blob Storage へ出力し Sentinel 側の定期ポーリングで収集する',
        textEn: 'Write logs to Blob Storage for scheduled polling by Microsoft Sentinel',
        isCorrect: false,
        explanationJa:
          '長期保存目的以外でネイティブ Azure リソースからわざわざ Blob Storage 経由のポーリングを挟む必要はなく、Azure Policy と組み合わせた診断設定による直接ワークスペース送信が高速かつ低遅延です。',
        explanationEn:
          'Routing native Azure resource telemetry through Blob Storage polling adds unnecessary latency compared to direct Azure Monitor Diagnostic Settings.',
      },
    ],
    overallExplanationJa:
      'Azure Policy の組み込みイニシアチブ（例：「Configure Azure Key Vaults to stream diagnostics to Log Analytics」）と併用することで、今後新しく作成される Azure リソースも漏れなく Sentinel ワークスペースへログ転送されるよう自動化できます。',
    overallExplanationEn:
      'Pair Azure Monitor Diagnostic Settings with Azure Policy DeployIfNotExists initiatives so every newly provisioned PaaS resource automatically streams security logs to Sentinel.',
    keyPointsJa: [
      'PaaS / プラットフォーム ログ ＝「診断設定（Diagnostic Settings）」で Log Analytics ワークスペースへ直接送信',
      'VM / オンプレミス サーバー ＝「Azure Monitor Agent（AMA）+ DCR」経由で送信',
    ],
    keyPointsEn: [
      'PaaS/platform telemetry -> Azure Monitor Diagnostic Settings -> Log Analytics workspace',
      'VM/host telemetry -> Azure Monitor Agent (AMA) + Data Collection Rules -> Log Analytics workspace',
    ],
    referenceTopic: 'Azure Monitor 診断設定とデータ コネクターによる Sentinel への接続',
  },
  {
    id: 'sakitoo-q94',
    domain: 'Defender XDR & 統合SecOps',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Defender External Attack Surface Management (EASM) の役割',
    titleEn: 'Primary Purpose of Microsoft Defender External Attack Surface Management (EASM)',
    scenarioJa:
      'M&A や各事業部によるクラウド／外部ホスティング利用の結果、中央 IT 部門が把握していない公開 Web サイト、忘れられたドメイン、期限切れ間近の SSL 証明書、外部から到達可能な管理ポートや古いソフトウェアがインターネット上に露出していないか把握したいと考えています。',
    scenarioEn:
      'Due to decentralized cloud usage and acquisitions, central IT lacks a complete inventory of public domains, exposed IPs, expiring SSL certificates, and shadow IT web services reachable from the internet.',
    questionJa:
      'Microsoft Defender External Attack Surface Management（EASM）の主な機能はどれですか？',
    questionEn:
      'What is the primary capability of Microsoft Defender External Attack Surface Management (EASM)?',
    options: [
      {
        id: 'A',
        textJa: 'インターネット公開資産を自動発見して攻撃者視点でリスクを評価する',
        textEn: 'Discover internet-facing assets and assess outside-in risks',
        isCorrect: true,
        explanationJa:
          'Microsoft Defender EASM は、組織の既知のシード情報（ドメイン名や AS 番号等）を起点にインターネット全体をエージェントレスで継続クロールし、組織に関連する公開資産（Web サイト、IP ブロック、SSL 証明書、ホスト、シャドー IT）を再帰的に自動発見して、攻撃者視点（Outside-In）での攻撃対象領域・CVE・設定リスクを可視化します。',
        explanationEn:
          'Defender EASM continuously crawls the public internet from known seeds (domains, ASNs, IP blocks) using outside-in discovery to inventory internet-facing assets, uncover shadow IT, and prioritize attacker-visible exposures.',
      },
      {
        id: 'B',
        textJa: '社内端末・サーバー向けのエンドポイント検出と対応（EDR）を提供する',
        textEn: 'Provide host-based Endpoint Detection and Response (EDR)',
        isCorrect: false,
        explanationJa:
          '社内端末やサーバーの EDR 機能を提供するのは Microsoft Defender for Endpoint（MDE）です。',
        explanationEn:
          'Host EDR is provided by Microsoft Defender for Endpoint (MDE), not Defender EASM.',
      },
      {
        id: 'C',
        textJa: '社内閉域ネットワーク内ホストの OS 脆弱性を継続的にスキャンする',
        textEn: 'Scan internal private-network hosts for OS vulnerabilities',
        isCorrect: false,
        explanationJa:
          '社内 LAN などの内部資産脆弱性評価は Defender 脆弱性管理（MDVM）や Defender for Cloud が担い、EASM はインターネット公開面の外部調査に特化しています。',
        explanationEn:
          'Internal host scanning is handled by MDVM/Defender for Cloud; EASM focuses specifically on the external internet-facing footprint.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Sentinel のログ収集コネクターと取り込み量を管理する',
        textEn: 'Manage Microsoft Sentinel log ingestion pipelines and tiers',
        isCorrect: false,
        explanationJa:
          'SIEM のログ収集パイプライン管理機能ではありません。',
        explanationEn:
          'EASM does not manage Sentinel ingestion connectors.',
      },
    ],
    overallExplanationJa:
      'Defender CSPM（内部のクラウド コントロール プレーン視点＝Inside-Out）と Defender EASM（外部攻撃者視点＝Outside-In）は相互補完関係にあり、Defender CSPM の攻撃パス分析にも EASM で発見されたインターネット露出情報が統合されます。',
    overallExplanationEn:
      'Defender EASM provides the outside-in attacker perspective that complements inside-out CSPM, even feeding discovered internet exposures into Defender for Cloud Attack Path Analysis.',
    keyPointsJa: [
      'Defender EASM ＝ エージェントレスの「Outside-In（攻撃者視点）」による公開資産自動発見・シャドー IT 検出・外部リスク評価',
      'Defender for Cloud（CSPM）と統合し、内部クラウド構成と外部露出をつなぐ攻撃パス評価を強化できる',
    ],
    keyPointsEn: [
      'Agentless outside-in discovery of domains, hosts, IPs, SSL certs, and shadow IT',
      'Integrates with Defender CSPM to enrich external exposure and attack path prioritization',
    ],
    referenceTopic: 'Microsoft Defender External Attack Surface Management (EASM) の概要',
  },
  {
    id: 'sakitoo-q95',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '脅威インテリジェンス (TAXII / Defender TI) コネクターによる IOC 取り込み',
    titleEn: 'Ingesting IOCs into Sentinel via Threat Intelligence TAXII and Defender TI Connectors',
    scenarioJa:
      'SOC で利用している外部の脅威インテリジェンス共有基盤（MISP や業界 ISAC などの TAXII サーバー）および Microsoft 自身の脅威情報から、悪意のある IP アドレス、ドメイン、URL、ファイル ハッシュ（IOC：侵害の指標）を Microsoft Sentinel の `ThreatIntelligenceIndicator` テーブルへ自動取り込みし、ログと照合したいと考えています。',
    scenarioEn:
      'Your SOC wants to automatically import external Indicators of Compromise (IPs, domains, URLs, file hashes) from MISP/ISAC TAXII servers and Microsoft feeds into Sentinel\'s ThreatIntelligenceIndicator table for alerting.',
    questionJa:
      'Microsoft Sentinel に「脅威インテリジェンス（Threat Intelligence）」プラットフォームから IOC（侵害の指標）を取り込む際に使用するデータ コネクターはどれですか？',
    questionEn:
      'Which Sentinel data connectors are used to ingest Indicators of Compromise (IOCs) from Threat Intelligence platforms and feeds?',
    options: [
      {
        id: 'A',
        textJa: 'Syslog（Linux / ネットワーク機器イベント）データ コネクター',
        textEn: 'Syslog connector (Linux and network appliance event logs)',
        isCorrect: false,
        explanationJa:
          'Syslog コネクターはファイアウォール等のテキスト イベント ログを `Syslog` テーブルへ取り込むものであり、STIX/TAXII 形式の IOC フィード処理用ではありません。',
        explanationEn:
          'Syslog collects machine event logs rather than structured STIX/TAXII threat intelligence indicators.',
      },
      {
        id: 'B',
        textJa: 'Azure Activity（サブスクリプション管理操作履歴）コネクター',
        textEn: 'Azure Activity connector (subscription control-plane events)',
        isCorrect: false,
        explanationJa:
          'Azure Activity Log は Azure サブスクリプション上の管理プレーン操作ログ用です。',
        explanationEn:
          'Azure Activity Log ingests Azure resource control-plane events, not TI feeds.',
      },
      {
        id: 'C',
        textJa: 'Office 365（Exchange / SharePoint 監査）データ コネクター',
        textEn: 'Office 365 connector (Exchange and SharePoint audit logs)',
        isCorrect: false,
        explanationJa:
          'Office 365 コネクターは Exchange / SharePoint / Teams のユーザー操作監査ログを収集します。',
        explanationEn:
          'Office 365 connector collects M365 user and admin audit activity.',
      },
      {
        id: 'D',
        textJa: 'Threat Intelligence（TAXII / MDTI）データ コネクター',
        textEn: 'Threat Intelligence (TAXII) or Microsoft Defender TI connector',
        isCorrect: true,
        explanationJa:
          'Sentinel では外部 TI プラットフォーム（MISP、Anomali、ThreatConnect 等）との REST API 連携（Upload Indicators API / Threat Intelligence Platforms コネクター）や標準プロトコル TAXII 2.0/2.1 連携（Threat Intelligence - TAXII コネクター）、さらに Microsoft Defender Threat Intelligence（MDTI）コネクターを使って IOC を `ThreatIntelIndicators` / `ThreatIntelligenceIndicator` へ自動取り込みできます。',
        explanationEn:
          'Sentinel ingests STIX/TAXII IOCs via the Threat Intelligence - TAXII (2.0/2.1) connector, Threat Intelligence Upload API (for TIPs like MISP/Anomali), or the Microsoft Defender Threat Intelligence (MDTI) connector.',
      },
    ],
    overallExplanationJa:
      '取り込まれた IOC は Sentinel 内の「Threat intelligence」ブレードで閲覧・タグ付け・管理できるだけでなく、「TI map IP entity to...」等の組み込み分析ルール テンプレートと組み合わせることで、ファイアウォールやサインイン ログ上の通信先と一致した際に自動アラート発報が可能です。',
    overallExplanationEn:
      'Once ingested, IOCs are viewable in the Sentinel Threat Intelligence blade and can be automatically correlated against firewall, DNS, and sign-in logs using built-in "TI map ..." analytics rule templates.',
    keyPointsJa: [
      '外部 TI サーバー ＝ Threat Intelligence - TAXII (2.0/2.1) または Upload API（旧 TIP コネクター）',
      'Microsoft 提供 TI ＝ Microsoft Defender Threat Intelligence（MDTI）データ コネクター',
    ],
    keyPointsEn: [
      'External STIX/TAXII feeds use the Threat Intelligence - TAXII connector or TI Upload API',
      'Microsoft feeds use the Microsoft Defender Threat Intelligence (MDTI) connector',
    ],
    referenceTopic: 'Microsoft Sentinel を脅威インテリジェンス プラットフォームに接続する',
  },
  {
    id: 'sakitoo-q96',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'AWS 環境を Defender for Cloud マルチクラウド CSPM へ接続する方法',
    titleEn: 'Onboarding AWS Accounts into Defender for Cloud Multi-Cloud CSPM',
    scenarioJa:
      '企業では Azure と並行して多数の AWS アカウントでも本番ワークロードを運用しています。AWS 側のリソース設定ミス、S3 バケット公開、IAM 過剰権限、セキュリティ推奨事項を Azure 側と単一のダッシュボード（Defender for Cloud）で一元監視したいと考えています。',
    scenarioEn:
      'Your enterprise runs workloads in both Azure and AWS. You need unified CSPM visibility into AWS misconfigurations, public S3 buckets, IAM risks, and AWS Security Hub findings inside Microsoft Defender for Cloud.',
    questionJa:
      'AWS のワークロードを Microsoft Defender for Cloud のマルチクラウド CSPM で監視するために必要な接続方法はどれですか？',
    questionEn:
      'How do you connect AWS workloads for multi-cloud CSPM monitoring in Microsoft Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: 'AWS コネクターを作成して Defender for Cloud と AWS 環境を統合する',
        textEn: 'Configure a native AWS connector integrating AWS and Security Hub',
        isCorrect: true,
        explanationJa:
          'Defender for Cloud の「環境設定（Environment settings）」からネイティブの AWS コネクター（単一アカウントまたは AWS Organizations 全体）を追加し、自動生成される CloudFormation テンプレートで AWS 側に OIDC/IAM ロールをデプロイして AWS API および AWS Security Hub と統合することで、エージェントレスのマルチクラウド CSPM 監視を実現できます。',
        explanationEn:
          'Add an AWS connector under Defender for Cloud Environment settings and deploy the generated CloudFormation template in AWS to provision cross-account IAM/OIDC roles, enabling native agentless CSPM and AWS Security Hub integration.',
      },
      {
        id: 'B',
        textJa: '監視対象の AWS ワークロードをすべて Azure 環境へ直接移行する',
        textEn: 'Migrate all monitored AWS workloads directly into Azure subscriptions',
        isCorrect: false,
        explanationJa:
          'Defender for Cloud のマルチクラウド CSPM は AWS リソースを AWS 上に置いたままネイティブに保護・監視できるため、Azure への移行は不要です。',
        explanationEn:
          'Defender for Cloud natively monitors AWS workloads in place without migrating them to Azure.',
      },
      {
        id: 'C',
        textJa: 'AWS VPC と Azure VNet の間をサイト間 VPN トンネルで接続する',
        textEn: 'Establish a site-to-site VPN tunnel between AWS VPC and Azure VNet',
        isCorrect: false,
        explanationJa:
          'コントロール プレーンの CSPM 評価はクラウド API 経由で行われるため、VNet-VPC 間 VPN 接続は不要です。',
        explanationEn:
          'Multi-cloud CSPM uses cloud management APIs and does not require a VPN tunnel.',
      },
      {
        id: 'D',
        textJa: 'AWS CLI スクリプトをインストールして態勢データを手動エクスポートする',
        textEn: 'Run AWS CLI scripts manually to export and upload posture reports',
        isCorrect: false,
        explanationJa:
          '手動エクスポートではなく、AWS コネクターによって数時間ごとの継続的・自動的な検出と推奨事項評価が行われます。',
        explanationEn:
          'Native connectors automate continuous posture discovery without manual AWS CLI exports.',
      },
    ],
    overallExplanationJa:
      'AWS コネクターは静的な IAM アクセスキー／シークレットキーではなく、フェデレーション（OIDC / AssumeRole）による一時クレデンシャルを用いて安全に接続されます。これにより Foundations CSPM（無料）だけでなく Defender CSPM（攻撃パス・CIEM）や Defender for Servers / Containers / Databases も AWS 上へ展開可能です。',
    overallExplanationEn:
      'The native AWS connector authenticates securely via IAM role assumption (without static IAM keys), supporting Foundations CSPM, Defender CSPM (Attack Paths & CIEM), and Defender workload plans across AWS.',
    keyPointsJa: [
      'AWS 接続 ＝ 環境設定から AWS コネクターを作成し、CloudFormation で IAM ロールを展開して統合',
      '単一 AWS アカウント単位・AWS Organizations（管理アカウント経由一括）の両方に対応',
    ],
    keyPointsEn: [
      'Onboard via Defender for Cloud AWS connector + CloudFormation IAM role deployment',
      'Supports both single AWS accounts and AWS Organizations multi-account onboarding',
    ],
    referenceTopic: 'AWS アカウントを Microsoft Defender for Cloud に接続する',
  },
  {
    id: 'sakitoo-q97',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Sentinel 自動化ルール（Automation Rules）とプレイブック（Playbooks）の違い',
    titleEn: 'Difference Between Sentinel Automation Rules and Playbooks',
    scenarioJa:
      'Microsoft Sentinel の SOC 自動化アーキテクチャを設計しています。特定の分析ルールから生成されたインシデントへの一括タグ付け・担当者自動割り当て・誤検知の自動クローズを行う仕組みと、条件に合致した場合に Teams 承認付きでファイアウォール遮断やユーザー無効化を行う外部ワークフローの役割分担を定義する必要があります。',
    scenarioEn:
      'You are designing Sentinel SOAR automation and need to separate lightweight incident triage/routing (tagging, assignment, auto-closure) from multi-step external remediation workflows (Teams notifications, ITSM ticketing, user disablement).',
    questionJa:
      'Microsoft Sentinel の「自動化ルール（Automation Rule）」と「プレイブック（Playbook）」の違いはどれですか？',
    questionEn:
      'What is the difference between an Automation Rule and a Playbook in Microsoft Sentinel?',
    options: [
      {
        id: 'A',
        textJa: 'プレイブックはスケジュールバッチ専用でありリアルタイムでは動作しない',
        textEn: 'Playbooks run only on scheduled batches and cannot trigger in real time',
        isCorrect: false,
        explanationJa:
          'プレイブックはインシデントやアラートの作成トリガー、あるいは自動化ルールからの呼び出しによりリアルタイムに起動します。',
        explanationEn:
          'Playbooks execute in real time when triggered by alerts, incidents, or Automation Rules.',
      },
      {
        id: 'B',
        textJa: '両者はまったく同一の自動化機能であり表示される管理画面が異なるだけである',
        textEn: 'Both are identical SOAR features differing only in Azure portal screen UI',
        isCorrect: false,
        explanationJa:
          '両者は役割も実行エンジンも明確に異なる補完関係にあります。',
        explanationEn:
          'Automation Rules and Playbooks serve distinct, complementary roles in Sentinel SOAR.',
      },
      {
        id: 'C',
        textJa: '自動化ルールは軽量なトリアージ操作、プレイブックは複雑な Logic Apps 対応を担う',
        textEn: 'Automation rules handle lightweight triage; playbooks run Logic Apps SOAR',
        isCorrect: true,
        explanationJa:
          '自動化ルール（Automation Rules）は Sentinel ネイティブの軽量ルール エンジンであり、作成/更新トリガー時に「重要度変更・タグ追加・担当者割り当て・ステータス更新（自動クローズ）」を順番に高速処理するほか、より複雑な外部 API 連携やエンリッチメント・封じ込めが必要な場合に Playbook（Azure Logic Apps）を呼び出す「司令塔」として機能します。',
        explanationEn:
          'Automation Rules act as Sentinel\'s centralized lightweight orchestration layer—handling status updates, severity, tagging, owner assignment, auto-closure, and ordered conditions—and invoke Playbooks (Azure Logic Apps) whenever complex multi-step external SOAR actions are required.',
      },
      {
        id: 'D',
        textJa: '自動化ルール自体も Azure Logic Apps ワークフローとして実装・課金される',
        textEn: 'Automation Rules themselves are built and billed as Azure Logic Apps flows',
        isCorrect: false,
        explanationJa:
          'Azure Logic Apps で実装されるのは「プレイブック（Playbook）」であり、自動化ルール自体は Sentinel 組み込みの軽量ルール基盤です。',
        explanationEn:
          'Playbooks are built on Azure Logic Apps; Automation Rules are native Sentinel configuration rules.',
      },
    ],
    overallExplanationJa:
      '現在は「複数の分析ルールごとに直接プレイブックを紐付ける」のではなく、「分析ルール側ではインシデントを生成し、自動化ルール側で条件や実行順序を一元管理して必要に応じてプレイブックを呼び出す」設計が Microsoft 推奨パターンです。',
    overallExplanationEn:
      'Best practice is to trigger Playbooks centrally through Automation Rules (which provide execution order, multiple conditions, and expiration dates) rather than attaching Playbooks piecemeal inside individual analytics rules.',
    keyPointsJa: [
      '自動化ルール ＝ Sentinel 内の高速・軽量トリアージ（割り当て／タグ／重要度／自動クローズ）＆ Playbook 呼び出し管理',
      'プレイブック ＝ Azure Logic Apps で構築する複雑な外部連携・エンリッチメント・自動封じ込めワークフロー',
    ],
    keyPointsEn: [
      'Automation Rules = native Sentinel triage & centralized playbook orchestration',
      'Playbooks = Azure Logic Apps workflows for external API enrichment and containment',
    ],
    referenceTopic: 'Microsoft Sentinel の自動化ルールとプレイブック',
  },
  {
    id: 'sakitoo-q98',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'インタラクティブ保持（Interactive）とアーカイブ保持（Archive）の違い',
    titleEn: 'Interactive Retention vs. Archive Retention in Microsoft Sentinel / Log Analytics',
    scenarioJa:
      '規制要件によりセキュリティ ログを合計 7 年間保存する必要がありますが、すべてのログを 7 年間そのまま分析ワークスペース（ホット層）に保持するとストレージ費用が非常に高額になります。日常的なリアルタイム KQL ハンティングに必要な期間と、長期監査向けの低コスト保管を使い分けたいと考えています。',
    scenarioEn:
      'Compliance requires retaining security logs for 7 years total, but keeping all 7 years in hot searchable storage is cost-prohibitive. You need to balance immediate KQL queryability with low-cost long-term retention.',
    questionJa:
      'Microsoft Sentinel のデータ保持期間を設定する場合、インタラクティブ保持とアーカイブ保持の違いはどれですか？',
    questionEn:
      'When configuring table retention in Microsoft Sentinel / Log Analytics, what is the difference between Interactive retention and Archive retention?',
    options: [
      {
        id: 'A',
        textJa: 'インタラクティブ保持は最大 7 日間に制限され長期保存には対応しない',
        textEn: 'Interactive retention is capped at 7 days without extended history',
        isCorrect: false,
        explanationJa:
          'インタラクティブ保持期間はテーブル単位で最大 730 日（2 年）まで設定可能です（無料ワークスペース枠の 30 日または Sentinel の 90 日標準を超えて延長可能）。',
        explanationEn:
          'Interactive retention can be configured up to 730 days (2 years), not capped at 7 days.',
      },
      {
        id: 'B',
        textJa: 'アーカイブ保持層のデータに対してもリアルタイム分析ルールが直接動作する',
        textEn: 'Archive tier data supports direct real-time scheduled analytics rules',
        isCorrect: false,
        explanationJa:
          '分析ルールやリアルタイム KQL はインタラクティブ層（ホット層）に対してのみ実行され、アーカイブ層は直接リアルタイム クエリできません。',
        explanationEn:
          'Scheduled analytics rules and real-time hunting only query Interactive retention storage, not Archive.',
      },
      {
        id: 'C',
        textJa: '両者に検索方法や機能の差はなくデータ容量の単価テーブルのみが異なる',
        textEn: 'Both layers offer identical query speed and differ only in GB pricing',
        isCorrect: false,
        explanationJa:
          '即時 KQL 検索の可否と取り出し方式（Restore / Search Job の要否）に明確な機能差があります。',
        explanationEn:
          'They differ significantly in direct queryability and retrieval workflow (Restore or Search Jobs).',
      },
      {
        id: 'D',
        textJa: 'インタラクティブは即時 KQL 検索可、アーカイブは長期保存用で復元を要する',
        textEn: 'Interactive enables instant KQL; Archive cuts cost but requires restore',
        isCorrect: true,
        explanationJa:
          'インタラクティブ保持（Sentinel テーブル標準 90 日、最小数日〜最大 730 日）では KQL クエリ・ワークブック・分析ルールからミリ秒〜秒単位で即時検索できます。一方、合計保持期間（最大 12 年＝4,383 日）のうちインタラクティブ期間を超えた分は「アーカイブ（Archive）」層へ自動移行され低コストで長期保管されますが、後から検索するには Search Job（検索ジョブ）または Restore（復元）による一時的なデータ呼び出しが必要です。',
        explanationEn:
          'Interactive retention (up to 730 days; 90 days free with Sentinel enabled) provides instant KQL queries, alerts, and workbooks. Archive retention extends total retention up to 12 years at low cost, requiring either a Search Job or a temporary Restore table to inspect historical data.',
      },
    ],
    overallExplanationJa:
      'コスト最適化の定石として、高頻度に調査する直近 90〜180 日間を「インタラクティブ保持」とし、長期監査対応（例：合計 7 年や 12 年）はテーブル単位の設定（Tables → Manage table）で「合計保持期間（Total retention period）」を指定してアーカイブ層を活用します。',
    overallExplanationEn:
      'Configuring per-table Total Retention (Interactive + Archive up to 12 years) in Log Analytics saves substantial storage cost compared to keeping multi-year data in interactive hot storage or exporting externally.',
    keyPointsJa: [
      'インタラクティブ保持（最大 730 日）＝ 即時 KQL・分析ルール・ハンティング可能（Sentinel なら 90 日まで追加保持課金なし）',
      'アーカイブ保持（合計最大 12 年）＝ 低コスト長期保管、閲覧時は「検索ジョブ（Search Jobs）」または「復元（Restore）」を実行',
    ],
    keyPointsEn: [
      'Interactive (up to 730 days): immediate KQL & analytics; 90 days included with Sentinel',
      'Archive (total up to 12 years): low-cost cold tier; queryable on demand via Search Jobs or Restore',
    ],
    referenceTopic: 'Log Analytics と Microsoft Sentinel でのデータ保持とアーカイブの構成',
  },
  {
    id: 'sakitoo-q99',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Cloud のエージェントレス MDVM 脆弱性スキャンの利点',
    titleEn: 'Benefits of Agentless MDVM Vulnerability Scanning in Defender for Cloud',
    scenarioJa:
      '多数の事業部門から VM 管理を委任されている環境で、一部の業務 VM にはパフォーマンス懸念や運用制約によりセキュリティ エージェントをすぐにはインストールできない状況です。それでも OS やソフトウェアの CVE 脆弱性を網羅的に把握するため、Defender for Cloud のエージェントレス スキャンを検討しています。',
    scenarioEn:
      'Due to operational constraints and workload sensitivity, certain business-critical VMs cannot immediately receive endpoint agents. You are evaluating Defender for Cloud\'s agentless MDVM vulnerability scanning.',
    questionJa:
      'Defender for Cloud の「Microsoft Defender Vulnerability Management（MDVM）」で VM の脆弱性スキャンを有効化する際のエージェントレス方式の利点はどれですか？',
    questionEn:
      'What is the key benefit of using the agentless mode for Microsoft Defender Vulnerability Management (MDVM) in Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: 'VM 内にエージェントを入れずディスク スナップショットから脆弱性を検出できる',
        textEn: 'Detect vulnerabilities from disk snapshots without guest agents or load',
        isCorrect: true,
        explanationJa:
          'エージェントレス スキャン（Defender CSPM および Defender for Servers Plan 2 に含まれる）は、クラウド API 経由で VM ディスクの帯域外スナップショットを一時取得して分離環境で MDVM 解析を行うため、VM 内部にエージェントを導入する必要がなく、CPU/メモリ負荷やネットワーク設定に一切影響を与えずに新規・既存 VM の脆弱性とソフトウェア インベントリを検出できます。',
        explanationEn:
          'Agentless scanning (included in Defender CSPM and Defender for Servers Plan 2) analyzes out-of-band disk snapshots in an isolated environment—requiring zero agents, zero guest network connectivity, and zero runtime CPU/memory overhead on the target VM.',
      },
      {
        id: 'B',
        textJa: '通常のエージェント方式よりもスキャン完了までの所要時間が意識的に長くなる',
        textEn: 'It intentionally slows down scan intervals to minimize Azure API calls',
        isCorrect: false,
        explanationJa:
          'エージェント導入不要でサブスクリプション全体の既存・新規 VM を自動的に網羅できる運用上のメリットがあり、遅くなることが利点ではありません。',
        explanationEn:
          'Slower execution is not a feature advantage; agentless scanning automates discovery across entire subscriptions automatically.',
      },
      {
        id: 'C',
        textJa: 'ディスク解析のみを行うためソフトウェア脆弱性の検出精度が大幅に低下する',
        textEn: 'It lowers CVE detection accuracy compared to standard vulnerability checks',
        isCorrect: false,
        explanationJa:
          'MDVM と同等の脆弱性インテリジェンス エンジンを用いてパッケージやファイル状態を検査するため、高い検出精度を維持します（なお MDE エージェントと併用すればランタイム特有の振る舞いやプロセス情報も補完されます）。',
        explanationEn:
          'It leverages the same MDVM vulnerability catalog on disk packages rather than sacrificing accuracy.',
      },
      {
        id: 'D',
        textJa: 'オンプレミスや Linux は非対応であり Azure Windows VM のみ対象とする',
        textEn: 'It strictly supports Windows Azure VMs and excludes Linux or AWS hosts',
        isCorrect: false,
        explanationJa:
          'エージェントレス スキャンは Azure / AWS / GCP 上の Windows VM と Linux VM の双方に対応しています。',
        explanationEn:
          'Agentless scanning supports both Windows and Linux VMs across Azure, AWS, and GCP.',
      },
    ],
    overallExplanationJa:
      'エージェントレス スキャンは「エージェント未展開 VM への即時カバレッジ（Zero-friction）」に優れ、MDE 統合スキャンは「リアルタイム検知・マルウェア対策・プロセス相関」に優れるため、Defender for Servers P2 環境では両方の利点を組み合わせる構成が一般的です。なお暗号化ディスク（CMK 等）やタグ除外設定に留意します。',
    overallExplanationEn:
      'Agentless scanning provides immediate, zero-impact visibility across Windows/Linux VMs (and AWS/GCP instances), complementing runtime MDE protection without creating blind spots on unmanaged VMs.',
    keyPointsJa: [
      'エージェントレス MDVM ＝ 帯域外ディスク スナップショット解析のため、VM 内エージェント・社内ネット通信・稼働負荷がゼロ',
      'Defender for Servers P2 または Defender CSPM で利用可能（タグによる除外設定も可能）',
    ],
    keyPointsEn: [
      'Out-of-band disk snapshot inspection requires no guest agent and adds zero VM CPU/memory overhead',
      'Available in Defender for Servers Plan 2 and Defender CSPM (with optional tag-based exclusions)',
    ],
    referenceTopic: 'VM 用のエージェントレス脆弱性スキャン（MDVM）',
  },
  {
    id: 'sakitoo-q100',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '応用 (Hard)',
    titleJa: 'Logs Ingestion API (DCR ベース) によるカスタム ログ テーブルへの取り込み',
    titleEn: 'Ingesting Custom JSON Logs into Sentinel Custom Tables via Logs Ingestion API (DCR)',
    scenarioJa:
      '社内独自開発のマイクロサービス アプリケーションが出力する独自 JSON 形式のセキュリティ監査ログを、Microsoft Sentinel の Log Analytics ワークスペース内にあるカスタム テーブル（`*_CL`）へ REST API 経由で直接取り込み、送信時に DCR（データ収集ルール）で不要フィールドのフィルタリングや列変換も行いたいと考えています。',
    scenarioEn:
      'An in-house application outputs custom JSON security events that must be pushed directly into a custom Log Analytics table (*_CL) in Microsoft Sentinel via REST API with DCR-based field transformation.',
    questionJa:
      'Microsoft Sentinel でカスタム ログ テーブルを作成して独自形式のログを取り込む際に使用する API はどれですか？',
    questionEn:
      'Which API should you use to ingest custom-format JSON logs into custom tables in Microsoft Sentinel / Log Analytics?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Storage REST API',
        textEn: 'Azure Storage REST API',
        isCorrect: false,
        explanationJa:
          'Azure Storage REST API は Blob や Queue の操作用であり、Sentinel のカスタム テーブルに直接データ取り込みを行う API ではありません。',
        explanationEn:
          'Azure Storage REST API manages blobs and queues rather than ingesting telemetry into Log Analytics tables.',
      },
      {
        id: 'B',
        textJa: 'Azure Event Hubs REST API',
        textEn: 'Azure Event Hubs REST API',
        isCorrect: false,
        explanationJa:
          'Event Hubs へ送信した後に別基盤（Functions や Diagnostic 等）で中継させる構成は可能ですが、Log Analytics のカスタム テーブルへ直接 JSON ログを取り込む標準 API ではありません。',
        explanationEn:
          'Event Hubs is a message broker rather than the direct Log Analytics custom-table ingestion API.',
      },
      {
        id: 'C',
        textJa: 'Log Analytics Query API',
        textEn: 'Log Analytics Query API',
        isCorrect: false,
        explanationJa:
          'Query API は格納済みデータに対して KQL クエリを実行して結果を読み出すための API であり、ログの書き込み・取り込みには使えません。',
        explanationEn:
          'The Log Analytics Query API reads and queries existing data rather than ingesting new logs.',
      },
      {
        id: 'D',
        textJa: 'Logs Ingestion API',
        textEn: 'Logs Ingestion API',
        isCorrect: true,
        explanationJa:
          '旧来の HTTP Data Collector API の後継となる「Logs Ingestion API」は、Data Collection Endpoint（DCE）と Data Collection Rule（DCR）を組み合わせて使用します。任意の REST クライアントや Azure Functions から JSON データを送信でき、DCR 内の KQL 変換（Ingestion-time transformation）で列整形・PII マスクを行った上で標準テーブルやカスタム テーブル（`*_CL`）へ格納できます。',
        explanationEn:
          'The DCR-based Logs Ingestion API (replacing the legacy HTTP Data Collector API) uses a Data Collection Endpoint (DCE) and Data Collection Rule (DCR) to accept custom JSON payloads, apply ingestion-time KQL transformations, and route data into custom (*_CL) or supported built-in tables.',
      },
    ],
    overallExplanationJa:
      '試験上の重要ポイントとして、従来の「HTTP Data Collector API（ワークスペース キー認証）」は 2026 年に向けて廃止（Legacy）となり、Microsoft Entra ID 認証とデータ収集ルール（DCR）による変換・ルーティングに対応した「Logs Ingestion API」および Codeless Connector Framework（CCF）が標準となっています。',
    overallExplanationEn:
      'The legacy HTTP Data Collector API (using shared workspace keys) is replaced by the Entra ID–authenticated Logs Ingestion API paired with DCEs and DCRs, supporting ingestion-time filtering and Basic/Auxiliary log tiers.',
    keyPointsJa: [
      'カスタム ログの REST API 直接取り込み ＝「Logs Ingestion API（DCE + DCR ベース）」',
      'Entra ID アプリ認証（データ収集ルールへの Monitoring Metrics Publisher ロール付与）と取り込み時 KQL 変換に対応',
    ],
    keyPointsEn: [
      'Custom REST log ingestion = DCR-based Logs Ingestion API + Data Collection Endpoint (DCE)',
      'Uses Microsoft Entra ID authentication (Monitoring Metrics Publisher role on the DCR) and supports ingestion-time KQL transforms',
    ],
    referenceTopic: 'Azure Monitor の Logs Ingestion API と DCR を使用したカスタム ログの取り込み',
  },
];
