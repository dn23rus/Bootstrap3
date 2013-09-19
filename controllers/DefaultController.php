<?php

class DefaultController extends EController
{
    public function init(){
        Yii::app()->theme = 'presentage';
        $this->layout = '//layouts/layout_column_2';
    }
//    public function filters()
//    {
//        return array(
//            array(
//                'CHttpCacheFilter + index'
////                'lastModified'=>Yii::app()->db->createCommand("SELECT MAX(`update_time`) FROM {{post}}")->queryScalar(),
//            ),
//            array(
//                'COutputCache',
//                'duration'=>100,
//                'varyByParam'=>array('id'),
//            ),
//        );
//    }
	public function actionIndex()
	{
		$this->render('index');
	}

    public function actionAjaxTest(){
        $message = $_POST['message'];
        echo BSHtml::alert(BSHtml::ALERT_COLOR_INFO,"<strong>Message:</strong>{$message}");
        Yii::app()->end();
    }
}