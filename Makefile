.PHONY: release
release: build
	git commit -am "release" || true
	npm version patch
	git push origin master

.PHONY: build
build:
	npm run build