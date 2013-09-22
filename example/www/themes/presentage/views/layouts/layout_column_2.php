<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../assets/ico/favicon.png">

    <title>Layout Column2 for Presentage</title>
    <?php $this->renderPartial('//script_header') ?>
</head>
<body>
<?php $this->renderPartial('//layouts_column_2/fixed_navbar') ?>
    <div id="sidebar" class="affix col-lg-3 col-md-4 col-sm-12 col-xs-12">
        <?php $this->renderPartial('//layouts_column_2/sidebar') ?>
    </div>
    <div id="mainCol" class=" col-lg-offset-3 col-lg-9 col-md-offset-4 col-md-8 col-sm-12 col-xs-12">
            <div class="contentTop">
                <span class="pageTitle"><span class="icon-screen"></span>Dashboard</span>
            </div>
            <?php if(!empty($this->breadcrumbs)) : ?>
                <?php echo BSHtml::breadcrumbs($this->breadcrumbs); ?>
            <?php endif ?>
        <div class="contentHolder">
            <?php echo $content ?>
        </div>
    </div>
<div id="demo_modal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Modal title</h4>
            </div>
            <div class="modal-body">
                <p></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div><!-- /.modal -->
<div class="clearfix"></div>
</body>
</html>