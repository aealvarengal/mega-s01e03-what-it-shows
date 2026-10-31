import{t as e}from"./DK3Fl9T5.js";import{A as t,C as n,E as r,H as i,L as a,M as o,N as s,R as c,S as l,T as u,V as d,j as f,k as p,m,x as h,y as g,z as _}from"./iMfXNLlz.js";import"./DnrQqk1w.js";import{t as v}from"./C3_7nxss.js";import{t as y}from"./ClAzhcAr.js";var b=`0123456789ABCDEFGHJKMNPQRSTVWXYZ`;function x(e,t){let n=t>>>0;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619)>>>0;return n}function S(e){let t=e.trim(),n=x(t,2166136261),r=x(t,2654435769),i=BigInt(n)<<8n|BigInt(r&255),a=``;for(let e=0;e<8;e++)a=b[Number(i&31n)]+a,i>>=5n;return`DR-${a.slice(0,4)}-${a.slice(4)}`}var C=n(`<p class="stamp svelte-1280m42">desk ref <b class="svelte-1280m42"> </b></p>`),w=n(`<p class="stamp missing svelte-1280m42">no desk ref: this page isn't signed (no <code>signature</code> in its frontmatter)</p>`);function T(e,n){_(n,!0);let u=a(()=>n.signature?S(n.signature):null);var d=l(),v=f(d),y=e=>{var n=C(),a=s(t(n)),c=o(a,!0);i(n),p(()=>g(c,r(u))),h(e,n)},b=e=>{var t=w();h(e,t)};m(v,e=>{r(u)?e(y):e(b,-1)}),h(e,d),c()}var E=e({default:()=>F,metadata:()=>D}),D={layout:`runbook`,title:`#4471 was two problems, not one`,owner:`support desk`,status:`known`,reviewed:`2026-10-31T00:00:00.000Z`,signature:`Alejandro Alvarenga`},{layout:O,title:k,owner:A,status:j,reviewed:M,signature:N}=D,P=n(`<p><a href="/kb/incidents/4471">#4471</a> says one thing: the parser reads dates month first, 412 reports,
one fix queued. That is true of some of the reports. It is not true of all of them.</p> <!> <h2>What the table already shows</h2> <!> <p>The table shows two automatic causes, <code>parser</code> and <code>hint</code> — but they are one real problem, not
two: nothing in this pipeline checks the tenant’s actual locale before reading or hinting a date.
That single defect shows up two ways, by channel. The table’s own footnote — reports “read as a
one-day move” — is the tell for the real second problem: a month/day swap moves a date by weeks
or months; these reports move it by exactly one day. That is not this bug at all.</p> <h2>The two problems</h2> <ol><li><strong>Date reading isn’t locale-aware.</strong> On <code>app</code>/<code>email</code>/<code>booking-v2</code>-<code>form</code> traffic, the shared
parser reads a correctly-typed date as <code>MM/DD</code> regardless of locale, flipping it for day-first
tenants (<code>parser</code>, 379 reports). On <code>booking-v3</code>-<code>form</code> traffic, the form’s hint tells those
same tenants to type <code>MM/DD/YYYY</code>, and the form then reads what they typed the tenant’s actual
day-first way — flipping it for the opposite reason (<code>hint</code>, 33 reports). Same defect, two
symptoms. <strong>412 reports</strong> — the full ticket, counted as the desk’s own cause split already has
it. → <a href="https://github.com/aealvarengal/mega-s01e03-what-it-shows/issues/1" rel="nofollow">issue #1</a></li> <li><strong>The one-day bug.</strong> Five of those same 412 — flagged by <code>desk-notes.json</code> and footnoted on
the table above — are off by exactly one day, not a month/day swap: a meeting that showed one
date in Lisbon and another in Toronto, a month where every booking ran a day late and only
that month, an invite that arrived before the booking it was for. They stay filed under <code>parser</code> above (that’s where <code>causeOf()</code> puts them), but the actual cause is a timezone or
day-boundary problem, unrelated to date-order at all. <strong>5 reports</strong>, a subset of the 412, not
an addition to it. → <a href="https://github.com/aealvarengal/mega-s01e03-what-it-shows/issues/3" rel="nofollow">issue #3</a> (issue #2 was opened and then folded into #1 once it was clear it was the same defect, not a
second one — see the comment on #1.)</li></ol> <h2>Why the desk didn’t see it</h2> <p><a href="/kb/decisions/0001-dedupe-by-subject">Decision 0001</a> is right that merging on subject is fast
and that splitting later is cheaper than two engineers chasing the same bug. It says nothing
about the other direction: two different bugs can also <em>share</em> a subject line, and merging them
hides that there were ever two. “Merge when unsure” needs a partner rule: <strong>before you mark a
big ticket known, check whether every report in it actually shares a cause, not just a
subject.</strong> <code>causes.ts</code> already has the logic to check this; #4471 just never ran it before
someone wrote the word “known” on the page.</p> <h2>Lessons</h2> <ul><li>A ticket this size is not “mostly one bug reported many times” by default — it is one bug
only if something actually checked.</li> <li>A footnote on a table is a finding somebody has to read and act on, not decoration. This one
sat there since the table was built.</li> <li>The desk’s own tool for telling causes apart (<code>causes.ts</code>) already existed. Nobody pointed it
at #4471 until now.</li></ul> <!>`,1);function F(e){var t=P(),n=s(f(t),2);y(n,{kind:`warn`,children:(e,t)=>{d();var n=u(`#4471 is not one issue. It is two, merged because [decision 0001](/kb/decisions/0001-dedupe-by-subject)
merges on subject line alone, and both read the same to a tired desk at 9am.`);h(e,n)},$$slots:{default:!0}});var r=s(n,4);v(r,{ticket:4471}),T(s(r,16),{get signature(){return N}}),h(e,t)}export{F as n,E as t};