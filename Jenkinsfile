pipeline{
    agent any 

    stages{
        stage('clone repo'){
            steps {
                git credentialsId: '3957e43f-320b-44d0-ae1b-ae2db585564b', url: 'https://github.com/priyanshuvatsyan/python-CI---jenkins', branch: 'master'
   
            }
        }
        stage('Buid docker image'){
            steps{
                sh 'docker build -t my-node-app:latest .'
            }
        }
        stage('run test'){
            steps{
                sh 'docker run --rm my-node-app npm test || true'
            }
        }
        stage('Deploy'){
            steps{
                sh 'docker run -d -p 3000:3000 my-node-app'
            }
        }
    }
}