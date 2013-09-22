<?php
/**
 * SiteController class
 *
 * @author Antonio Ramirez <amigo.cobos@gmail.com>
 * @link http://www.ramirezcobos.com/
 * @link http://www.2amigos.us/
 * @copyright 2013 2amigOS! Consultation Group LLC
 * @license http://www.opensource.org/licenses/bsd-license.php New BSD License
 */
class SiteController extends EController
{
    public $layout;

    public function init(){
        Yii::app()->theme = 'presentage';
        $this->layout = '//layouts/demo';
    }
    /**
     * Renders index
     */
    public function actionIndex()
    {
        $this->render('index');
    }

    /**
     * This is the action to handle external exceptions.
     */
    public function actionError()
    {
        $error = Yii::app()->errorHandler->error;
        if ($error)
            $this->render('error', array('error'=>$error));
        else
            throw new CHttpException(404, 'Page not found.');
    }

    /**
     * Theme Demo
     */
    public function actionThemeDemo(){
        Yii::app()->theme = 'presentage';
        $this->layout = '//layouts/demo';
        $this->render('demo');
    }
    /**
     * Theme Demo
     */
    public function actionLayoutColumnTwo(){

        $this->render('demo');
    }
}