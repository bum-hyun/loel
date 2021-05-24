cd public

cd ..
cd utils

node ./generateSitemap.js

curl http://google.com/ping?sitemap=https://loelblog.com/sitemap.xml
