Test the lambda locally 
```bash
npm run locally
```

Prepare code for update to the lambda
```bash
npx tsc
# zip node_modules, index.js, and myq.js
```

Pass an update to the lambda

```bash
aws lambda update-function-code --function-name garagedoor --zip-file fileb://garagedoor.zip --region ca-central-1
```

Invoke the lambda

```bash
base64 example.json > example.json.base64

aws lambda invoke --function-name garagedoor --payload file://event64.txt --region ca-central-1 response.json
```