<template>
  <div class="wrapper">
    <div class="panel-default">
      <div class="panel-body">
        <div class="main-container">
          <div class="entry-list">
            <div class="links-list">
              <el-card shadow="hover" class="article-card">
                <div class="content">
                  <Editor
                    style="overflow-y: hidden; text-align: initial; width: 100%"
                    v-model="content"
                    :defaultConfig="{
                      readOnly: true
                    }"
                    mode="default"
                  />
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import { Editor } from '@wangeditor/editor-for-vue'

const content = `本隐私政策（简称本政策）于 2023 年 9 月 21 日起发布并生效，本政策是龙岩创客科技有限公司快应用产品【云端视野】（以下简称“本产品”）的隐私保护相关事项所订立的有效合约。您通过点击确认本协议或以其他方式选择接受本协议，即表示您与龙岩创客科技有限公司达成协议并同意接受本政策的全部以下约定内容。
      【龙岩创客科技有限公司】系本产品的登记著作权人，依法享有本产品的著作权。
      本产品由龙岩创客科技有限公司运营并向您提供阅读服务并对您依法享有权利、履行义务、承担法律责任。
      本政策将帮助您了解以下内容： 1、我们如何收集和使用您的个人信息
      2、我们如何使用Cookie和同类技术
      3、我们如何共享、转让、公开披露您的个人信息 4、我们如何保护您的个人信息
      5、您的权利 6、我们如何处理儿童的个人信息
      7、您的个人信息如何在全球范围转移 8、本政策如何更新 9、本政策的适用
      10、争议解决 11、联系我们
      龙岩创客科技有限公司和本产品登记著作权人非常重视个人信息的保护。用户（简称“您”）在使用我们的产品或服务时，我们可能会收集和使用您的相关信息。一旦您选择使用我们的产品或服务，即表示您认可并接受本条款现有内容及其可能随时更新的内容。如果您不同意，应当终止使用本产品的服务。请您在使用我们的产品前，仔细阅读并了解本《隐私政策》。
      一、我们如何收集和使用您的个人信息
      个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。
      龙岩创客科技有限公司和本产品登记著作权人仅会出于本政策所述的以下目的、方式、范围在为您提供阅读服务时收集和使用您的个人信息：
      1、应用功能一：成为注册用户
      在申请成为本产品注册用户时，您需提供以下信息：您的设备信息或手机号。您提供的上述信息，授权我们在为您使用本服务期间持续使用。在您注销账号时，我们将停止使用并删除上述信息。
      2、应用功能二：个性化推荐、用户画像
      您使用我们服务时，本产品会记录您的操作日志，包括浏览点击记录、添加书架、搜索关键字、读过的书籍和章节、参与的活动。我们会基于前述信息对您的偏好、阅读习惯、使用产品的特征进行分析和用户画像，以便为您提供个性化、定制化的服务，向您展现或推荐相关程度更高的服务。
      3、应用功能六：权限启用
      为了提供给您服务之目的，本产品可能在您使用该应用某些场景下向您申请终端设备的以下权限，当然您可以拒绝开启以下权限，或在手机的设置中关闭本产品的以下权限，关闭以下权限不会影响您对本产品其他功能的使用：
      1.访问电话：通过获取您的电话状态权限我们记录您的设备识别码（即IMEI或IMSI码）进行匿名化处理，用于统计及安全校验；
      2.访问本地存储：通过开启本地存储权限，将本软件内的书籍下载到您的手机存储，以及通过手机存储将您的本地书籍上传到本软件；
      3.访问照片：您可以直接选择手机内的照片或图片进行上传或与客服沟通时提供证明；
      4.访问您设备上的媒体内容和文件：用于读写图书封面、活动图片的缓存，提升应用使用流畅度。
      5.开启推送：您可以通过开启推送权限来接收本产品推送的消息，你也可以关闭该权限；
      6.开启无线数据：您可以通过连接无线网络或蜂窝网络来实现本产品需要的联网功能；
      7.访问安装程序列表：通过获取您的安装程序列表我们可以确认您是否安装了我们所推广的产品，以便我们及时向您发放相应奖励。
      8.开启麦克风和语音识别：您可以通过语音来控制本软件的语音朗读功能及语音控制功能；
      9.开启后台应用刷新：开启后可以实现听书、语音朗读不受产品切换到后台的影响而暂停播放；
      10.使用剪贴板：您可以复制并粘贴读者QQ群号码、客服电话，也可以选择不使用剪贴板权限。
      这些描述补充了隐私政策中关于个人信息收集的目的、方式和范围的具体信息。请根据您的应用程序的实际情况和需要，进一步完善隐私政策，并确保遵守适用的法律法规。
      二、我们如何使用Cookie和同类技术
      Cookie和同类技术是互联网中的通用常用技术。为确保本平台正常运转、使您获得更轻松的访问体验、向您推荐您可能感兴趣的内容，我们可能会在您的移动设备上存储名为Cookie的小数据文件。Cookie通常包含标识符、站点名称以及一些号码和字符。借助于Cookie我们将记录您的登录信息及在本产品中的操作信息，以便我们存储您的偏好及使用习惯，帮您省去重复输入注册信息的步骤，并帮助判断您的账户安全状态，以为您提供更轻松的用户体验和服务。
      我们不会将Cookie用于本政策所述目的之外的任何用途。您可根据自己的偏好管理或停用Cookie。有关详情，请参AboutCookies.org。如果停用Cookie，您有可能无法享受最佳的服务体验，我们的推荐内容与您的相关性也会降低。
      三、我们如何共享、转让、公开披露您的个人信息 (一)共享
      我们不会将您的个人信息向龙岩创客科技有限公司和本产品登记著作权人及关联公司以外的任何公司、组织和个人共享，但以下情况除外：
      1、在获取明确同意的情况下共享：在获得您的明确同意后，我们会与其他方共享您的个人信息。
      2、我们可能会根据法律法规规定，或按政府主管部门的强制性规定，对外共享您的个人信息。
      3、与授权合作伙伴共享：仅为实现本政策中声明的目的，我们的某些服务将由授权合作伙伴提供。我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的合作伙伴无权将共享的个人信息用于任何其他用途。
      (二)转让
      我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：
      1、在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；
      2、在涉及合并、收购或破产清算时，若涉及到个人信息转让，我们会在要求新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。
      (三)公开披露 我们仅会在以下情况下，公开披露您的个人信息：
      1、获得您明确同意后；
      2、基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。
      (四)对外共享可能涉及的个人信息类型：设备识别码、产品版本信息；对外公开披露可能涉及的个人信息类型：阅读书籍、阅读时长。
      我们已知晓对外共享、转让、公开披露个人信息所承担的相应法律责任，并将采取合理措施保障个人信息安全。
      四、我们如何保护和保存您的个人信息 （一）技术保护措施
      我们非常重视您个人信息的安全，将努力采取各种符合业界标准的合理的安全措施来保护您的信息，使您的信息不会被泄漏、毁损或者丢失，包括但不限于SSL、隐私信息加密存储、数据中心的访问控制。我们会使用加密技术提高个人信息的安全性；我们会使用受信赖的保护机制防止个人信息遭到恶意攻击；我们会部署访问控制机制，尽力确保只有授权人员才可访问个人信息。
      （二）安全管理体系
      我们有行业先进的以数据为核心，围绕数据生命周期进行的数据安全管理体系，从组织建设、制度设计、人员管理、产品技术、个人信息安全影响评估方面多维度提升整个系统的安全性。
      我们有行业先进的以数据为核心，围绕数据生命周期进行的数据安全管理体系，从组织建设、制度设计、人员管理、产品技术、个人信息安全影响评估方面多维度提升整个系统的安全性。
      我们对可能接触到您的信息的员工或外包人员也采取了严格管理，包括但不限于根据岗位的不同采取不同的权限控制，与他们签署保密协议，监控他们的操作情况措施。
      （三）账号保护
      您的账户均有安全保护功能，请妥善保管您的账户及密码信息。如果您发现账号被盗用或个人信息泄露，请及时联系我们，以便我们采取相应措施。
      （四）信息安全事件处理
      尽管有前述安全措施，但同时也请您理解在信息网络上不存在“完善的安全措施”。
      若不幸发生个人信息安全事件，我们将按照法律法规的要求向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施。事件相关情况我们将以电话、推送通知的方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，上报个人信息安全事件的处置情况。
      （五）保存期限
      我们仅在中国大陆地区存放您的个人信息。我们会采取一切合理可行的措施，确保未收集无关的个人信息。我们只会在达成本政策所述目的所需的且法律规定的最短期限内保留您的个人信息，除非需要延长保留期或受到法律的允许。
      在您的个人信息超出保留期间后，我们会根据法律法规的要求删除您的个人信息、或使其匿名化处理。
      五、您的权利
      按照中国相关的法律、法规、标准，我们保障您对自己的个人信息行使以下权利：
      (一)访问您的个人信息
      您有权通过用户中心自行访问您的个人信息，可参见（六）我们如何响应您的请求，法律法规规定的例外情况除外
      (二)更正您的个人信息
      当您发现我们处理的关于您的个人信息有错误时，您有权要求我们做出更正。如何更正个人信息，可参见（六）我们如何响应您的请求。
      (三)删除您的个人信息 在下述情形中，您可以向我们提出删除个人信息的请求：
      1、我们处理个人信息的行为违反法律法规；
      2、我们收集、使用您的个人信息，却未征得您的同意；
      3、我们处理个人信息的行为违反了与您的约定；
      4、您不再使用我们的产品或服务，或您注销了账号；
      5、我们不再为您提供产品或服务。
      如何删除个人信息，可参见（六）我们如何响应您的请求，若我们决定遵循您的请求，我们还将同时通知从我们获得您的个人信息的实体要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。
      当您从我们的服务中删除信息后，我们可能不会立即在备份系统中删除相应的信息，但会在备份更新时删除这些信息。
      (六)响应您的上述请求 您可以通过手机“设置”功能选择关闭您希望关闭的权限。
      您还可以通过个人中心查看您的个人信息，也可以点击“我的”-“联系客服”，进行个人信息查询、个人信息更正、个人信息删除、用户账户注销、撤回已同意的授权的用户操作，为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。
      我们将在十五个工作日内作出答复。若您不满意，还可以通过与客服联系进行申诉。
      七、本政策如何更新
      本隐私政策更新后，本平台会在您登录及版本更新时以推送通知、弹窗、在网站公告形式向您展示变更后的隐私政策与内容，以便您及时了解本隐私政策的最新版本。我们将严格遵循向您披露的隐私政策收集使用规则开展个人信息处理活动，若个人信息使用目的发生变化时会再次征得您的同意，若您继续使用我们的服务，表示同意接受修订后的本政策的内容。
      八、本政策的适用 本产品的所有服务均适用本政策。
      当您在首次登录本产品时，我们会提示您进行阅读本政策，并征得您的同意。除非另有约定或者法律规定，本隐私政策不适用于龙岩创客科技有限公司和本产品登记著作权人链接到其他第三方的产品或服务，您使用这些第三方服务（包括您向这些第三方提供的任何个人信息），将受这些第三方的服务条款及隐私政策约束（而非本隐私政策），具体规定请您仔细阅读第三方的条款。请您妥善保护自己的个人信息，仅在必要的情况下向第三方提供。
      九、争议管辖
      本隐私政策的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律。
      若您和我们发生任何纠纷或争议，首先应友好协商解决；协商不成的，均提请北京仲裁委员会按照其仲裁规则进行仲裁。仲裁裁决是终局的，对双方均有约束力。
      十、联系我们 公司名称：龙岩创客科技有限公司 注册地址：漳平市桂林街道桂滨路
      8 号 301 室 个人信息保护相关负责人联系方式：
      客服电子邮件：jerome_77777@163.com
      您在产品使用的过程中及对本隐私政策有任何疑问、意见和建议的，均可通过以上联系方式与我们联系。`
