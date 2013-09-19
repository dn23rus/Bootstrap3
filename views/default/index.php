<?php
/* @var $this DefaultController */

$this->breadcrumbs = array(
    $this->module->id => 'bootstrap',
    'Base'
);
//array_push(
//    $this->mainNavPartials,
//    MainNavPartial::getView('_buttons')
//);
array_push(
    $this->secondNavPartials,
    NavPartial::getView('_affix')
);
Yii::app()->clientScript->registerScript('affix_sidebar',
    "
     $('.bs-sidenav').on('click','li',function(){
        if($(this).hasClass('activeli'))
            return false;
        $('.bs-sidenav .activeli').removeClass('activeli');
        $(this).addClass('activeli');
    });
    ",
    CClientScript::POS_READY
);
?>
<?php //CVarDumper::dump(Yii::app()->request,10,true) ?>
<?php //CVarDumper::dump($_SERVER,10,true) ?>
<?php $this->renderPartial('_middle_nav',array('code' => true)) ?>
<h1 id="charts" class="page-header">Charts</h1>
<div class="panel panel-warning">
    <div class="panel-heading">
        <h3  class="panel-title">Charts</h3>
    </div>
    <div class="panel-body">
        <?php $this->renderPartial('_chartjs',array('code' => true)) ?>
    </div>
</div>
<h1 id="forms" class="page-header">Forms</h1>
<div class="panel">
    <div class="panel-heading">
        <h3 class="panel-title">Forms</h3>
    </div>
    <div class="panel-body">
        <?php $this->renderPartial('_activeForm',array('code' => true)) ?>
    </div>
</div>
<h1 id="alert" class="page-header">Alert</h1>
<div class="panel">
    <div class="panel-heading">
        <h3 class="panel-title">Alert</h3>
    </div>
    <div class="panel-body">
        <?php $this->renderPartial('_alerts',array('code' => true)) ?>
    </div>
</div>
<h1 id="buttons" class="page-header">Buttons</h1>
<?php $this->renderPartial('_buttons',array('code' => true)) ?>

<h1 id="progress" class="page-header">Progress</h1>
<div class="panel">
    <div class="panel-heading">
        <h3 class="panel-title">Progress</h3>
    </div>
    <div class="panel-body">
        <?php $this->renderPartial('_progress',array('code' => true)) ?>
    </div>
</div>

<h1 id="pagination" class="page-header">Pagination</h1>
<div class="panel">
    <div class="panel-heading">
        <h3 class="panel-title">Pagination</h3>
    </div>
    <div class="panel-body">
        <?php $this->renderPartial('_pagination',array('code' => true)) ?>
    </div>
</div>
<h1 id="gridView" class="page-header">GridView</h1>
<?php $this->renderPartial('_grid_view',array('code' => true)) ?>
<h1 id="icons"  class="page-header">Icons</h1>
<?php $this->renderPartial('_tabs',array('code' => true)) ?>
