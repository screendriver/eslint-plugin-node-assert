export default {
	files: ["./test/**/*.test.ts"],
	typescript: {
		rewritePaths: {
			"test/": "target/build/test/"
		},
		compile: false
	}
};
