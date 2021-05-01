const onmyjs = require('../dist/onmyjs').default;

var config = {
	compilerOptions: {
		target: 'es2020',
		lib: ['dom', 'dom.iterable', 'esnext'],
		allowJs: true,
		skipLibCheck: true,
		esModuleInterop: true,
		allowSyntheticDefaultImports: true,
		noImplicitReturns: true,
		strict: true,
		forceConsistentCasingInFileNames: true,
		module: 'es2020',
		moduleResolution: 'node',
		resolveJsonModule: true,
		isolatedModules: true,
		noEmit: false,
		jsx: 'react',
		newLine: 'lf',
	},
};

onmyjs(config, 'hitest', true);
