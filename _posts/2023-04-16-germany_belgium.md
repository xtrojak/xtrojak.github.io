---
layout: page
permalink: /travelling/belgium-germany-2023
title: Galaxy admin training 2023, Gent, Belgium
---
 
[Zobraziť fotky](https://photos.app.goo.gl/4cipjHcA3Q9HszpDA)

Táto cesta bola veľmi precízne naplánovaná a podarila sa uskutočniť úplne dokonale. Dokonca sa mi toho podarilo ešte viac, ako som plánoval. Primárnym cieľom cesty bol [Galaxy admin training](https://galaxyproject.org/events/2023-admin-training/) v meste Gent v Belgicku. To malo trvať 5 dní od pondelka do piatka. Následne som sa chcel presunúť do menšieho mestečka Landen, kde by som strávil víkend u kamaráta Jakuba a jeho snúbenice. Odtiaľ som mal cestovať do Nemecka, konkrétne mesta Düsseldorf, kde som bol pozvaný urobiť prednášku a tiež mať niečo ako pohovor. Tam som mal stráviť dve noci, a na záver sa presunúť do Heidelbergu, kde by som navštívil kamarátku a odtiaľ šiel domov.

<iframe src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d1553474.878198376!2d5.865711003095133!3d50.24731203284087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x47c370e1339443ad%3A0x40099ab2f4d5140!2sGhent%2C%20Belgium!3m2!1d51.0500182!2d3.7303351!4m5!1s0x47c112166d7aba27%3A0x1a781b6090121039!2sLanden%2C%20Belgium!3m2!1d50.754771399999996!2d5.0813206!4m5!1s0x47b8c97bf1465907%3A0x42760fc4a2a73b0!2sD%C3%BCsseldorf%2C%20Germany!3m2!1d51.227741099999996!2d6.7734556!4m5!1s0x4797c1050eccdccd%3A0xefe6ea0044243ad7!2sHeidelberg%2C%20Germany!3m2!1d49.3987524!2d8.6724335!5e0!3m2!1sen!2scz!4v1682839678996!5m2!1sen!2scz" width="900" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

Cesta tam (16.4.)
-----------------

Cesta prebehla bez väčších problémov či meškaní. Pozostávala najprv z presunu do Prahy a následne na letisko. Tam som mal akurát čas na obed a už som aj letel do Bruselu. Teda presnejšie povedané na letisko Charleroi blízko Bruselu. Jedná sa o pomerne malé letisko, kde bol problém vôbec zohnať nejaké rozumné občerstvenie alebo sa niekde zašiť. To bolo mierne nepríjemné, keďže som musel čakať skoro dve hodiny na autobus do mesta Gent, čo bol cieľ mojej cesty.

Nakoniec som sa dočkal a autobusom spoločnosti Flibco som sa dostal priamo do Gentu. Tam som sa odviezol električkou ku svojmu hotelu. Električka jazdila po veľmi úzkych uličkách a nenechala vôbec priestor autám. Tých tu celkovo jazdilo pomenej, ľudia sa prevažne presúvali na bicykloch. Nakoniec som sa po asi 12 hodinách cesty dostal do hotela. Bol to bývalý kláštor (Monasterium Poortackere), schovaný medzi okolitými budovami. Preto bolo ťažké ho nejako rozumne odfotiť. Priestory vo vnútri boli veľmi unikátne. Aby som sa dostal do mojej izby, musel som prejsť niekoľkými podozrivo vyzerajúcimi dverami a dlhými chodbami.

![monastery-hotel](/images/belgium-germany-2023/monastery-hotel.png)

Galaxy admin training (17.4. - 21.4.)
-------------------------------------

Nasledujúcich 5 dní vyzeralo veľmi podobne. Vždy ráno som mal hotelové raňajky a potom som šiel na prednášky. Tie trvali približne od desiatej do piatej večer. Plus sme mali vždy pauzu na obed.

<details style="background-color: #f1f1f1;">
<summary style="font-weight: bold; color: blue; cursor: pointer;">Poznámky z prednášok (kliknutím zobraziť obsah)</summary>

<h5>setup VM</h5>
<ul>
    <li>na to maju tiez nejake skripty + ansible</li>
    <li><a href="https://github.com/galaxyproject/admin-training/tree/2023-gent/bootstrap-instances">https://github.com/galaxyproject/admin-training/tree/2023-gent/bootstrap-instances</a></li>
    <li>aj <a href="https://training.galaxyproject.org/training-material/topics/teaching/tutorials/galaxy-admin-training/tutorial.html">training</a></li>
    <li>DNS veci ale asi uz musia byt nastavene</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/ansible-galaxy/tutorial.html">Installing Galaxy with Ansible</a></h5>
<ul>
    <li>info o systeme kde pustim playbook</li>
</ul>
<p><code>ansible -i hosts -m setup my_hosts | less</code></p>
<ul>
    <li>good practive to close jinja formatting withing double quotes (because otherwise yaml parser can have issues)</li>
    <li>ansible is not great about undoing changes</li>
    <li>its okay to make a copy of a role and make local changes (e.g. usegalaxy.eu does that too)</li>
    <li>galaxy-ansible role of certain version can only install Galaxy up to a certain version</li>
    <li>ak pocas prvej instalacie sa mi zosype terminal (napr. broken pipe), tak sa Galaxy a vsetky potrebne services nespustia spravne !</li>
    <li>
        prve prihlasenie, resp. registracia vytvori admin usera
        <ul></ul>
    </li>
    <li>requests certificate failed sa moze stat - treba zbehnut znova</li>
    <li>
        usegalaxy.cz vo vyvoji
        <ul>
            <li><a href="https://github.com/CESNET/usegalaxy">https://github.com/CESNET/usegalaxy</a></li>
        </ul>
    </li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/backup-cleanup/tutorial.html">Server Maintenance</a></h5>
<ul>
    <li>
        toto by mohlo byt pouzite pri vytvoreni noveho Galaxy a zaroven zachovanie DB
        <ul>
            <li>
                <a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/backup-cleanup/tutorial.html#restoration">
                    https://training.galaxyproject.org/training-material/topics/admin/tutorials/backup-cleanup/tutorial.html#restoration
                </a>
            </li>
        </ul>
    </li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/customization/tutorial.html">Customization</a></h5>
<ul>
    <li>je mozne menit logo, nadpis, farby a hlavne uvodnu html stranku</li>
    <li>doporucene pouzit iFrame</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/tus/tutorial.html">TUS</a></h5>
<ul>
    <li>umoznuje bezat upload async mimo samotneho Galaxy</li>
    <li>
        command <code>systemctl status tusd-main</code> nefunguje
        <ul>
            <li>outdated - treba urobit <code>sudo systemctl start galaxy-tusd</code></li>
        </ul>
    </li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/reference-genomes/tutorial.html">Data Managers</a></h5>
<ul>
    <li>toto by slo mozno vyuzit na napr. storage velkych DB, ktore sa pouzivaju v tooloch</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/cvmfs/tutorial.html">CVMFS</a></h5>
<ul>
    <li>Cern virtual machine file system</li>
    <li>sharing huge datasets</li>
    <li>it uses AutoFS, downloads files and repositories only on-demand, cache available</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/apptainer/tutorial.html">Apptainer</a></h5>
<ul>
    <li>umoznuje pouzivat singularity containery</li>
    <li>
        Singularity is an open source container platform designed to be simple, fast, and secure. Unlike Docker containers which requires root privileges to run containers, Singularity is designed for ease-of-use on shared multiuser systems
        and in high performance computing (HPC) environments.
    </li>
    <li>v admin -&gt; manage dependencies mozeme najst info o stiahnutych containeroch</li>
    <li>novy paper o planemo: <code>The Planemo toolkit for developing, deploying, and executing scientific data analyses in Galaxy and beyond</code></li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/tool-management/tutorial.html">Ephemeris</a></h5>
<ul>
    <li><a href="https://ephemeris.readthedocs.io/en/latest/index.html">ephemeris</a> poskytuje vela uzitovnych toolov</li>
    <li>
        mozeme instalovat tools na nasej instancii pomocou <code>shed-tools</code>
        <ul>
            <li><code>shed-tools install -g https://galaxy.example.org -a &lt;api-key&gt; -t workflow_tools.yml</code></li>
        </ul>
    </li>
    <li>
        k tomu pouzit napr. list toolov extrahovanych z workflow
        <ul>
            <li><code>workflow-to-tools -w mapping.ga -o workflow_tools.yml -l Mapping</code></li>
        </ul>
    </li>
    <li>
        tiez umoznuje testovat tooly - tu je vlastne moznost spustit realne testy specifikovane v tool configu
        <ul>
            <li>toto vytvori <code>test_history</code> na danom Galaxy</li>
        </ul>
    </li>
    <li>
        ziskanie vsetkych toolov na nejakej instancii
        <ul>
            <li>get-tool-list -g &quot;<a href="https://umsa.cerit-sc.cz/">https://umsa.cerit-sc.cz/</a>&quot; -o &quot;umsa_files.yaml&quot;</li>
            <li>to by slo vyuzit pri migracii</li>
        </ul>
    </li>
    <li>neexistuje uninstall <a href="https://github.com/galaxyproject/ephemeris/issues/83">https://github.com/galaxyproject/ephemeris/issues/83</a></li>
    <li>usegalaxy.eu ma napr. <a href="https://github.com/usegalaxy-eu/usegalaxy-eu-tools">list</a> toolov, cize clovek moze pull requestom poziadat o automaticku instalaciu</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/data-library/tutorial.html">Data Libraries</a></h5>
<ul>
    <li>
        umoznuje pouzitie data libraries
        <ul>
            <li>Before we can import local data, we need to configure Galaxy to permit this</li>
        </ul>
    </li>
    <li>Datasets in libraries do not count against user quotas</li>
    <li>ephemeris moze byt pouzite na vytvaranie libraries (<code>setup-data-libraries</code>)</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/dev/tutorials/bioblend-api/tutorial.html">Scripting Galaxy with BioBlend</a></h5>
<ul>
    <li>idea - galaxy sa da pouzivat ako fancy vypocetny server, ktoremu posielam vypoctove ulohy zo skriptov</li>
    <li>novsie Galaxy maju automaticky pristupnu dokumentaciu API na suffixe <code>api/docs</code></li>
    <li>
        <a href="https://bioblend.readthedocs.io/en/latest/">bioblend</a> poskytuje API wrapper
        <ul>
            <li>vytvaranie, editovanie, mazanie historii</li>
        </ul>
    </li>
    <li>
        prekryv medzi BioBlend a Ephemeris?
        <ul>
            <li>jedno je command line tool a druhe python library</li>
        </ul>
    </li>
</ul>
<hr />
<h5>User, Groups, and Quotas management</h5>
<ul>
    <li><code>expose_dataset_path</code> - Users to see the full path of datasets via the &quot;View Details&quot; option in the history</li>
    <li>quotas should be definitely set for anonymous users !!!</li>
    <li>galaxyeu ma system, kde na poziadanie sa cloveku zvysi quota</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/connect-to-compute-cluster/tutorial.html">Cluster</a></h5>
<ul>
    <li>there is also user limit - maybe that&#39;s why we often wait for some jobs on UMSA?</li>
    <li>even running Slurm on the same machine is useful, because it allows to e.g. restart Galaxy without interrupting the jobs</li>
    <li>
        destinations were renamed to environments
        <ul>
            <li>which plugin (slurm/pulsar/...)</li>
            <li>on docker? what container?</li>
            <li>queue, cores, memory</li>
            <li>env variables</li>
        </ul>
    </li>
    <li>handlers/runners have specified workers - number of jobs that can run at the same time using the same handler</li>
    <li>job plugins usually require shared filesystem (except Pulsar)</li>
    <li>
        dynamic job runner
        <ul>
            <li>total perspective vortex or arbitrary python function to choose appropriate environment for a job</li>
        </ul>
    </li>
    <li>
        Slurm
        <ul>
            <li><a href="https://slurm.schedmd.com/configurator.html">config generator</a></li>
            <li>
                v logu je uzitocne si vsimnut:
                <ul>
                    <li>submitting file <code>/srv/galaxy/server/database/jobs/000/2/galaxy_2.sh</code>: This is the path to the script that is submitted to Slurm</li>
                    <li><code>(1) queued as 4</code>: Galaxy job id <code>1</code> is Slurm job id <code>4</code></li>
                    <li>we can see then details using <code>scontrol show job 4</code>If job id ended is reached, the job should show as done in the UI</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        Job Metrics
        <ul>
            <li>e.g. what is max memory my job used?</li>
            <li>can be gathered using <code>galaxy_job_metrics_plugins</code>, we can specify what we want to collect</li>
        </ul>
    </li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/job-destinations/tutorial.html">Job Destinations</a></h5>
<ul>
    <li>allows to control resources we assign to a job</li>
    <li>k tomu je uzitocne pouzit TPV</li>
    <li><a href="https://raw.githubusercontent.com/galaxyproject/tpv-shared-database/main/tools.yml">DB</a> toolov a ich vhodnych nastaveni resourcov - chceme tam dat nase?</li>
    <li>
        Configuring TPV to process resource parameters
        <ul>
            <li>aby sme pre tool <code>testing</code> umoznili zadanie resources ako parameter</li>
            <li>treba este pridat do <code>group_vars/galaxyservers.yml</code> pod <code>galaxy_job_config - tools</code> toto:</li>
        </ul>
    </li>
</ul>
<pre><code><span class="hljs-attr">    - id:</span> testing
<span class="hljs-attr">      environment:</span> tpv_dispatcher
<span class="hljs-attr">      resources:</span> testing
</code></pre>
<ul>
    <li>
        kde id je ID toolu, do ktoreho chceme pridat takuto moznost - i ked v realite to asi nie je take jednoduche
        <ul>
            <li>mozno by to slo nastavit v <code>default: []</code></li>
            <li>co sa teda stane, ak zmazem tool? co ak ho este nemam?</li>
        </ul>
    </li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/pulsar/tutorial.html">Pulsar</a></h5>
<ul>
    <li>umoznuje spustat joby na strojoch, ktore nezdielaju suborovy system</li>
    <li>na komunikaciu sa pouziva RabbitMQ</li>
    <li>
        After running the playbook, after RabbitMQ restarts:
        <ul>
            <li>On the oz/Pulsar VM: sudo systemctl restart pulsar</li>
            <li>On the eu/Galaxy VM: sudo galaxyctl restart</li>
        </ul>
    </li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/celery/tutorial.html">Celery</a></h5>
<ul>
    <li>can do some async IO tasks processing</li>
    <li>useful for huge Galaxy servers with high load</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/reports/tutorial.html">Reports</a></h5>
<ul>
    <li>can provide overview of jobs and users etc, but not secured, can break GDPR etc</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/gxadmin/tutorial.html">gxadmin</a></h5>
<ul>
    <li>
        <code>gxadmin query jobs</code> (ako galaxy user)
        <ul>
            <li>zoznam jobov, ktory handler, destination, user, ID</li>
        </ul>
    </li>
    <li>
        <code>gxadmin report job-info &lt;ID&gt;</code>
        <ul>
            <li>napr. Tool Parameters</li>
        </ul>
    </li>
    <li>
        <code>gxadmin query latest-users</code>
        <ul>
            <li>when joined, disk usage</li>
        </ul>
    </li>
    <li>
        <code>gxadmin query queue-overview</code>
        <ul>
            <li>mozeme pozorovat ake joby akurat bezia alebo cakaju</li>
            <li>da sa pouzit na generovanie grafov <a href="https://stats.galaxyproject.eu/">https://stats.galaxyproject.eu/</a></li>
        </ul>
    </li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/monitoring/tutorial.html">Telegraf and Grafana</a></h5>
<ul>
    <li>galaxy_url/grafana</li>
    <li>je celkom jednoduche rozbehat Grafanu na svojom serveri a potom importovat JSON config napr. z <a href="https://stats.galaxyproject.eu/d/000000023/node-detail-infrastructure?orgId=1">galaxyeu</a></li>
    <li>kedze vsetko je (v teorii) nakonfigurovane rovnako, tak to funguje</li>
    <li>je mozne si aj nastavit notifikacie, ked napr. hodnota niecoho sa dostane nad prahovu hodnotu</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/sentry/tutorial.html">Sentry</a></h5>
<ul>
    <li>
        tutorial nefunguje, treba este
        <ul>
            <li>pridat <code>sentry_domain: &quot;gat.\{\{ groups['galaxyservers'][0] \}\}&quot;</code> do <code>group_vars/all.yml</code></li>
            <li>In <code>group_vars/secrets.yml</code>, adjust the sentry URL from <code>https://</code> to <code>http://</code></li>
            <li>a v nejakom random momente spustit ako root:</li>
        </ul>
    </li>
</ul>
<pre><code>cd /srv/sentry
docker-compose down -v
docker <span class="hljs-keyword">volume</span><span class="bash"> rm sentry-clickhouse sentry-data sentry-kafka sentry-postgres sentry-redis sentry-symbolicator sentry-zookeeper
</span>rm -rf /srv/sentry
</code></pre>
<ul>
    <li>
        ale inak tool moze automaticky zbierat errory jednak na Galaxy urovni a Pulsar serverov, ale aj z toolov
        <ul>
            <li>a prezentuje ich v peknej a prehladnej forme (aka. netreba sa hrabat v logoch)</li>
            <li>mozeme odhalit error este predtym, ako si ho user vsimne</li>
        </ul>
    </li>
    <li>ked sa error opakuje, tak sa zgroupnu dokopy</li>
</ul>
<hr />
<h5><a href="https://training.galaxyproject.org/training-material/topics/admin/tutorials/troubleshooting/slides.html">Galaxy troubleshooting</a></h5>
<ul>
    <li>
        mala by byt nahravka tejto prezentacie
        <ul>
            <li><a href="https://psu.mediaspace.kaltura.com/media/Galaxy+Admin+Training+2023+Troubleshooting+Session/1_ouk96yh4">https://psu.mediaspace.kaltura.com/media/Galaxy+Admin+Training+2023+Troubleshooting+Session/1_ouk96yh4</a></li>
            <li>Command Line Records - <a href="https://asciinema.org/a/579121">https://asciinema.org/a/579121</a></li>
        </ul>
    </li>
    <li>
        start with logs - there are many of them! (many sub-services)
        <ul>
            <li>go to <code>/var/log</code> and run <code>ls -lrt</code> to see recently updated logs</li>
        </ul>
    </li>
    <li>
        e.g. startup issues
        <ul>
            <li>database migration - should be covered by ansible, but...</li>
            <li>
                stuck in restart loop
                <ul>
                    <li>go to end of log using <code>journalctl -e -u &#39;galaxy-*&#39;</code> and see log just before last start attempt</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>atop - ako htop ale detailnejsie a uklada si historiu?</li>
    <li>load average v htop - should be lower than number of cores</li>
    <li>
        <a href="https://docs.galaxyproject.org/en/master/dev/finding_and_improving_slow_code.html#profiling">profiling</a>
        <ul>
            <li><code>py-spy dump/top --pid &lt;process PID&gt;</code> (ako root)</li>
            <li><code>ps -axf | grep galaxy</code></li>
        </ul>
    </li>
    <li>
        in <code>/srv/galaxy/var/configs</code> we have bunch of configs related to tools
        <ul>
            <li>in <code>/srv/galaxy/var/shed_tools</code> installed tools</li>
            <li>
                je fajn si nastavit, aby defaultne joby, ktory failnu sa nezmazali ich logy
                <ul>
                    <li><code>cleanup_job</code> to <code>onsuccess</code> (kde?)</li>
                </ul>
            </li>
            <li>
                <code>srun --pty bash</code> - spusti terminal na VM kde ma job bezat (aj v spravnom env?)
                <ul>
                    <li>potom <code>sbatch galaxy_&lt;job ID&gt;.sh</code> (slurm)</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        &quot;gray&quot; queued jobs
        <ul>
            <li>depends on job handler configuration</li>
            <li><code>gxadmin query jobs --nonterminal</code></li>
        </ul>
    </li>
</ul>

</details>
<br/>

![group-photo](/images/belgium-germany-2023/group-photo.JPG)

Okrem účasti na tejto udalosti som mal aj trochu času na voľnočasové aktivity. Takmer každé ráno som sa šiel prejsť do mesta, keďže sme s prednáškami začínali až trochu neskôr. Rovnako sme mali večer často stretnutie na večeru, buď neoficiálne mimo hotelu, alebo oficiálne ako súčasť programu. Čas predtým som tiež často využil na potulky po meste a okolí. Zatiaľ čo obedy boli prevažne studené v podobe obložených bagiet, večera boli výrazne chutnejšie a zaujímavejšie. Všetko bolo navyše obohatené nekonečným množstvom hranoliek a majonézy, čo je veľmi typické pre Belgicko.

Okrem toho som stihol absolvovať komentovaný [výlet loďou](https://debootjesvangent.be/en) po miestnych kanáloch. Tie sa kľukatia cez centrum mesta a poskytujú tak unikátny pohľad na mesto. Bolo vidieť najkrajšie časti mesta a sprievodca nám povedal aj nejaké historické detaily či zaujímavosti o rôznych budovách, ktoré sme cestou videli. Zaujímavé bolo, že voda bola v niektorých ramenách, ktorými sme sa plavili, prakticky nehybná, či dokonca sme sa plavili ramenami, ktoré sú mŕtve.

![boat-trip](/images/belgium-germany-2023/boat-trip.jpg)

Vo štvrtok som vynechal časť prednášok, pretože som mal online pohovor. Toto nebolo naplánované úplne dopredu, dozvedel som sa to vlastne len pár dní dopredu. Jednalo sa o pohovor do medzinárodnej spoločnosti [EMBL](https://www.embl.org/).

Posledný deň sa mi ešte podarilo dostať na hrad Gravensteen v centre mesta. Bola to skôr pevnosť, bolo možné sa prejsť po hradbách a po točitých schodoch sa dostať do vnútorných priestrov. Na spríjemnenie zážitku slúžil audiosprievodca, ktorého som dostal pri vstupe.

![Gravensteen](/images/belgium-germany-2023/Gravensteen.jpg)

Landen (21.4. - 23.4.)
----------------------

V piatok ku večeru som sa zbalil a vybral na vlak. Ten ma za necelé dve hodiny doviezol priamo do menšieho mesta Landen, kde býva môj kamarát s jeho snúbenicou. Jakub ma čakal na stanici a spoločne sme šli ku nemu domov. Tam som sa zložil a dali sme si spoločnú večeru. Pôvodný plán bol vziať bicykle a ísť do neďalekej dediny na výlet, ale prišla búrka, tak sme sa ostali hrať spoločenské hry. K domu mali malú záhradku, na ktorej pomaly pracovali. Dom tiež okupovali dve čierne mačky, no boli veľmi bojazlivé, začali sa osmeľovať až ku koncu môjho pobytu.

V sobotu ráno sme išli vlakom do mesta Leuven, kde Jakub pracuje. Bol upršaný deň vhodný tak akurát na prácu a jedlo. U neho na pracovisku sme diskutovali detaily jeho práce a ukázal mi skleníky, v ktorých robieva experimenty s pestovaním paradajok. Okrem toho tam boli napríklad aj banány budúcnosti, pretože údajne aktuálne najbežnejšia odroda banánov vymiera. Potom sme sa ešte prešli cez park a autobusom odviezli do centra mesta, kde sa išli na obed. Okrem toho sme ešte stihli navštíviť botanickú záhradu a ísť na zákusok.

![botanic-garden](/images/belgium-germany-2023/botanic-garden.jpg)

Na druhý deň som okolo obeda odcestoval do Düsseldorfu v Nemecku. Cesta príjemná a jednoduchá sa zmenila v momente, keď som pri čakaní na vlak v Bruseli zistil, že vlak nepôjde. Ukázalo sa, že nemecký vlak z Frankfurtu nepríde až do Bruselu, ale o pár zastávok ďalej. Bohužiaľ táto informácia bola veľmi vágna a prišla neskoro, nebolo jasné čo treba robiť. Poslali nás na iný vlak (tým nás myslím plno ľudí, ktorí chceli ísť do Nemecka), ktorý nás mal dostať na údajnú zastávku. Nakoniec som sa na vlak naozaj dostal, ale bol to celkom zázrak. Navyše všetko meškalo a bol to chaos. Potom už šlo všetko ako malo a do Düsseldorfu som sa večer dostal.

Düsseldorf (23.4. - 25.4.)
--------------------------

Medzičasom som sa dozvedel, že z EMBL som pozvaný na ďalšie kolo pohovoru, tentokrát osobne. Zhodou okolností to malo byť v Heidelbergu, kam som mal namierené. Preto sa mi podarilo dohodnúť termín práve keď tam budem. Jeden z ľudí čo ma chceli stretnúť vtedy ale nemohol, takže sme v pondelok ráno mali ešte videohovor. Potom som sa pred obedom vybral na Heinrich Heine univerzitu. Tam som sa mal stretnúť s Ilkou Axmann, ktorá mi ukázala ich laboratória a ostatné priestory. Mali sme zaujímavé diskusie, ktoré pokračovali na spoločnom obede.

Po obede som mal prednášku, na ktorú som bol pozvaný. Vďaka tomu mi aj preplatili hotel a stravu, čo bola veľmi príjemná záležitosť. Prezentácia sa mi myslím že celkom vydarila. Začiatok bol slabší, ale potom sa obecenstvo chytilo a začalo rozumieť o čo sa jedná. Boli veľmi interaktívni a milí, mali veľa trefných otázok. Po prezentácii som mal ešte diskusiu s Ilkou o prípadnej spolupráci, dohodli sme sa že uvidíme čo prinesie budúcnosť. Odtiaľ som sa ešte šiel prejsť po promenáde popri rieke.

![promenada](/images/belgium-germany-2023/promenada.jpg)

Heidelberg (25.4. - 28.4.)
--------------------------

V utorok na obed som sa presunul Flixbusom do Heidelbergu tiež v Nemecku. Tam po mňa prišla kamarátka Lula a šli sme ku nej domov, kde som dostal vlastnú izbu na celý pobyt. Dali sme si večeru a pozerali jednu online prednášku.

Na druhý deň som mal dohodnuté druhé kolo pohovoru v EMBL. Tento výskumný ústav bol trochu skrytý a ťažko dostupný v lesoch, ale jazdí tam raz za čas autobus. Na mieste som mal som diskusie s troma skupinami ľudí, s ktorými by som na ponúkanej pozícii viac či menej spolupracoval. Všetci boli veľmi milí, dozvedel som sa mnoho užitočných informácií, plus ma vzali na obed. Ten bol v ich vlastnej jedálni, kde si všetci pochvaľovali cenu a kvalitu jedla (chodia tam ľudia z ostatných ústavov dookola). Pohovor ale nemal nejaký jasný koncept ani smer, takže som úplne nevedel aký výsledok si z toho odniesť, bolo to viac zamerané asi na to, aby ma spoznali. Hovoril som aj s riaditeľom ústavu, mali sme podľa mňa veľmi podobné názory.

![EMBL](/images/belgium-germany-2023/embl.jpg)

Po obede som sa stretol s Lulou, ktorá sa vyskytovala niekde v okolí. Zašli sme na kávu na strechu jednej futuristickej budovy, ktorá bola súčasť areálu. Ona tam potom ostala a ja som sa vrátil na jej byt, kde som pracoval. Večer sa vrátila a išli sme na pivo a večeru najprv s jej kolegami a potom kamarátmi

Posledný deň sme išli spoločne do jej práce (HITS), kde sme mali celý deň diskusie prevažne okolo jej dizertačnej práce a pracovali sme. Stretol som aj jej šéfa a mali sme aj spoločnú diskusiu. Na obed som mal zase raz pozvaný, Lula nejako vybavila, že som tam bol oficiálne a dostal som preto obed. Večer sme sa prešli domov a odtiaľ sme šli na večeru do talianskej reštaurácie, potom už spať.

Nakoniec som zmenil svoje pôvodné plány ísť preč až v piatok večer, lebo už na mňa doľahla únava z dlhého cestovania. Preto som šiel na ranný FlixBus do Prahy s prestupom v Nürnbergu. Cesta trvala nekonečne dlho, do Brna som prišiel až neskoro v noci.