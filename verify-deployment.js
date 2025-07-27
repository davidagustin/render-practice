#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying deployment readiness for Elegant Furniture Store...\n');

const checks = [
  {
    name: 'Root package.json',
    file: 'package.json',
    required: true
  },
  {
    name: 'Client package.json',
    file: 'client/package.json',
    required: true
  },
  {
    name: 'Server index.js',
    file: 'server/index.js',
    required: true
  },
  {
    name: 'Render configuration',
    file: 'render.yaml',
    required: true
  },
  {
    name: 'Vue.js main component',
    file: 'client/src/App.vue',
    required: true
  },
  {
    name: 'Vue router configuration',
    file: 'client/src/router/index.js',
    required: true
  },
  {
    name: 'Pinia store',
    file: 'client/src/stores/furniture.js',
    required: true
  },
  {
    name: 'Vite configuration',
    file: 'client/vite.config.js',
    required: true
  },
  {
    name: 'Tailwind configuration',
    file: 'client/tailwind.config.js',
    required: true
  },
  {
    name: 'Git ignore file',
    file: '.gitignore',
    required: true
  },
  {
    name: 'README documentation',
    file: 'README.md',
    required: true
  },
  {
    name: 'Deployment guide',
    file: 'DEPLOYMENT.md',
    required: true
  }
];

let allPassed = true;

// Check required files
checks.forEach(check => {
  const exists = fs.existsSync(check.file);
  const status = exists ? '✅' : '❌';
  console.log(`${status} ${check.name}: ${check.file}`);
  
  if (!exists && check.required) {
    allPassed = false;
  }
});

console.log('\n📦 Checking package.json configurations...');

// Check root package.json
try {
  const rootPackage = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const hasBuildScript = rootPackage.scripts && rootPackage.scripts.build;
  const hasStartScript = rootPackage.scripts && rootPackage.scripts.start;
  const hasInstallAllScript = rootPackage.scripts && rootPackage.scripts['install-all'];
  
  console.log(`${hasBuildScript ? '✅' : '❌'} Build script: ${hasBuildScript ? 'Present' : 'Missing'}`);
  console.log(`${hasStartScript ? '✅' : '❌'} Start script: ${hasStartScript ? 'Present' : 'Missing'}`);
  console.log(`${hasInstallAllScript ? '✅' : '❌'} Install-all script: ${hasInstallAllScript ? 'Present' : 'Missing'}`);
  
  if (!hasBuildScript || !hasStartScript || !hasInstallAllScript) {
    allPassed = false;
  }
} catch (error) {
  console.log('❌ Error reading root package.json');
  allPassed = false;
}

// Check client package.json
try {
  const clientPackage = JSON.parse(fs.readFileSync('client/package.json', 'utf8'));
  const hasVue = clientPackage.dependencies && clientPackage.dependencies.vue;
  const hasVite = clientPackage.devDependencies && clientPackage.devDependencies.vite;
  
  console.log(`${hasVue ? '✅' : '❌'} Vue.js dependency: ${hasVue ? 'Present' : 'Missing'}`);
  console.log(`${hasVite ? '✅' : '❌'} Vite dependency: ${hasVite ? 'Present' : 'Missing'}`);
  
  if (!hasVue || !hasVite) {
    allPassed = false;
  }
} catch (error) {
  console.log('❌ Error reading client package.json');
  allPassed = false;
}

console.log('\n🔧 Checking render.yaml configuration...');

// Check render.yaml
try {
  const renderConfig = fs.readFileSync('render.yaml', 'utf8');
  const hasWebService = renderConfig.includes('type: web');
  const hasNodeRuntime = renderConfig.includes('runtime: node');
  const hasBuildCommand = renderConfig.includes('buildCommand');
  const hasStartCommand = renderConfig.includes('startCommand');
  
  console.log(`${hasWebService ? '✅' : '❌'} Web service type: ${hasWebService ? 'Present' : 'Missing'}`);
  console.log(`${hasNodeRuntime ? '✅' : '❌'} Node.js runtime: ${hasNodeRuntime ? 'Present' : 'Missing'}`);
  console.log(`${hasBuildCommand ? '✅' : '❌'} Build command: ${hasBuildCommand ? 'Present' : 'Missing'}`);
  console.log(`${hasStartCommand ? '✅' : '❌'} Start command: ${hasStartCommand ? 'Present' : 'Missing'}`);
  
  if (!hasWebService || !hasNodeRuntime || !hasBuildCommand || !hasStartCommand) {
    allPassed = false;
  }
} catch (error) {
  console.log('❌ Error reading render.yaml');
  allPassed = false;
}

console.log('\n📁 Checking directory structure...');

// Check if client/dist exists (after build)
const distExists = fs.existsSync('client/dist');
console.log(`${distExists ? '✅' : '⚠️'} Build output directory: ${distExists ? 'Present' : 'Missing (run npm run build)'}`);

console.log('\n🎯 Final Status:');

if (allPassed) {
  console.log('✅ All checks passed! Your application is ready for Render deployment.');
  console.log('\n🚀 Next steps:');
  console.log('1. Push your code to a Git repository');
  console.log('2. Go to https://dashboard.render.com/');
  console.log('3. Click "New +" → "Blueprint"');
  console.log('4. Connect your repository');
  console.log('5. Click "Apply"');
  console.log('\nYour app will be deployed automatically!');
} else {
  console.log('❌ Some checks failed. Please fix the issues before deploying.');
  console.log('\n💡 Run the following to fix common issues:');
  console.log('- npm install (install dependencies)');
  console.log('- npm run build (build the application)');
  console.log('- Check that all required files exist');
}

console.log('\n📋 Files included in deployment:');
const files = fs.readdirSync('.');
files.forEach(file => {
  if (file !== 'node_modules' && file !== '.git') {
    const stat = fs.statSync(file);
    if (stat.isDirectory()) {
      console.log(`📁 ${file}/`);
    } else {
      console.log(`📄 ${file}`);
    }
  }
});

console.log('\n🎉 Verification complete!'); 