</script>

<style media="screen" lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';
// @import '@/assets/scss/editor.scss';

.medium-zoom-image--opened {
  z-index: 10000;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .title-link {
    font-size: 1.8rem;
    font-weight: bolder;
    line-height: 1.2;
    text-decoration: none;
    color: $link-title;
    transition: color 0.5s ease-in;

    &:hover {
      transition: color 0.4s ease-out;
      color: $link-title-hover;
    }
  }

  .abstract {
    width: 100%;
    font-size: $font-small;
    color: $black-grey;
    line-height: 1.5;
    letter-spacing: 0.02rem;
    @include text-ellipsis-multiline(3);
  }

  .btns-group {
    @include flex-box-center(row, center, center);
    margin: 2.1rem auto;

    .btn {
      margin: 0 2rem;
      padding: 1rem 3rem;
      border-radius: 2rem;
      cursor: pointer;
      text-decoration: none;
      transition: all 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

      &:hover {
        transform: scale(1.1) rotate(-1deg);
      }
    }
  }

  .link-keywords,
  .link-review {
    margin: 15px 0;
    color: $black-grey;
    font-size: $font-small;
    line-height: 1.6;

    strong {
      font-weight: 700;
      color: $link-title;
    }
  }

  .link-keywords {
    word-break: break-all;
  }

  .link-desc {
    color: $silver-grey;
    margin: 15px auto;
    padding-left: 10px;
    word-break: break-all;
    line-height: $font-large;
    font-size: $font-small;
    word-spacing: 4px;
    border-left: 2px solid $border-grey;
  }

  .segmenting-line {
    border-top: 1px solid #8c8b8b;
    border-bottom: 1px solid #ffffff;
  }

  .link-screenshot {
    margin-bottom: 15px;
    filter: drop-shadow(0px 0px 15px lightgrey);

    .screenshot {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  }

  .info-block {
    @include flex-box-center(row, start, center);

    .avatar {
      position: relative;
      float: left;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      box-shadow: 0px 10px 30px 0px rgba(0, 64, 128, 0.1);
      margin: 0;
      aspect-ratio: 1 / 1;
    }

    .user-info {
      margin-right: 15px;
    }
  }

  .meta-box + .meta-box {
    margin-top: 15px;
  }

  .meta-box {
    font-size: $font-small;
    color: $silver-grey;

    .pitem {
      &:after {
        content: '\B7';
        margin: 0 0.4em;
      }
    }

    .classify {
      color: $brand;
      font-size: 500;
      margin-right: 1rem;
    }

    .username {
      color: $black-grey;

      &:hover {
        color: $brand;
      }
    }

    .tag {
      color: $silver-grey;
      cursor: pointer;

      &:hover {
        color: $brand;
      }
    }

    .tag + .tag {
      &:before {
        margin: 0 1rem;
        content: '/';
        color: $silver-grey;
      }
    }
  }

  .action-list {
    display: inline-flex;
    display: -webkit-flex;

    .action-pitem {
      @include flex-box-center(row, start);
      cursor: pointer;
      padding: 0;
      height: 100%;
      text-align: center;
      min-width: 3.6rem;
      font-size: $font-small;

      .icons {
        width: 2.5rem;
        height: 2.5rem;
        margin-left: 0;
        margin-right: 0.5rem;
      }

      .icon-green {
        color: $green;
      }

      .pitem-num {
        color: $silver-grey;
        margin-left: 0.2em;
        font-weight: 400;
      }
    }

    .action-pitem + .action-pitem {
      margin-left: 3rem;
      border-left: none;
    }
  }
}

@media screen and (max-width: $mobile-screen) {
  .content .btns-group .btn {
    padding: 1rem 2rem;
  }
}
</style>
