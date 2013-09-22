    <div class="row">
        <div class="mainNav col-lg-4 col-md-3 hidden-sm hidden-xs">
            <?php if(!empty($this->mainNavPartial)) : ?>
                <?php foreach($this->mainNavPartial as $view) : ?>
                    <?php $this->renderPartial($view['partial']) ?>
                <?php endforeach; ?>
            <?php else:?>
                <ul class="list-group">
                    <li class="list-group-item active">
                        <a title="" href="">
                            <i class="icon-screen"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a title="" href="">
                            <i class="icon-books"></i>
                            <span>Präsentationen</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a title="" href="">
                            <i class="icon-user"></i>
                            <span>Benutzer</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a title="" href="">
                            <i class="icon-address-book"></i>
                            <span>Kontakte</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a title="" href="">
                            <i class="icon-stack"></i>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a title="" href="">
                            <i class="icon-settings"></i>
                            <span>Einstellungen</span>
                        </a>
                    </li>
                </ul>
            <?php endif; ?>
        </div>
        <div class="secondNav col-lg-8 col-md-9 col-sm-12 col-xs-12">
            <div class="secTop">
                <div class="balance">
                    <div class="balInfo">Balance:<span>Apr 21 2012</span></div>
                    <div class="balAmount"><span class="balBars"><canvas width="59" height="18" style="display: inline-block; width: 59px; height: 18px; vertical-align: top;"></canvas></span><span>$58,990</span></div>
                </div>
                <a href="#" class="triangle-red"></a>
            </div>
            <?php  $this->beginWidget('zii.widgets.CPortlet', array(
                'title'=>'',
            ));
            ?>
                <?php if(isset($this->menu) && is_array($this->menu)) : ?>
                    <?php echo BSHtml::listGroup($this->menu,array('class' => 'affix')); ?>
                    <div class="divider"><span></span></div>
                <?php endif; ?>
                <?php if(!empty($this->secondNavPartials)) : ?>
                    <?php $max = count($this->secondNavPartials)-1 ?>
                    <?php foreach($this->secondNavPartials  as $key =>$value) : ?>
                        <?php if($value['partial'] !== null) : ?>
                            <?php $this->renderPartial($value['partial'],isset($value['params'])?$value['params']:array() ) ?>
                            <div class="clearfix"></div>
                        <?php endif; ?>
                        <?php if($key < $max) : ?>
                            <div class="divider"><span></span></div>
                        <?php endif ?>
                    <?php endforeach; ?>
                <?php endif; ?>
            <?php $this->endWidget(); ?>
            <div class="clearfix"></div>
        </div>
    </div>