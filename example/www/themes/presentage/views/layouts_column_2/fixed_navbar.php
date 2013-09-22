<!-- Fixed navbar -->
<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Yii Bootstrap3 Module</a>
        </div>
        <div class="navbar-collapse collapse">
            <?php $this->widget('bootstrap.widgets.BsNav',array(
                'htmlOptions' => array(
                    'class' => 'nav navbar-nav'
                ),
//                'items' => MenuList::model()->getTreeByPk(4)
            ));
            ?>
            <?php Yii::app()->clientScript->registerScript('dropdown',"$('.dropdown-toggle').dropdown();",CClientScript::POS_READY) ?>

            <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div><!--/.nav-collapse -->
    </div>
</div>