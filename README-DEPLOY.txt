TaskFlex - GitHub Pages deploy (phone se)
1. github.com par login karein. New repository banayein, naam: josachinkumar-del.github.io  (Public)
2. Is ZIP ko Extract karein. Andar ki SAARI files aur folders (.nojekyll bhi) repository mein upload karein: Add file > Upload files > Commit.
3. Settings > Pages > Branch: main, folder: / (root) > Save.
4. 2-5 minute baad https://josachinkumar-del.github.io khulega.
5. Google Search Console (search.google.com/search-console) mein site add karein, sitemap.xml submit karein.
6. Repository ka naam bilkul josachinkumar-del.github.io hona chahiye.
AdSense: apna custom domain (jaise taskflex.in) lein aur GitHub Pages se jodein; github.io par AdSense aam taur par approve nahi hota.

3D Studio: Bentley model, pehli baar khulne par internet chahiye (three.js cdnjs se). Sitemap mein 3D Studio judi hui hai.

AFTER PUBLISHING: 1) open every page once, 2) add the site in Google Search Console (paste the tag where the comment is in index.html head, right after <title>), 3) submit sitemap.xml, 4) add ad code only in loadAds() in tfx-app.js and the CSP comment line, then put the lines in ads.txt.

ADS (Adsterra): Banner 300x250 id 32451782, Native id 32451828, Social Bar id 32451333, Popunder id 32451975. Code is in loadAds() in tfx-app.js. Ads load only after Accept. No ads on smart-notepad, leads-book, password-generator and the policy, about, contact pages. Ad pages have a wider CSP on purpose (ad networks load scripts from many hosts). On every new release change the version name in sw.js (V=...).
UPDATE FROM TERMUX: cd ~/storage/downloads/1 ; unzip -o NEW.zip ; git add -A ; git commit -m update ; git push

UPDATE v11: cookie bar removed on purpose. Ads (Adsterra) load automatically for every visitor on ad pages. Policies say this. EU/UK law and Adsterra rules may need consent for EU/UK traffic: the owner accepted this risk.

v13: popunder loads only on every 4th ad-page view (counter tfx-pv). 3D Model download shows a short sponsored overlay.
