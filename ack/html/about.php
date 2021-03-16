<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
$this->title = '关于我们-'.Yii::$app->params['system']['name'];
$this->params['breadcrumbs'][] = $this->title;
?>
<!--page-index-->
<div class="page-index">
    <!--page-header-->
    <?php include_once __DIR__ . '/../common/header.php'; ?>
    <!--/page-header-->
    <!--pages-banner-->
    <section class="pages-banner-about">
        <h6 class="title">小舒适·大健康</h6>
    </section>
    <!--/pages-banner-->
    <!--page-about-->
    <section class="page-about">
        <h2 class="page-title">关于我们</h2>
        <div class="about-info">
            <div class="info-img"><img src="<?=YII_STATIC?>/static/images/about-img.png" alt=""></div>
            <p class="txt">艾斯凯（ACK）创立于2012年</p>
            <p class="txt">艾斯凯（香港）健康科技有限公司旗下的专业个人护理品牌，品牌主营养生足浴器、女性暖宫护腰带系列个人护理产品，并扩营刮痧仪、按摩椅、按摩仪（颈部/腰部/腹部等）、按摩床垫等家用按摩器产品。</p>
            <p class="txt">艾斯凯产品屡次斩获德国红点设计大奖，已覆盖各大社交电商以及自媒体电商平台。艾斯凯以“小舒适、大健康”为理念，致力于为顾客提供舒适好用的创新型居家好物产品。</p>
        </div>
        <div class="about-brand">
            <div class="brand brand-01">
                <div class="brand-img"><img src="<?=YII_STATIC?>/static/images/about-img-01.png" alt=""></div>
                <div class="brand-main">
                    <h3 class="title"><span>品牌理念</span></h3>
                    <p class="txt">品牌理念：“小舒适，大健康”</p>
                    <p class="txt">艾斯凯倡导做更好用的个人护理产品，秉承“保持匠心，做好每一款产品”的企业文化，致力于给顾客提供舒适好用的个人护理电器产品解决方案。</p>
                </div>
            </div>
            <div class="brand brand-02">
                <div class="brand-img"><img src="<?=YII_STATIC?>/static/images/about-img-02.png" alt=""></div>
                <div class="brand-main">
                    <h3 class="title"><span>品牌历程</span></h3>
                    <p class="txt">2009年 艾斯凯（香港）电子科技有限公司成立于中国香港。</p>
                    <p class="txt">2011年 艾斯凯进军电子商务平台。</p>
                    <p class="txt">2013年 艾斯凯首款智能足浴盆问世，热销全国。</p>
                    <p class="txt">2014年 艾斯凯上海研发中心成立，年投入研发经费超千万。</p>
                    <p class="txt">2015年 艾斯凯推出首款按摩椅 iHalo6，进军按摩椅行业。</p>
                    <p class="txt">2016年 艾斯凯足浴器、按摩椅产品进入国际市场。</p>
                    <p class="txt">2017年 艾斯凯首款搭载智能云芯片的iMate系列总裁按摩椅上线。</p>
                    <p class="txt">2019年 艾斯凯在浙江宁波、福建福安两地的智能生产基地正式投入使用。</p>
                    <p class="txt">2020年 艾斯凯暖宫腰带、家用按摩器持续全网销量领先。</p>
                    <p class="txt">2020年 艾斯凯折叠足浴盆全网销量领先。</p>
                </div>

            </div>
            <div class="brand brand-03">
                <div class="brand-img"><img src="<?=YII_STATIC?>/static/images/about-img-03.png" alt=""></div>
                <div class="brand-main">
                    <h3 class="title"><span>品牌故事</span></h3>
                    <p class="txt">艾斯凯是一家年轻的公司，公司成员以80后、90后为核心，自成立之初，艾斯凯就以“自主创新”作为企业发展的第一要素，我们拥有既懂企业管理和又深谙互联网应用的产品开发团队，专业和敏捷的运营团队，以及经验丰富的售后技术服务团队。经过近10年的持续投入、坚持与创新，艾斯凯已经成为个人护理电器领域的创新先行者。“宁静致远，砥砺前行，我们一直在创新向前！”</p>
                </div>

            </div>
            <div class="brand brand-04">
                <div class="brand-img"><img src="<?=YII_STATIC?>/static/images/about-img-04.png" alt=""></div>
                <div class="brand-main">
                    <h3 class="title"><span>加入我们</span></h3>
                    <p class="txt">艾斯凯，需要有才的你~<br />艾斯凯重视每一位员工的成长与提升<br />注重对员工进行多方位的培养及潜能的激发<br />艾斯凯致力为您提供一个既有成长与精彩又有挑战和温馨的发展平台如果你对待工作充满热情、思维清晰、认知细致<br />认同我们的理念、使命、价值观，愿意与我们携手前行<br />艾斯凯期待你的到来</p>
                </div>
            </div>
        </div>
    </section>
    <!--/page-about-->
    <!--page-footer-->
    <?php include_once __DIR__ . '/../common/footer.php'; ?>
    <!--/page-footer-->
</div>
<!--/page-index-->
