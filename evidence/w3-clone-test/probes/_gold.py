import re,subprocess
p='X3LockstepClone.dc.html'
s=open(p).read()
m=re.search(r'<script type="text/x-dc"[^>]*>(.*?)</script>',s,re.S)
open('_engine_test.js','w').write("class DCLogic{}\n"+m.group(1)+"\nconsole.log(fnv1a(canon(fold(2026,[],5*1440+1))));\nconst c=runChecks();console.log(c.filter(x=>!x.ok).map(x=>x.label));\n")
g=subprocess.run(['node','_engine_test.js'],capture_output=True,text=True).stdout.split('\n')[0].strip()
s=s.replace("const GOLDEN = 'TBD';","const GOLDEN = '%s';"%g)
open(p,'w').write(s)
print(g)
