<?php
// $gridDataProvider
$mark = new Person();
$mark->firstName = 'Mark';
$mark->lastName = 'Otto';
$mark->language = 'CSS';
$mark->hours = 10;

$jacob = new Person();
$jacob->firstName = 'Jacob';
$jacob->lastName = 'Thornton';
$jacob->language = 'JavaScript';
$jacob->hours = 20;

$stu = new Person();
$stu->firstName = 'Stu';
$stu->lastName = 'Dent';
$stu->language = 'HTML';
$stu->hours = 10;

$persons = array($mark, $jacob, $stu);
$provArray = array();

for($i = 0,$l=50;$i < $l;$i++){
    $depth = rand(0,2);
//    CVarDumper::dump($persons[$depth]->attributes,10,true);
//    exit;
    $person = new Person();
    $person->firstName= $persons[$depth]->firstName;
    $person->lastName= $persons[$depth]->lastName;
    $person->language= $persons[$depth]->language;
    $person->hours = rand(1,128);
    $person->id = $i+1;
    array_push($provArray,$person);
}
$gridDataProvider = new CArrayDataProvider(
    $provArray,
    array(
        'keyField' => 'id',         // PRIMARY KEY
        'id' => 'buyers_list',
        'sort'=>array(
            'attributes'=>array(
                'id'
            ),
        ),
        'pagination'=>array(
            'pageSize'=>5,
        ),
    )
);
// $gridColumns
$gridColumns = array(
    'id',
    'firstName',
    'lastName',
);
if($code){
$gridColumns=array(
    'id',
    'firstName',
    'lastName',
    'language',
    'hours'
);
}

?>
<div class="panel panel-default">
    <div class="panel-heading">
        <div class="panel-title">
            <h6>GridView</h6>
        </div>
    </div>
    <div class="panel-body">
        <?php $this->widget('bootstrap.widgets.BsGridView', array(
            'dataProvider' => $gridDataProvider,
//            'filter' => $gridDataProvider,
            'template' => "{summary}{items}{pager}",
            'columns' => $gridColumns,
            'type' => BSHtml::GRID_TYPE_STRIPED,
        )); ?>
    </div>
</div>
<?php if($code) :?>
    <pre class="pre-scrollable linenums prettyprint lang-py">
    &lt;?php $this->widget('bootstrap.widgets.BsGridView', array(
        'dataProvider' => $gridDataProvider,
        'template' => "{summary}{items}{pager}",
        'columns' => $gridColumns,
        'type' => BSHtml::GRID_TYPE_STRIPED,
    )); ?&gt;
    </pre>
<?php endif; ?>