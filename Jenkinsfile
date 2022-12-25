pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
    stage('Git') {
      steps {
        git 'https://github.com/ahsantahseen/TestAPI.git'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }        
    stage('Run') {
      steps {
        sh 'pm2 start index.js'
      }
    }
  }
}