# angular-app - ����angular��ǰ�˿��

�����ṹ�� bower + angular + Yeoman generator
 
Ŀ������angular��ǰ����Ŀ���Կ�������~

##���ٿ�ʼ

1. npm install
2. bower install
3. grunt run-dev //��������Ĭ��ʹ��90001�˿�
4. grunt build-[:ngapp] //������Ӧ����Ŀ¼
5. grunt run-dist //Ԥ�����������Ŀ��Ĭ��ʹ��9002�˿�

##Ŀ¼�ṹ

    angular-app
      -src
        -img   ȫ��ͼƬ
        -script   ȫ��js
        -style   ȫ��css
      -ngApp   ����Ŀ¼
        -partial   ģ��
          index.html
          indexCtrl.js   ������
          index.less   ��ʽ
        -services
          ngService.js   ����
        ngapp.js   ·���ļ�
      -tasks   grunt�����ļ�
      Gruntfile.js
      index.html   ���ҳ��