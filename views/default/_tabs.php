<?php $id = uniqid('test_') ?>
<div class="panel panel-default">
    <div class="panel-heading">
        <div class="panel-title">
            <h6>Tabs</h6>
        </div>
    </div>
    <div class="panel-body">
        <ul id="<?php echo $id ?>" class="nav nav-tabs">
            <li class="active">
                <a href="#home_<?php echo $id ?>" data-toggle="tab"><i class="icon-home"></i><span>Icomoon Icons</span></a>
            </li>
            <li>
                <a href="#profile_<?php echo $id ?>" data-toggle="tab"><i class="glyphicon glyphicon-book"></i> <span>GlyphIcons</span></a>
            </li>
        </ul>
        <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade in active" id="home_<?php echo $id ?>">
                <?php $this->renderPartial('icons') ?>
            </div>
            <div class="tab-pane fade" id="profile_<?php echo $id ?>">
                <?php $this->renderPartial('glyph_icons') ?>
            </div>
        </div>
    </div>
</div>
<script>
    $(function () {
        $('#<?php echo $id?> a:last').tab('show');
        $('[data-toggle="dropdown"]').dropdown();
        $('[data-toggle="tooltip"]').tooltip();
    })
</script>