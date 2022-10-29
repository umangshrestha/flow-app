--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0 (Debian 15.0-1.pgdg110+1)
-- Dumped by pg_dump version 15.0 (Debian 15.0-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Department; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Department" (
    id integer NOT NULL,
    department text NOT NULL,
    "facultyId" integer NOT NULL
);


ALTER TABLE public."Department" OWNER TO postgres;

--
-- Name: Department_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Department_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Department_id_seq" OWNER TO postgres;

--
-- Name: Department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Department_id_seq" OWNED BY public."Department".id;


--
-- Name: Faculty; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Faculty" (
    id integer NOT NULL,
    faculty text NOT NULL
);


ALTER TABLE public."Faculty" OWNER TO postgres;

--
-- Name: Faculty_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Faculty_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Faculty_id_seq" OWNER TO postgres;

--
-- Name: Faculty_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Faculty_id_seq" OWNED BY public."Faculty".id;


--
-- Name: Flow; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Flow" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdBy" text NOT NULL,
    description text NOT NULL,
    location text DEFAULT 'BBCafe'::text NOT NULL,
    "uwinId" text NOT NULL
);


ALTER TABLE public."Flow" OWNER TO postgres;

--
-- Name: Flow_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Flow_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Flow_id_seq" OWNER TO postgres;

--
-- Name: Flow_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Flow_id_seq" OWNED BY public."Flow".id;


--
-- Name: Form; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Form" (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    "parentTopic" text NOT NULL,
    "isDefault" boolean DEFAULT false NOT NULL
);


ALTER TABLE public."Form" OWNER TO postgres;

--
-- Name: FormSection; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FormSection" (
    id integer NOT NULL,
    "formId" integer,
    "formType" text NOT NULL,
    placeholder text NOT NULL,
    "isRequired" text NOT NULL,
    "helpInfo" text NOT NULL
);


ALTER TABLE public."FormSection" OWNER TO postgres;

--
-- Name: FormSection_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."FormSection_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."FormSection_id_seq" OWNER TO postgres;

--
-- Name: FormSection_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."FormSection_id_seq" OWNED BY public."FormSection".id;


--
-- Name: Form_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Form_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Form_id_seq" OWNER TO postgres;

--
-- Name: Form_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Form_id_seq" OWNED BY public."Form".id;


--
-- Name: Instructor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Instructor" (
    id text NOT NULL,
    email text NOT NULL,
    "fullName" text NOT NULL,
    "departmentId" integer NOT NULL
);


ALTER TABLE public."Instructor" OWNER TO postgres;

--
-- Name: Link; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Link" (
    id integer NOT NULL,
    link text NOT NULL,
    description text NOT NULL,
    "topicId" integer
);


ALTER TABLE public."Link" OWNER TO postgres;

--
-- Name: Link_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Link_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Link_id_seq" OWNER TO postgres;

--
-- Name: Link_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Link_id_seq" OWNED BY public."Link".id;


--
-- Name: ParentTopic; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ParentTopic" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    topic text NOT NULL
);


ALTER TABLE public."ParentTopic" OWNER TO postgres;

--
-- Name: ParentTopic_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ParentTopic_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ParentTopic_id_seq" OWNER TO postgres;

--
-- Name: ParentTopic_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ParentTopic_id_seq" OWNED BY public."ParentTopic".id;


--
-- Name: Tag; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Tag" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Tag" OWNER TO postgres;

--
-- Name: Tag_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Tag_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tag_id_seq" OWNER TO postgres;

--
-- Name: Tag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Tag_id_seq" OWNED BY public."Tag".id;


--
-- Name: Topic; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Topic" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    topic text NOT NULL,
    "parentTopicId" integer
);


ALTER TABLE public."Topic" OWNER TO postgres;

--
-- Name: Topic_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Topic_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Topic_id_seq" OWNER TO postgres;

--
-- Name: Topic_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Topic_id_seq" OWNED BY public."Topic".id;


--
-- Name: _FlowToTag; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_FlowToTag" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_FlowToTag" OWNER TO postgres;

--
-- Name: _FlowToTopic; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_FlowToTopic" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_FlowToTopic" OWNER TO postgres;

--
-- Name: _FormSectionToTopic; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_FormSectionToTopic" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_FormSectionToTopic" OWNER TO postgres;

--
-- Name: Department id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Department" ALTER COLUMN id SET DEFAULT nextval('public."Department_id_seq"'::regclass);


--
-- Name: Faculty id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Faculty" ALTER COLUMN id SET DEFAULT nextval('public."Faculty_id_seq"'::regclass);


--
-- Name: Flow id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Flow" ALTER COLUMN id SET DEFAULT nextval('public."Flow_id_seq"'::regclass);


--
-- Name: Form id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Form" ALTER COLUMN id SET DEFAULT nextval('public."Form_id_seq"'::regclass);


--
-- Name: FormSection id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FormSection" ALTER COLUMN id SET DEFAULT nextval('public."FormSection_id_seq"'::regclass);


--
-- Name: Link id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Link" ALTER COLUMN id SET DEFAULT nextval('public."Link_id_seq"'::regclass);


--
-- Name: ParentTopic id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ParentTopic" ALTER COLUMN id SET DEFAULT nextval('public."ParentTopic_id_seq"'::regclass);


--
-- Name: Tag id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tag" ALTER COLUMN id SET DEFAULT nextval('public."Tag_id_seq"'::regclass);


--
-- Name: Topic id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Topic" ALTER COLUMN id SET DEFAULT nextval('public."Topic_id_seq"'::regclass);


--
-- Data for Name: Department; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Department" (id, department, "facultyId") FROM stdin;
1	Civil and Environmental Engineering	1
2	Mechanical, Automotive & Materials Engineering	1
3	Electrical and Computer Engineering	1
4	Faculty of Engineering	1
5	School of Dramatic Art	7
6	Women's and Gender Studies	7
7	Faculty of Arts, Humanities & Social Sciences	7
8	Faculty of Human Kinetics	10
9	Kinesiology	10
10	Political Science	7
11	Biomedical Sciences	13
12	School of Computer Science	13
13	Faculty of Science	13
14	Languages, Literatures and Cultures	7
15	Law Library	17
16	Faculty of Law	17
17	Centre for English Language Development	19
18	Co-operative Education and Workplace Partnerships	19
19	Office of Research Ethics	21
20	School of the Environment	13
21	Human Resources	19
22	Philosophy	7
23	Psychology	7
24	English and Creative Writing	7
25	Chemistry & Biochemistry	13
26	Mathematics and Statistics	13
27	Sociology, Anthropology, and Criminology	7
28	Physics	13
29	Faculty of Graduate Studies and Office of Quality Assurance	31
30	Economics	13
31	School of Social Work	7
32	Continuing Education	34
33	Integrative Biology	13
34	Academic Advising Centre	19
35	Academic Writing Centre	19
36	Centre for Smart Community Innovation	19
37	Chemical Control Centre	19
38	Unknown	40
39	Faculty of Nursing	41
40	Odette School Of Business	42
41	Faculty of Education	34
42	School of Creative Arts	7
43	Communication, Media and Film	7
44	Centre for Teaching & Learning	46
45	Leddy Library - Information Services	47
46	Public Affairs and Communications	48
47	Languages, Literatures And Cultures	7
48	Student Accessibility Services	19
49	Provost	31
50	Budgets And Financial Services	19
51	History	7
52	Alumni	31
53	Schulich School of Medicine & Dentistry - Windsor Program	55
54	Outside of University (Guest Speaker)	55
55	Centre for Executive and Professional Education	19
56	Athletics & Recreational Services	19
57	Leddy Library - Access Services	47
58	Community Legal Aid	19
59	Faculty of Graduate Studies	31
60	I.T. Services - Client Support	19
61	Career Development and Experiential Learning	19
62	International Students Centre	19
63	Student Success and Leadership Centre	19
64	Office of the Registrar - Client Services	19
\.


--
-- Data for Name: Faculty; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Faculty" (id, faculty) FROM stdin;
1	Faculty of Engineering
7	Faculty of Arts, Humanities & Social Sciences
10	Faculty of Human Kinetics
13	Faculty of Science
17	Faculty of Law
19	Administration
21	Research Ethics
31	Faculty of Graduate Studies
34	Faculty of Education
40	Unknown
41	Faculty of Nursing
42	Business
46	Centre for Teaching & Learning
47	Leddy Library
48	Public Affairs and Communications
55	Other
\.


--
-- Data for Name: Flow; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Flow" (id, "createdAt", "updatedAt", "createdBy", description, location, "uwinId") FROM stdin;
\.


--
-- Data for Name: Form; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Form" (id, name, description, "parentTopic", "isDefault") FROM stdin;
\.


--
-- Data for Name: FormSection; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."FormSection" (id, "formId", "formType", placeholder, "isRequired", "helpInfo") FROM stdin;
\.


--
-- Data for Name: Instructor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Instructor" (id, email, "fullName", "departmentId") FROM stdin;
biswas	biswas@uwindsor.ca	Nihar Biswas	1
kader	kader@uwindsor.ca	Walid Abdul-Kader	2
rajeev	rajeev@uwindsor.ca	Rajeev Ruparathna	1
rajesh	rajesh@uwindsor.ca	Rajesh Seth	1
jgreen	jgreen@uwindsor.ca	Jim Green	25
oajianu	oajianu@uwindsor.ca	Ofelia Jianu	2
lafren1	lafren1@uwindsor.ca	Kathryn Lafreniere	23
Unknown	Unknown	Unknown Unknown	38
doxlog1	doxlog1@uwindsor.ca	Brian MacPherson	22
mathes4	mathes4@uwindsor.ca	Suzanne Matheson	24
ssamet	ssamet@uwindsor.ca	Saeed Samet	12
dilworth	dilworth@uwindsor.ca	Thomas Dilworth	24
chandler	chandler@uwindsor.ca	Krista Chandler	9
dandrews	dandrews@uwindsor.ca	Dave Andrews	9
haaser	haaser@uwindsor.ca	Rita Haase	6
mpkrause	mpkrause@uwindsor.ca	Matthew Krause	9
jluft	jluft@uwindsor.ca	Joanna Luft	24
natalieg	natalieg@uwindsor.ca	Natalie Giannotti	39
walsha	walsha@uwindsor.ca	Lionel Walsh	5
bjd	bjd@uwindsor.ca	John Dickenson	40
chike	chike@uwindsor.ca	Chike Okechuku	40
dariam	dariam@uwindsor.ca	Daria Milenkovic	40
dstanley	dstanley@uwindsor.ca	Darren Stanley	41
holloway	holloway@uwindsor.ca	Susan Holloway	41
jhiggin	jhiggin@uwindsor.ca	James Higginson	40
jmihalo	jmihalo@uwindsor.ca	John Mihalo	40
kwli	kwli@uwindsor.ca	Kevin Li	40
maz	maz@uwindsor.ca	Zhenzhong Ma	40
mfields	mfields@uwindsor.ca	Mitch Fields	40
oliveraj	oliveraj@uwindsor.ca	Celso Olivera	40
plum	plum@uwindsor.ca	Peter Miller	40
sandran	sandran@uwindsor.ca	Sandra Neposlan	40
whk	whk@uwindsor.ca	Werner Keller	40
scharoun	scharoun@uwindsor.ca	Sara Scharoun-Benson	9
arnoldr	arnoldr@uwindsor.ca	Bob Arnold	27
arossini	arossini@uwindsor.ca	Antonio Rossini	14
ccollier	ccollier@uwindsor.ca	Cheryl Collier	10
llee	llee@uwindsor.ca	Lana Lee	25
fgerra	fgerra@uwindsor.ca	Fred Gerra	16
shelby	shelby@uwindsor.ca	Shelby Marchand	17
smcnorto	smcnorto@uwindsor.ca	Sara McNorton	11
lewis3	lewis3@uwindsor.ca	Jackie Lewis	27
smcadam	smcadam@uwindsor.ca	Sylvia McAdam	16
csenn	csenn@uwindsor.ca	Charlene Senn	23
omorodif	omorodif@uwindsor.ca	Francisca Omorodion	27
wlyee	wlyee@uwindsor.ca	Wai Ling Yee	26
ariahi	ariahi@uwindsor.ca	Reza Riahi	2
glan	glan@uwindsor.ca	George Lan	40
sbick	sbick@uwindsor.ca	Sally Bick	42
nabil	nabil@uwindsor.ca	Nabil Abdullah	12
borawski	borawski@uwindsor.ca	Bill Orawski	40
dutton	dutton@uwindsor.ca	Philip Dutton	13
vanengnc	vanengnc@uwindsor.ca	Niel Van Engelen	1
dcapaldi	dcapaldi@uwindsor.ca	Dante Capaldi	25
aalzaher	aalzaher@uwindsor.ca	Abdo Al-Zaher	2
makpata	makpata@uwindsor.ca	Michelle Akpata	31
arahimi	arahimi@uwindsor.ca	Afshin Rahimi	2
danwu	danwu@uwindsor.ca	Dan Wu	12
agreco	agreco@uwindsor.ca	Adelle Greco	31
jdecou	jdecou@uwindsor.ca	Judy Decou	40
nakhaie	nakhaie@uwindsor.ca	Reza Nakhaie	27
virdi	virdi@uwindsor.ca	Jyotika Virdi	43
cottreau	cottreau@uwindsor.ca	Deborah Cottreau	5
icohen	icohen@uwindsor.ca	Ira Cohen	32
fouzia1	fouzia1@uwindsor.ca	Fouzia Baki	2
mstewart	mstewart@uwindsor.ca	Michele Stewart	40
edrisy	edrisy@uwindsor.ca	Afsaneh Edrisy	2
mps	mps@uwindsor.ca	Maureen Sterling	40
soula	soula@uwindsor.ca	Soula Serra	32
amullen	amullen@uwindsor.ca	Anne Mullen	32
ksoucie	ksoucie@uwindsor.ca	Kendall Soucie	23
kalyanis	kalyanis@uwindsor.ca	Kalyani Selvarajah	12
parr1	parr1@uwindsor.ca	Kate Parr	22
lcabri	lcabri@uwindsor.ca	Louis Cabri	24
camisha	camisha@uwindsor.ca	Camisha Sibblis	31
wconkli	wconkli@uwindsor.ca	William Conklin	16
ohlmann	ohlmann@uwindsor.ca	Judy Sinanga-Ohlmann	14
swidan1	swidan1@uwindsor.ca	Sara Swidan	40
vasanthi	vasanthi@uwindsor.ca	Vasanthi Venkatesh	16
kstefan4	kstefan4@uwindsor.ca	Kirsten Stefanik	16
boulos	boulos@uwindsor.ca	Pierre Boulos	44
hortons	hortons@uwindsor.ca	Sean Horton	9
parasch	parasch@uwindsor.ca	Vicky Paraschak	9
urvashi	urvashi@uwindsor.ca	Urvashi Soni-Sinha	27
ytong	ytong@uwindsor.ca	Yufeng Tong	25
bethdaly	bethdaly@uwindsor.ca	Beth Daly	7
gao41	gao41@uwindsor.ca	Hekun Gao	40
ursel	ursel@uwindsor.ca	Nancy Ursel	40
scowan	scowan@uwindsor.ca	Scott Cowan	45
tirupati	tirupati@uwindsor.ca	Tirupati Bolisetti	1
amamwiko	amamwiko@uwindsor.ca	Ashley Falzetti	6
tranum	tranum@uwindsor.ca	Tranum Kaur	25
smattson	smattson@uwindsor.ca	Scott Mattson	23
ashovlin	ashovlin@uwindsor.ca	Amanada Shovlin	16
mastr112	mastr112@uwindsor.ca	Kyle Mastronardi	38
jdefoe	jdefoe@uwindsor.ca	Jeff Defoe	2
overhol	overhol@uwindsor.ca	Marion Overholt	16
billyv	billyv@uwindsor.ca	Bill Vaillancourt	41
sp	sp@uwindsor.ca	Sukanya Pillay	16
amahajan	amahajan@uwindsor.ca	Ashish Mahajan	40
izabella	izabella@uwindsor.ca	Izabella Kojic-Sabo	17
benkon	benkon@uwindsor.ca	Noah Benko	38
evaneek	evaneek@uwindsor.ca	Esther Van Eek	5
vmio	vmio@uwindsor.ca	Vanessa Mio	41
cuzz	cuzz@uwindsor.ca	John Cuzzocrea	41
pwing	pwing@uwindsor.ca	Paula Wing	5
aplumb	aplumb@uwindsor.ca	Anouchka Plumb	17
bsavic	bsavic@uwindsor.ca	Bob Savic	41
ttiegs	ttiegs@uwindsor.ca	Tim Tiegs	41
qin21	qin21@uwindsor.ca	Manling Qin	1
amya	amya@uwindsor.ca	Amy Alberton	31
beliciud	beliciud@uwindsor.ca	Daniel Beliciu	23
abarnable	abarnable@uwindsor.ca	Alexia Barnable	39
mcioppa	mcioppa@uwindsor.ca	Maria Cioppa	20
nstonge	nstonge@uwindsor.ca	Nancy St. Onge	31
tous	tous@uwindsor.ca	Wayne Tousignant	41
jamieb	jamieb@uwindsor.ca	Jamie Bumbacco	41
nasimu	nasimu@uwindsor.ca	Nasim Uddin	38
taylor	taylor@uwindsor.ca	Keith Taylor	25
ricciard	ricciard@uwindsor.ca	Philip Ricciardi	23
ims	ims@uwindsor.ca	Iain Samson	20
bransabo	bransabo@uwindsor.ca	Brandon Sabourin	41
kedmunds	kedmunds@uwindsor.ca	Kathryn Edmunds	39
kverner	kverner@uwindsor.ca	Kristina Verner	12
bbrodie	bbrodie@uwindsor.ca	Barry Brodie	5
jstare	jstare@uwindsor.ca	Jerneja Stare	33
agilzay	agilzay@uwindsor.ca	Abdul Gilzay	32
lmiljan	lmiljan@uwindsor.ca	Lydia Miljan	10
pvoyer	pvoyer@uwindsor.ca	Peter Voyer	40
kuhnd	kuhnd@uwindsor.ca	Beth Archer-Kuhn	31
jmaron	jmaron@uwindsor.ca	Jeff Marontate	41
gzhang	gzhang@uwindsor.ca	Guoqing Zhang	2
gfenn	gfenn@uwindsor.ca	Garnet Fenn	40
stagner	stagner@uwindsor.ca	Jacqueline Stagner	41
alnidawy	alnidawy@uwindsor.ca	Nedhal Al-Nidawy	25
kechego1	kechego1@uwindsor.ca	Jaimie Kechego	44
dkane	dkane@uwindsor.ca	Debbie Kane	39
tbrunet	tbrunet@uwindsor.ca	Tim Brunet	46
rmusced	rmusced@uwindsor.ca	Roberto Muscedere	3
xxu	xxu@uwindsor.ca	Iris Xu	1
mooredo	mooredo@uwindsor.ca	Dorian Moore	42
mguthrie	mguthrie@uwindsor.ca	Mary Guthrie	40
damianak	damianak@uwindsor.ca	Thecla Damianakis	31
csmith	csmith@uwindsor.ca	Clayton Smith	41
bsethi	bsethi@uwindsor.ca	Bharati Sethi	32
cstirbys	cstirbys@uwindsor.ca	Cynthia Stirbys	31
anans	anans@uwindsor.ca	Sirinart Ananvoranich	25
zielin1	zielin1@uwindsor.ca	Barbara Zielinski	33
kamelif	kamelif@uwindsor.ca	Leila Kamelifar	41
marium	marium@uwindsor.ca	Marium Tolson-Murtty	41
moore12v	moore12v@uwindsor.ca	Alan Moore	32
dsirek	dsirek@uwindsor.ca	Danielle Sirek	41
ndolbec	ndolbec@uwindsor.ca	Nathalie Dolbec	47
zakoorf	zakoorf@uwindsor.ca	Falan Zakoor	39
jlorito	jlorito@uwindsor.ca	Joyceln Lorito	48
vtr	vtr@uwindsor.ca	Vesselina Roussinova	2
leann	leann@uwindsor.ca	Leann Sassine	32
pfritz	pfritz@uwindsor.ca	Patti Fritz	23
henderin	henderin@uwindsor.ca	Chris Henderin	49
queenvi	queenvi@uwindsor.ca	Rachelle Quenneville	41
keatin5	keatin5@uwindsor.ca	Michael Keating	5
nharney	nharney@uwindsor.ca	Nick Harney	27
clanoue	clanoue@uwindsor.ca	Chris Lanoue	50
aghumman	aghumman@uwindsor.ca	Azra Ghumman	25
albanese	albanese@uwindsor.ca	John Albanese	27
aong	aong@uwindsor.ca	Audra Ong	40
nelkord	nelkord@uwindsor.ca	Nesreen El Kord	41
vanlaerh	vanlaerh@uwindsor.ca	Sherah Vanlaerhoven	33
craigl	craigl@uwindsor.ca	Joan Craig	23
jennifer	jennifer@uwindsor.ca	Jennifer Johrendt	41
odoh	odoh@uwindsor.ca	Robert Odoh	12
megquinn	megquinn@uwindsor.ca	Meaghen Quinn	5
dpusca	dpusca@uwindsor.ca	Daniela Pusca	2
yu115	yu115@uwindsor.ca	Yuanming Yu	2
cmwell	cmwell@uwindsor.ca	Chris Wellington	39
patterwa	patterwa@uwindsor.ca	Wayne Patterson	16
nantaisc	nantaisc@uwindsor.ca	Cynthia Nantais	16
imizel	imizel@uwindsor.ca	Ilana Mizel	16
hae	hae@uwindsor.ca	Hoda ElMaraghy	2
mpilling	mpilling@uwindsor.ca	Merrick Pilling	6
pjp11	pjp11@uwindsor.ca	Barry Elliott	41
shah13i	shah13i@uwindsor.ca	Jay Shah	2
aburgess	aburgess@uwindsor.ca	Amanda Burgess	6
knigh11i	knigh11i@uwindsor.ca	Tiana Knight	16
zamtul	zamtul@uwindsor.ca	Zareen Amtul	25
criley	criley@uwindsor.ca	Christine Riley	16
lamr64	lamr64@uwindsor.ca	Laurie Renaud	21
gorey	gorey@uwindsor.ca	Kevin Gorey	31
cynmac	cynmac@uwindsor.ca	Cyndra Mac Dowall	42
ward4	ward4@uwindsor.ca	Andrew Ward	39
mcmurphy	mcmurphy@uwindsor.ca	Suzanne McMurphy	19
gclayton	gclayton@uwindsor.ca	Graham Clayton	30
franks	franks@uwindsor.ca	Frank Simpson	20
paesanom	paesanom@uwindsor.ca	Mikayla Paesano	40
kasprow	kasprow@uwindsor.ca	Mike Kasprowicz	16
sohailb	sohailb@uwindsor.ca	Bilal Sohail	12
maroca	maroca@uwindsor.ca	Marcela Aroca	16
froes112	froes112@uwindsor.ca	Skyla Froese	24
lzb	lzb@uwindsor.ca	Lorenzo Buj	14
pardeepj	pardeepj@uwindsor.ca	Pardeep Jasra	20
gsalvato	gsalvato@uwindsor.ca	Giuliana Salvato	14
apl	apl@uwindsor.ca	Antonio Pascual-Leone	23
guo31	guo31@uwindsor.ca	Haojun Guo	41
deng11w	deng11w@uwindsor.ca	Yuhan Deng	41
alfakih	alfakih@uwindsor.ca	Abdo Alfakih	26
jfreer	jfreer@uwindsor.ca	John Freer	41
swharton	swharton@uwindsor.ca	Sara Wharton	16
imran	imran@uwindsor.ca	Imran Ahmad	12
dragana	dragana@uwindsor.ca	Dragana Martinovic	41
sabgak	sabgak@uwindsor.ca	Kristie Sabga	23
zhiguohu	zhiguohu@uwindsor.ca	Zhiguo Hu	26
mcedwards	mcedwards@uwindsor.ca	Mary Edwards	41
rsanjuan	rsanjuan@uwindsor.ca	Ronan San Juan	25
zjpasek	zjpasek@uwindsor.ca	Zbigniew Pasek	2
smith1ab	smith1ab@uwindsor.ca	Dylan Smith	2
nunesj	nunesj@uwindsor.ca	Joe Nunes	26
hinchi	hinchi@uwindsor.ca	Isabelle Hinch	33
glazure	glazure@uwindsor.ca	Guy Lazure	51
joloo	joloo@uwindsor.ca	James Oloo	41
markotic	markotic@uwindsor.ca	Nicole Markotic	24
jwaldron	jwaldron@uwindsor.ca	Janice Waldron	42
ademers	ademers@uwindsor.ca	Annette Demers	15
rehse	rehse@uwindsor.ca	Steven Rehse	28
liu94	liu94@uwindsor.ca	Cady Liu	12
ydaniel	ydaniel@uwindsor.ca	Yvette Daniel	41
wood1x	wood1x@uwindsor.ca	Cayla Wood	8
hlynka	hlynka@uwindsor.ca	Myron Hlynka	26
macarth7	macarth7@uwindsor.ca	Michelle Macarthur	5
hongweix	hongweix@uwindsor.ca	Hongwei Xu	40
bmcla	bmcla@uwindsor.ca	Brenda Mclaughlin	39
colosima	colosima@uwindsor.ca	Alicia Colosimo	31
lallin	lallin@uwindsor.ca	Leslie Allin	24
mcgowanc	mcgowanc@uwindsor.ca	Cheri McGowan	8
abreu	abreu@uwindsor.ca	Priscila Abreu	2
ladewitt	ladewitt@uwindsor.ca	Lorna de Witt	39
bcowan1	bcowan1@uwindsor.ca	Belle Cowan	40
ndrew	ndrew@uwindsor.ca	Nancy Drew	41
rbiss	rbiss@uwindsor.ca	Renee Biss	23
hirschk	hirschk@uwindsor.ca	Katie Hirsch	9
joesisco	joesisco@uwindsor.ca	Joe Sisco	41
torinus	torinus@uwindsor.ca	Sigi Torinus	42
dvanrijt	dvanrijt@uwindsor.ca	David Van Rijt	40
jsmit	jsmit@uwindsor.ca	Julie Smit	33
abaird	abaird@uwindsor.ca	Anne Baird	23
rmenna	rmenna@uwindsor.ca	Rosanne Menna	23
hecnar	hecnar@uwindsor.ca	Victoria Hecnar	24
sevans	sevans@uwindsor.ca	Shelley Evans	39
greenham	greenham@uwindsor.ca	Craig Greenham	9
ecruz	ecruz@uwindsor.ca	Edward Cruz	39
saval115	saval115@uwindsor.ca	Ravi Savaliya	2
olabelle	olabelle@uwindsor.ca	Onawa Labelle	23
spender	spender@uwindsor.ca	Stephen Pender	24
gfeldman	gfeldman@uwindsor.ca	Greg Feldman	27
nayak7	nayak7@uwindsor.ca	Anirudhkumar Nayak	2
hassan1g	hassan1g@uwindsor.ca	Mirza Ali Hassan	30
basok	basok@uwindsor.ca	Tanya Basok	27
kbabb	kbabb@uwindsor.ca	Kim Babb	23
kromero	kromero@uwindsor.ca	Kristoffer Romero	23
wacheskd	wacheskd@uwindsor.ca	Devin Wacheski	2
krisloug	krisloug@uwindsor.ca	Krista Loughead	9
cmfebria	cmfebria@uwindsor.ca	Catherine Febria	33
priscila	priscila@uwindsor.ca	Priscila Correa	41
plam	plam@uwindsor.ca	Phebe Lam	5
vjleung	vjleung@uwindsor.ca	Vicki Jay Leung	15
angusyao	angusyao@uwindsor.ca	Angus Yao	40
bazc	bazc@uwindsor.ca	Cayla Baz	27
creader	creader@uwindsor.ca	Carol Reader	2
chwasty	chwasty@uwindsor.ca	Nicole Chwastyk	31
lpaquett	lpaquett@uwindsor.ca	Leanne Paquette	39
hsweet73	hsweet73@uwindsor.ca	Heather Sweet	39
cheran	cheran@uwindsor.ca	Cheran Rudhramoorthy	27
rpdatta	rpdatta@uwindsor.ca	Ronjon Paul Datta	27
aclarke	aclarke@uwindsor.ca	Andrea Clarke	22
cortj	cortj@uwindsor.ca	Joel Cort	9
lehal11	lehal11@uwindsor.ca	Amanpreet Lehal	27
etanlaka	etanlaka@uwindsor.ca	Eric Tanlaka	39
goddard1	goddard1@uwindsor.ca	Taylor Goddard	7
eraheem	eraheem@uwindsor.ca	Esam Abdel-Raheem	3
dcavallo	dcavallo@uwindsor.ca	Dora Cavallo-Medved	11
heardcat	heardcat@uwindsor.ca	Catherine Heard	42
vabboud	vabboud@uwindsor.ca	Victoria Abboud	43
wmiller7	wmiller7@uwindsor.ca	Wayne Ambrose-Miller	31
ldean	ldean@uwindsor.ca	Lloyd Dean	16
delaneye	delaneye@uwindsor.ca	Elysse Delaney	5
schramek	schramek@uwindsor.ca	Kristin Schramer	23
cunial	cunial@uwindsor.ca	Luca Cunial	42
tetzlafa	tetzlafa@uwindsor.ca	Amanda Tetzlaff	8
dong11q	dong11q@uwindsor.ca	Lily Dong	40
jcheval	jcheval@uwindsor.ca	James Chevalier	41
mbou	mbou@uwindsor.ca	Jean-Guy Mboudjeke	14
meloch1n	meloch1n@uwindsor.ca	Alexandra Meloche	42
jrenaud	jrenaud@uwindsor.ca	Jessica Renaud	16
parasra	parasra@uwindsor.ca	Kathyani Parasram	33
ismailf	ismailf@uwindsor.ca	Mohammed Ismail	2
mabida	mabida@uwindsor.ca	Abida Mansoora	26
dilling	dilling@uwindsor.ca	Hayden Dilling	52
ginamp	ginamp@uwindsor.ca	Gina Pittman	39
kbrisebo	kbrisebo@uwindsor.ca	Kimberly Brisebois	31
arezoo	arezoo@uwindsor.ca	Arezoo Emadi	3
awright	awright@uwindsor.ca	Alan Wright	41
haridos	haridos@uwindsor.ca	Ramkumar Haridoss	3
Alan.Wright	Alan.Wright@uwindsor.ca	Alan Wright	41
luiso	luiso@uwindsor.ca	Adrian Luiso	25
Gina.Pittman	Gina.Pittman@uwindsor.ca	Gina Pittman	39
Cyndra.MacDowall	Cyndra.MacDowall@uwindsor.ca	Cyndra Mac Dowall	42
Kalyani.Selvarajah	Kalyani.Selvarajah@uwindsor.ca	Kalyani Selvarajah	12
atoronyi	atoronyi@uwindsor.ca	Anita Toronyi	41
rangan	rangan@uwindsor.ca	Chitra Rangan	28
yshhsy	yshhsy@uwindsor.ca	Sung Hyun Yun	31
kissoon	kissoon@uwindsor.ca	Tamal Kissoon	7
lusu	lusu@uwindsor.ca	Louise Paquette	41
mohamm8a	mohamm8a@uwindsor.ca	Sameer Mohammed	2
jnoronha	Joanna.VNoronha@uwindsor.ca	Joanna V. Noronha	16
freerj	freerj@uwindsor.ca	John Freer	41
jhw	jhw@uwindsor.ca	Jim Wittebols	10
li195	li195@uwindsor.ca	Kevin Li	2
fu11w	fu11w@uwindsor.ca	Ning Fu	41
bbarrett	bbarrett@uwindsor.ca	Betty Barrett	6
abouhaiz	abouhaiz@uwindsor.ca	Zeina Abou Haidar	22
ssavoni	Stephanie.Savoni@uwindsor.ca	Stephanie Savoni	16
aneja	aneja@uwindsor.ca	Yash Aneja	40
abbyn	abbyn@uwindsor.ca	Abby Nakhaie	41
joshi97	joshi97@uwindsor.ca	Rudresh Joshi	2
abreuc	abreuc@uwindsor.ca	Cindy Abreu	16
bootaki	bootaki@uwindsor.ca	Behrang Bootaki	2
giduwah	Sandra.Muse@uwindsor.ca	Sandra Muse	24
vmabboud	vmabboud@uwindsor.ca	Victoria Abboud	43
parekh5	parekh5@uwindsor.ca	Radhika Parekh	3
mirandan	mirandan@uwindsor.ca	Nyah Miranda	13
witalecd	witalecd@uwindsor.ca	Dawid Witalec	27
jbrennan	J.Brennan@uwindsor.ca	John Brennan	16
gordo11l	gordo11l@uwindsor.ca	Susan Lindsay	7
kulatun	kulatun@uwindsor.ca	Piumi Kulatunga	25
hkrohn	hkrohn@uwindsor.ca	Heather Krohn	39
gesmyth	Gemma.Smyth@uwindsor.ca	Gemma Smyth	16
branana	branana@uwindsor.ca	Anne-Elise Branan	24
guetter	guetter@uwindsor.ca	David Guetter	22
tinap	tinap@uwindsor.ca	Tina Pugliese	5
makwana5	makwana5@uwindsor.ca	Jay Makwana	2
hamiltou	hamiltou@uwindsor.ca	Umber Hamilton	31
izyjonah	Mbodja.Mougoue@uwindsor.ca	Mbodja Mougoue	32
mdrover	Marcus.Drover@uwindsor.ca	Marcus Drover	25
duquette	duquette@uwindsor.ca	Adriana Duquette	9
chammat	chammat@uwindsor.ca	Amira Chammat	8
shaikh51	shaikh51@uwindsor.ca	Muhammad Mubashir Shaikh	2
pereir21	pereir21@uwindsor.ca	Jennifer Pereira	13
driedges	driedges@uwindsor.ca	Shae Driedger	39
-	-	Christine	54
tsefton	tsefton@uwindsor.ca	Terry Sefton	41
admenard	Dana.Menard@uwindsor.ca	Dana Menard	23
terriml	Terri.Lawrence@uwindsor.ca	Terri Lawrence	11
jjackson	jjackson@uwindsor.ca	Jill Singleton-Jackson	7
lacey17	Lacey.Rivest@uwindsor.ca	Lacey Rivest	39
daramold	daramold@uwindsor.ca	Divine Daramola	31
solomo6	solomo6@uwindsor.ca	Bethel Solomon	41
josephu	josephu@uwindsor.ca	Urvashi Joseph	31
macki11h	macki11h@uwindsor.ca	Maggie Mackinnon	23
coheni	coheni@uwindsor.ca	Ira Cohen	55
james1k	james1k@uwindsor.ca	Hollie James	23
chittlel	chittlel@uwindsor.ca	Laura Chittle	8
jkichler	Jessica.Kichler@uwindsor.ca	Jessica Kichler	23
gallh	gallh@uwindsor.ca	Tylene Gall	2
gupta03	gupta03@uwindsor.ca	Anoop Gupta	41
gagno11d	gagno11d@uwindsor.ca	Matt Gagnon	14
rsinha	rsinha@uwindsor.ca	Rajeeva Sinha	40
lchittle	Laura.Chittle@uwindsor.ca	Laura Chittle	44
jvoronka	Jijian.Voronka@uwindsor.ca	Jijian Voronka	31
doski	doski@uwindsor.ca	Joanne Doski	23
kuttner	kuttner@uwindsor.ca	Thomas Kuttner	16
jsoutter	jsoutter@uwindsor.ca	Jennifer Soutter	45
penny112	penny112@uwindsor.ca	Shana Penny	23
gagnemcleanstefani	gagnemcleanstefani@uwindsor.ca	Kirsten Stefanik	16
cpchandr	cpchandr@uwindsor.ca	Charu Chandrasekera	13
ericmc	Eric.Mcfarlane@uwindsor.ca	Eric Mcfarlane	44
lsalfi	Lisa.Salfi@uwindsor.ca	Lisa Salfi	4
kalsiv	kalsiv@uwindsor.ca	Virender Singh Kalsi	2
kristies	Kristie.Sabga@uwindsor.ca	Kristie Sabga	16
parryb	parryb@uwindsor.ca	Brittany Parry	31
serra2	serra2@uwindsor.ca	Soula Tester Serra	32
redkoa	redkoa@uwindsor.ca	Aleksandra Redko	23
madi1	madi1@uwindsor.ca	Aya Madi	40
wu1ad	wu1ad@uwindsor.ca	Hanyu Wu	25
vanderch	Christine.Vanderkooy@uwindsor.ca	Christine Vanderkooy	41
paquet9	paquet9@uwindsor.ca	Leanne Paquette	39
kumar94	kumar94@uwindsor.ca	Adithya Kumar	40
panchal4	panchal4@uwindsor.ca	Anmol Panchal	3
ghasemil	ghasemil@uwindsor.ca	Laleh Ghasemi	1
barbaror	barbaror@uwindsor.ca	Raenah Barbarossa	33
hallyh	hallyh@uwindsor.ca	Heidi Hally	27
middlemc	middlemc@uwindsor.ca	Christina Middlemore	24
maharjar	maharjar@uwindsor.ca	Riva Maharjan	40
sosanya	sosanya@uwindsor.ca	Bukky Sosanya	2
amukama	amukama@uwindsor.ca	Elvis Amukamara	2
mayheada	mayheada@uwindsor.ca	Alex Mayhead	40
woodruff	woodruff@uwindsor.ca	Sarah Woodruff Atkinson	9
taher4	taher4@uwindsor.ca	Muna Taher	8
weir31	weir31@uwindsor.ca	Stephen Weir	43
pearsale	pearsale@uwindsor.ca	Elizabeth Pearsall	41
teftk	teftk@uwindsor.ca	Kate Teft	32
kustraed	kustraed@uwindsor.ca	Erika Kustra	23
sparlin2	sparlin2@uwindsor.ca	Sheri Sparling	32
milasinm	milasinm@uwindsor.ca	Mark Milasincic	32
khooy	khooy@uwindsor.ca	Yishin Khoo	41
palermod	palermod@uwindsor.ca	Daniela Palermo	32
edwardo	edwardo@uwindsor.ca	Ciara Edwards	31
kzupan1	kzupan1@uwindsor.ca	Krista Zupan	41
asishm	asishm@uwindsor.ca	Asish Mukhopadhyay	12
mkmorand	mkmorand@uwindsor.ca	Mary Kay Morand	31
donohuem	Mary.Donohue@uwindsor.ca	Mary Donohue	5
selvare	selvare@uwindsor.ca	Esaignani Selvarajah	40
riddellk	riddellk@uwindsor.ca	Katryna Riddell	32
jacob61	jacob61@uwindsor.ca	Asha Jacob	3
singh1gx	singh1gx@uwindsor.ca	Harbir Singh	12
singh1wd	singh1wd@uwindsor.ca	Baljeet Singh	2
mullane	mullane@uwindsor.ca	Shalen Mullane	40
frankli2	frankli2@uwindsor.ca	Norah Hart	25
kouvalip	kouvalip@uwindsor.ca	Nathan Kouvalis	42
sarke1a	sarke1a@uwindsor.ca	Animesh Sarker	26
bnaderi	bnaderi@uwindsor.ca	Bahman Naderi	2
raufh	raufh@uwindsor.ca	Halat Rauf	3
quennevl	quennevl@uwindsor.ca	Luca Quenneville	1
barileg	barileg@uwindsor.ca	Giulia Barile	8
sandeep1	sandeep1@uwindsor.ca	Sandeep Bhattacharya	2
aiafrate	Anthony.Iafrate@uwindsor.ca	Anthony Iafrate	27
sibaei	sibaei@uwindsor.ca	Zeina Sibaei	2
rkosciuw	Reinold.Kosciuw@uwindsor.ca	Reinold Kosciuw	32
abazari	abazari@uwindsor.ca	Negar Abazari	2
jhart	J.Hart@uwindsor.ca	Janet Hart	20
akhoury	akhoury@uwindsor.ca	Antoine Khoury	14
wtcaloha	Walter.Cassidy@uwindsor.ca	Walter Cassidy	41
jiang32	jiang32@uwindsor.ca	Jay Jiang	23
gbarile	Giulia.Barile@uwindsor.ca	Giulia Barile	56
gagnon91	gagnon91@uwindsor.ca	John Gagnon	32
singh8v	singh8v@uwindsor.ca	Abhay Raj Singh	12
salehi11	salehi11@uwindsor.ca	Melody Salehi	33
lporiet	L.Oriet@uwindsor.ca	Leo Oriet	2
tgrondin	Tom.Grondin@uwindsor.ca	Tom Grondin	26
marsh132	Darlene.Marshall@uwindsor.ca	Darlene Marshall	41
farias11	farias11@uwindsor.ca	Alyssa Farias	13
kfisher	Katharine.Fisher@uwindsor.ca	Katharine Fisher	16
jburke	jburke@uwindsor.ca	Judi Burke	16
johnston	johnston@uwindsor.ca	Mark Albert Johnston	24
heathv	heathv@uwindsor.ca	Victoria Smit Heath	33
elyons	elyons@uwindsor.ca	Erica Lyons	16
salamehm	salamehm@uwindsor.ca	Muna Salameh	39
pandher3	pandher3@uwindsor.ca	Noor Pandher	39
cstan	Clementa.Stan@uwindsor.ca	Clementa Stan	40
xjchen	xjchen@uwindsor.ca	Jessica Chen	12
chittibd	chittibd@uwindsor.ca	Devika Chittibomma	25
smjp	smjp@uwindsor.ca	Sudhir Paul	26
sjasra	sjasra@uwindsor.ca	Shashi Jasra	11
mhassan	mhassan@uwindsor.ca	Mohammad Hassanzadeh	3
ramesh71	ramesh71@uwindsor.ca	Ardra Ramesh	1
mgervais	mgervais@uwindsor.ca	Marty Gervais	24
man21	man21@uwindsor.ca	Skylar Mann	24
ilaahlwt	Ila.Ahlawat@uwindsor.ca	Ila Ahlawat	24
mcguir21	mcguir21@uwindsor.ca	Denise Mcguire	32
cweisen	cweisen@uwindsor.ca	Christine Weisener	12
swan10	swan10@uwindsor.ca	Georgia Swan	16
tongom	tongom@uwindsor.ca	Megan Tongo	39
gswan	Georgia.Swan@uwindsor.ca	Georgia Swan	16
kengle	kengle@uwindsor.ca	Karen Engle	42
bhull119	bhull119@uwindsor.ca	Ravneek Bhullar	12
jtome	jtome@uwindsor.ca	John Tome	41
cvanner	Catherine.Vanner@uwindsor.ca	Catherine Vanner	41
moodey	moodey@uwindsor.ca	Joshua Moodey	40
lachanc2	lachanc2@uwindsor.ca	Tyler Lachance	33
rgras	rgras@uwindsor.ca	Robin Gras	12
ggeorge	ggeorge@uwindsor.ca	Glynis George	27
rezar	rezar@uwindsor.ca	Rawnak Reza	25
ckwantes	Catherine.Kwantes@uwindsor.ca	Catherine Kwantes	23
amore	amore@uwindsor.ca	Roy Amore	10
cboucher	Chantal.Boucher@uwindsor.ca	Chantal Boucher	23
djohnst	djohnst@uwindsor.ca	Dave Johnston	57
bryants	bryants@uwindsor.ca	Susan Bryant	43
holbrook	holbrook@uwindsor.ca	Susan Holbrook	24
vanner	vanner@uwindsor.ca	Nancy Vanner	40
samieif	samieif@uwindsor.ca	Sepideh Samieifar	41
provostl	provostl@uwindsor.ca	Lucas Provost	27
kojokb	kojokb@uwindsor.ca	Bayan Kojok	43
shaikh33	shaikh33@uwindsor.ca	Azharuddin Rafiyuddin Shaikh	2
nasir11d	nasir11d@uwindsor.ca	Mahreen Nasir Butt	12
calandrj	calandrj@uwindsor.ca	Jill Calandra	33
lucier1h	lucier1h@uwindsor.ca	Krista Lucier	23
motzkus	motzkus@uwindsor.ca	Conner Motzkus	23
barretti	Isabelle.Barrette-Ng@uwindsor.ca	Isabelle Barrette-Ng	33
jcohen	jcohen@uwindsor.ca	Jerome Cohen	23
kachhadk	kachhadk@uwindsor.ca	Kartik Kachhadiya	40
tpalmer	tpalmer@uwindsor.ca	Tina Palmer	12
geoffcal	Geoffrey.Callaghan@uwindsor.ca	Geoffrey Callaghan	10
hazims	hazims@uwindsor.ca	Sarah Hazim	31
butt11d	butt11d@uwindsor.ca	Mahreen Nasir Butt	12
jalali3	jalali3@uwindsor.ca	Mahsa Jalali	3
elyfrank	Frank.Ely@uwindsor.ca	Frank Ely	9
faragr	faragr@uwindsor.ca	Rami Farag	10
wem	wem@uwindsor.ca	Waguih ElMaraghy	2
li11117x	li11117x@uwindsor.ca	Na Li	39
wright24	wright24@uwindsor.ca	Shelby Wright	33
elsayed2	Hanan.El-Sayed@uwindsor.ca	Hanan El-Sayed	1
borto111	borto111@uwindsor.ca	Prairie Bortolin	40
latvenas	latvenas@uwindsor.ca	Jurate Latvenas	30
mohamudm	mohamudm@uwindsor.ca	Mahad Mohamud	31
afulike	afulike@uwindsor.ca	Chinyere Afulike	33
aswan	aswan@uwindsor.ca	Andrew Swan	11
kdalbell	kdalbell@uwindsor.ca	Kathy Dal Bello	32
johns15f	johns15f@uwindsor.ca	Hunter Johnson	23
iabdool	Imran.Abdool@uwindsor.ca	Imran Abdool	40
azi	Azadeh.Babaghaderi@uwindsor.ca	Azadeh Babaghaderi	40
jmohanty	Jayashree.Mohanty@uwindsor.ca	Jayashree Mohanty	31
gfrench4	Gregg.French@uwindsor.ca	Gregg French	51
edwintam	edwintam@uwindsor.ca	Edwin Tam	1
lee83	lee83@uwindsor.ca	James Lee	10
mcken11d	mcken11d@uwindsor.ca	Samantha Mckenzie	12
gakpey	gakpey@uwindsor.ca	Eleanor Gakpey	10
mkoopman	Mary.ElliottKoopman@uwindsor.ca	Mary Elliott Koopman	41
clarksog	clarksog@uwindsor.ca	Grace Clarkson	23
greige	greige@uwindsor.ca	Emma Greig	31
doddan	doddan@uwindsor.ca	Naga Jyothirmayee Dodda	12
amarchi	Ashley.Marchini@uwindsor.ca	Ashley Marchini	39
guptaq	guptaq@uwindsor.ca	Anoop Gupta	41
chind	Candace.Hind@uwindsor.ca	Candace Hind	31
shah6s	shah6s@uwindsor.ca	Mehdi Shah	2
jacob11h	jacob11h@uwindsor.ca	Alisha Jacobs	22
jumalem	jumalem@uwindsor.ca	Mohamed Jumale	12
cmumme	cmumme@uwindsor.ca	Claire Mumme	16
shah4u	shah4u@uwindsor.ca	Meha Dharmesh Shah	1
rahmanis	rahmanis@uwindsor.ca	Sahar Rahmani Moshaei	3
nassaba	nassaba@uwindsor.ca	Mohamad Nassabain	33
erens	erens@uwindsor.ca	Suzie Eren	33
jatkins	jatkins@uwindsor.ca	Jennie Atkins	32
mcint119	mcint119@uwindsor.ca	Jazzlyn Mcintyre	39
lartec	lartec@uwindsor.ca	Imee Rose Lartec	39
jdixon	jdixon@uwindsor.ca	Jess Dixon	9
almans	almans@uwindsor.ca	Salsabel Almanssori	41
souliers	souliers@uwindsor.ca	Stephanie Souliere	23
oliveri4	oliveri4@uwindsor.ca	Amelia Oliverio	39
spada115	spada115@uwindsor.ca	Alessandra Spadafora	39
cullend	cullend@uwindsor.ca	Declan Cullen	8
bolandi	bolandi@uwindsor.ca	Behzad Bolandi	25
nazemih	nazemih@uwindsor.ca	Haleh Nazemi	3
karcha	karcha@uwindsor.ca	Anna Karch	24
teskeyj	teskeyj@uwindsor.ca	Jillian Teskey	40
johal5	johal5@uwindsor.ca	Robin Johal	31
ntanga	ntanga@uwindsor.ca	Astride Mulumba Ntanga	14
lisaf	Lisa.Friesen@uwindsor.ca	Lisa Friesen	3
carmich3	carmich3@uwindsor.ca	Kris Carmichael	39
han108	Terry.Hancock@uwindsor.ca	Terry Hancock	16
tiffanyb	tiffanyb@uwindsor.ca	Tiffany Brown	16
savoni8	savoni8@uwindsor.ca	Charlotte Savoni	40
cmacdonn	Cathi.Macdonnell@uwindsor.ca	Cathi Macdonnell	42
soorr	soorr@uwindsor.ca	Randeep Soor	2
wassm	wassm@uwindsor.ca	Merry Wass	27
drmerie	Ahmed.Merie@uwindsor.ca	Ahmed Merie	26
salsabel	Salsabel.Almanssori@uwindsor.ca	Salsabel Almanssori	31
rdunn	Rachel.Allchurch@uwindsor.ca	Rachel Dunn	39
mahatab	mahatab@uwindsor.ca	F M Tanveer Mahatab	40
rmoon	rmoon@uwindsor.ca	Richard Moon	16
botrosj	botrosj@uwindsor.ca	Jessica Botros	24
ram846	Rebecca.Major@uwindsor.ca	Rebecca Major	10
nvail71	Nancy.Vaillancourt@uwindsor.ca	Nancy Vaillancourt	41
mlaurier	Meagan.Laurier@uwindsor.ca	Meagan Laurier	39
kadu	kadu@uwindsor.ca	Krupal Kadu	2
boucherc	boucherc@uwindsor.ca	Chantal Boucher	23
yskhoo	yskhoo@uwindsor.ca	Yishin Khoo	41
nmirza	Noeman.Mirza@uwindsor.ca	Noeman Mirza	39
sracicot	sracicot@uwindsor.ca	Sharon Racicot	31
desai2c	desai2c@uwindsor.ca	Devang Dushyant Desai	2
makvana	makvana@uwindsor.ca	Ajaykumar Chaturbhai Makvana	2
sokhis	sokhis@uwindsor.ca	Sukhvinder Singh Sokhi	2
shafaqk	Shafaq.Khan@uwindsor.ca	Shafaq Khan	12
chamasa	chamasa@uwindsor.ca	Ali Chamas	12
richterl	richterl@uwindsor.ca	Liam Richter Gorey	12
bortolig	bortolig@uwindsor.ca	Jack Bortolin	42
trepani4	trepani4@uwindsor.ca	Mike Trepanier	13
raveend3	raveend3@uwindsor.ca	Remya Raveendran	3
muisej	muisej@uwindsor.ca	Janessa Muise	8
pescaras	pescaras@uwindsor.ca	Selina Pescara	40
sears7	sears7@uwindsor.ca	Jen Sears	2
foley21	Drew.Foley@uwindsor.ca	Drew Foley	60
stevehub	Steve.Hubley@uwindsor.ca	Steve Hubley	13
laurendm	laurendm@uwindsor.ca	Maddie Laurendeau	10
hancero	hancero@uwindsor.ca	Lerna Hanceroglu	23
mahzoon	mahzoon@uwindsor.ca	Kevin Mahzoon	33
hassa12t	hassa12t@uwindsor.ca	Hossein Hassani	3
suresh91	suresh91@uwindsor.ca	Anupama Suresh	2
sjohn	Shelley-Ann.John@uwindsor.ca	Shelley-Ann John	32
bfernand	Brian.Fernandes@uwindsor.ca	Brian Fernandes	32
morneau6	morneau6@uwindsor.ca	Abbey Morneau	4
dipalmad	dipalmad@uwindsor.ca	Daniel Di Palma	23
glotfi	Ghazal.Lotfi@uwindsor.ca	Ghazal Lotfi	17
grayl	grayl@uwindsor.ca	Allison Gray	27
scolnic	scolnic@uwindsor.ca	Galina Scolnic	27
ali16f	ali16f@uwindsor.ca	Sanober Ali	40
hossei91	hossei91@uwindsor.ca	Mehrsa Hosseini	1
patherj	patherj@uwindsor.ca	Jadyn Pather	31
vakharwp	vakharwp@uwindsor.ca	Parantap Hemendrabhai Vakharwala	3
jsylvest	jsylvest@uwindsor.ca	Jane Sylvester	61
macdo12d	macdo12d@uwindsor.ca	Kara Macdonald Graham	31
sok	sok@uwindsor.ca	Chanthorn Sok	39
eskandeg	eskandeg@uwindsor.ca	George Eskander	16
dcruzr	dcruzr@uwindsor.ca	Relina D'cruz	16
waez	waez@uwindsor.ca	Jumana Waez	8
ckvarfo	ckvarfo@uwindsor.ca	Connie Kvarfordt	31
pawlukg	pawlukg@uwindsor.ca	Gavin Pawluk	2
ejw	Elizabeth.Wilson@uwindsor.ca	Elizabeth Julien-Wilson	16
faraci11	faraci11@uwindsor.ca	Jason Faraci	33
sahni6	sahni6@uwindsor.ca	Shefali Sahni	10
kaitlinr	Kaitlin.Roberts@uwindsor.ca	Kaitlin Roberts	31
oldershm	oldershm@uwindsor.ca	Marni Oldershaw	23
amoorad	Ani.Mooradian@uwindsor.ca	Ani Mooradian	41
jsears	Jen.Sears@uwindsor.ca	Jen Sears	2
amcewen	amcewen@uwindsor.ca	Amanda Mcewen	39
gscolnic	Galina.Scolnic@uwindsor.ca	Galina Scolnic	27
fowler71	fowler71@uwindsor.ca	Catherine Fowler	32
amal	amal@uwindsor.ca	Amal Jammali	62
aandersn	Andrea.Anderson@uwindsor.ca	Andrea Anderson	27
rdc	rdc@uwindsor.ca	Richard Douglass-Chin	24
andersoa	andersoa@uwindsor.ca	Andrea Anderson	16
chakrab7	chakrab7@uwindsor.ca	Ray Chakraborty	3
phanq	phanq@uwindsor.ca	Quoc An Phan	1
whodgins	William.Hodgins@uwindsor.ca	Wil Hodgins	38
khan3r	khan3r@uwindsor.ca	Wajih Khan	40
scoyne	Gary.Scoyne@uwindsor.ca	Gary Scoyne	13
sajak	sajak@uwindsor.ca	Saja Al Mamoori	12
sydneym	Sydney.Murray@uwindsor.ca	Sydney Murray	18
kobti	kobti@uwindsor.ca	Ziad Kobti	12
jlinton	James.Linton@uwindsor.ca	James Linton	1
alhadidi	Dima.Alhadidi@uwindsor.ca	Dima Alhadidi	12
akpunon	akpunon@uwindsor.ca	Chinenye Precious Akpunonu	40
rathaur	rathaur@uwindsor.ca	Abhay Singh Rathaur	2
cobbcam	cobbcam@uwindsor.ca	Cam Cobb	41
dwiley	Dana.Wiley@uwindsor.ca	Dana Datta	41
vsevilla	vsevilla@uwindsor.ca	Victor Sevillano Canicio	14
marzia	marzia@uwindsor.ca	Syeda Marzia	2
mcmanus4	mcmanus4@uwindsor.ca	Rory Mcmanus	8
hanna112	hanna112@uwindsor.ca	Boules Hanna	40
heathls	Victoria.Heath@uwindsor.ca	Victoria Heath	33
ranjit	ranjit@uwindsor.ca	Jennifer Ranjit	23
nmasri	nmasri@uwindsor.ca	Nadia Masri	17
adams1u	adams1u@uwindsor.ca	Taylor Adams	41
karent	Karen.Tompkins@uwindsor.ca	Karen Tompkins	41
mhmul	mhmul@uwindsor.ca	Maureen Muldoon	7
miov	miov@uwindsor.ca	Vanessa Mio	41
ssingh	ssingh@uwindsor.ca	Suneeta Singh	39
cisilinj	cisilinj@uwindsor.ca	Joel Cisilino	31
rreaume	Rebecca.Reaume@uwindsor.ca	Rebecca Reaume	41
lrodney	lrodney@uwindsor.ca	Lee Rodney	42
owend	owend@uwindsor.ca	David M. Owen	17
hamodat	hamodat@uwindsor.ca	Teba Hamodat	23
\.


--
-- Data for Name: Link; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Link" (id, link, description, "topicId") FROM stdin;
\.


--
-- Data for Name: ParentTopic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ParentTopic" (id, "createdAt", "updatedAt", topic) FROM stdin;
1	2022-10-29 15:24:21.907	2022-10-29 15:24:21.907	BlackBoard
2	2022-10-29 15:24:22.109	2022-10-29 15:24:22.109	BlackBoard Collaborate Ultra
4	2022-10-29 15:24:22.78	2022-10-29 15:24:22.78	Microsoft Stream
5	2022-10-29 15:24:22.813	2022-10-29 15:24:22.813	Microsoft Teams
6	2022-10-29 15:24:22.849	2022-10-29 15:24:22.849	IT help desk
7	2022-10-29 15:24:22.968	2022-10-29 15:24:22.968	IT Help Desk
\.


--
-- Data for Name: Tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Tag" (id, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Topic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Topic" (id, "createdAt", "updatedAt", topic, "parentTopicId") FROM stdin;
1	2022-10-29 15:24:21.907	2022-10-29 15:24:21.907	Adaptive Release	1
2	2022-10-29 15:24:21.991	2022-10-29 15:24:21.991	Announcement, Email, and Course Messages	1
3	2022-10-29 15:24:22.045	2022-10-29 15:24:22.045	Assignments (Incl. BB Annotate, Portfolios, Self, and Peer Assessments)	1
4	2022-10-29 15:24:22.109	2022-10-29 15:24:22.109	Feature Request (Tool Recommendations)	2
5	2022-10-29 15:24:22.153	2022-10-29 15:24:22.153	Copy/Import/Export Site Contents	1
6	2022-10-29 15:24:22.196	2022-10-29 15:24:22.196	Course Content, Menu, or Setting Issues	1
7	2022-10-29 15:24:22.233	2022-10-29 15:24:22.233	Course Reports, Performance Dashboard, and Retention Centre	1
8	2022-10-29 15:24:22.271	2022-10-29 15:24:22.271	Course Site Merge/Term Adjustment	1
9	2022-10-29 15:24:22.37	2022-10-29 15:24:22.37	Custom Site Request	1
10	2022-10-29 15:24:22.408	2022-10-29 15:24:22.408	Customize Course Properties	1
11	2022-10-29 15:24:22.454	2022-10-29 15:24:22.454	Discussion Forums	1
13	2022-10-29 15:24:22.556	2022-10-29 15:24:22.556	Grade Centre (incl. Delegated Grading)	1
14	2022-10-29 15:24:22.606	2022-10-29 15:24:22.606	Grade Centre (Transfering Final Grade; incl. Import, Export, Scantron)	1
15	2022-10-29 15:24:22.651	2022-10-29 15:24:22.651	Groups and Group Work	1
16	2022-10-29 15:24:22.699	2022-10-29 15:24:22.699	Interactive Tools (Blogs, Journals, Wiki, and External)	1
17	2022-10-29 15:24:22.742	2022-10-29 15:24:22.742	LTI Integration (iclicker, Mobius, Leganto, etc.)	1
18	2022-10-29 15:24:22.78	2022-10-29 15:24:22.78	Microsoft Stream	4
19	2022-10-29 15:24:22.813	2022-10-29 15:24:22.813	Microsoft Teams	5
20	2022-10-29 15:24:22.849	2022-10-29 15:24:22.849	Mobile and App Concerns	6
21	2022-10-29 15:24:22.968	2022-10-29 15:24:22.968	Reporting System Downtime	7
22	2022-10-29 15:24:23.027	2022-10-29 15:24:23.027	Rubrics	1
23	2022-10-29 15:24:23.07	2022-10-29 15:24:23.07	SafeAssign	1
24	2022-10-29 15:24:23.113	2022-10-29 15:24:23.113	Site Availability (Student)	1
25	2022-10-29 15:24:23.157	2022-10-29 15:24:23.157	Statistics (Custom requests)	1
26	2022-10-29 15:24:23.203	2022-10-29 15:24:23.203	Test Generator/BetterExaminations	1
27	2022-10-29 15:24:23.273	2022-10-29 15:24:23.273	Test, Surveys, and Pools	1
28	2022-10-29 15:24:23.478	2022-10-29 15:24:23.478	User Interface	1
29	2022-10-29 15:24:23.607	2022-10-29 15:24:23.607	Users, Roles, and Roster (Manual Adjustments)	1
30	2022-10-29 15:24:23.713	2022-10-29 15:24:23.713	UWin Account Issues / No UWin Account	1
31	2022-10-29 15:24:23.819	2022-10-29 15:24:23.819	Video/File Sharing and Collaboration	1
\.


--
-- Data for Name: _FlowToTag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_FlowToTag" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _FlowToTopic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_FlowToTopic" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _FormSectionToTopic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_FormSectionToTopic" ("A", "B") FROM stdin;
\.


--
-- Name: Department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Department_id_seq"', 64, true);


--
-- Name: Faculty_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Faculty_id_seq"', 67, true);


--
-- Name: Flow_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Flow_id_seq"', 1, false);


--
-- Name: FormSection_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."FormSection_id_seq"', 1, false);


--
-- Name: Form_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Form_id_seq"', 1, false);


--
-- Name: Link_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Link_id_seq"', 1, false);


--
-- Name: ParentTopic_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ParentTopic_id_seq"', 7, true);


--
-- Name: Tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Tag_id_seq"', 1, false);


--
-- Name: Topic_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Topic_id_seq"', 31, true);


--
-- Name: Department Department_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Department"
    ADD CONSTRAINT "Department_pkey" PRIMARY KEY (id);


--
-- Name: Faculty Faculty_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Faculty"
    ADD CONSTRAINT "Faculty_pkey" PRIMARY KEY (id);


--
-- Name: Flow Flow_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Flow"
    ADD CONSTRAINT "Flow_pkey" PRIMARY KEY (id);


--
-- Name: FormSection FormSection_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FormSection"
    ADD CONSTRAINT "FormSection_pkey" PRIMARY KEY (id);


--
-- Name: Form Form_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Form"
    ADD CONSTRAINT "Form_pkey" PRIMARY KEY (id);


--
-- Name: Instructor Instructor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Instructor"
    ADD CONSTRAINT "Instructor_pkey" PRIMARY KEY (id);


--
-- Name: Link Link_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Link"
    ADD CONSTRAINT "Link_pkey" PRIMARY KEY (id);


--
-- Name: ParentTopic ParentTopic_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ParentTopic"
    ADD CONSTRAINT "ParentTopic_pkey" PRIMARY KEY (id);


--
-- Name: Tag Tag_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tag"
    ADD CONSTRAINT "Tag_pkey" PRIMARY KEY (id);


--
-- Name: Topic Topic_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Topic"
    ADD CONSTRAINT "Topic_pkey" PRIMARY KEY (id);


--
-- Name: Department_department_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Department_department_key" ON public."Department" USING btree (department);


--
-- Name: Faculty_faculty_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Faculty_faculty_key" ON public."Faculty" USING btree (faculty);


--
-- Name: Instructor_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Instructor_email_key" ON public."Instructor" USING btree (email);


--
-- Name: Instructor_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Instructor_id_key" ON public."Instructor" USING btree (id);


--
-- Name: ParentTopic_topic_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ParentTopic_topic_key" ON public."ParentTopic" USING btree (topic);


--
-- Name: Topic_topic_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Topic_topic_key" ON public."Topic" USING btree (topic);


--
-- Name: _FlowToTag_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_FlowToTag_AB_unique" ON public."_FlowToTag" USING btree ("A", "B");


--
-- Name: _FlowToTag_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_FlowToTag_B_index" ON public."_FlowToTag" USING btree ("B");


--
-- Name: _FlowToTopic_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_FlowToTopic_AB_unique" ON public."_FlowToTopic" USING btree ("A", "B");


--
-- Name: _FlowToTopic_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_FlowToTopic_B_index" ON public."_FlowToTopic" USING btree ("B");


--
-- Name: _FormSectionToTopic_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_FormSectionToTopic_AB_unique" ON public."_FormSectionToTopic" USING btree ("A", "B");


--
-- Name: _FormSectionToTopic_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_FormSectionToTopic_B_index" ON public."_FormSectionToTopic" USING btree ("B");


--
-- Name: Department Department_facultyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Department"
    ADD CONSTRAINT "Department_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES public."Faculty"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Flow Flow_uwinId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Flow"
    ADD CONSTRAINT "Flow_uwinId_fkey" FOREIGN KEY ("uwinId") REFERENCES public."Instructor"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: FormSection FormSection_formId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FormSection"
    ADD CONSTRAINT "FormSection_formId_fkey" FOREIGN KEY ("formId") REFERENCES public."Form"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Instructor Instructor_departmentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Instructor"
    ADD CONSTRAINT "Instructor_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES public."Department"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Link Link_topicId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Link"
    ADD CONSTRAINT "Link_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES public."Topic"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Topic Topic_parentTopicId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Topic"
    ADD CONSTRAINT "Topic_parentTopicId_fkey" FOREIGN KEY ("parentTopicId") REFERENCES public."ParentTopic"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: _FlowToTag _FlowToTag_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_FlowToTag"
    ADD CONSTRAINT "_FlowToTag_A_fkey" FOREIGN KEY ("A") REFERENCES public."Flow"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _FlowToTag _FlowToTag_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_FlowToTag"
    ADD CONSTRAINT "_FlowToTag_B_fkey" FOREIGN KEY ("B") REFERENCES public."Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _FlowToTopic _FlowToTopic_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_FlowToTopic"
    ADD CONSTRAINT "_FlowToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES public."Flow"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _FlowToTopic _FlowToTopic_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_FlowToTopic"
    ADD CONSTRAINT "_FlowToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES public."Topic"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _FormSectionToTopic _FormSectionToTopic_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_FormSectionToTopic"
    ADD CONSTRAINT "_FormSectionToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES public."FormSection"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _FormSectionToTopic _FormSectionToTopic_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_FormSectionToTopic"
    ADD CONSTRAINT "_FormSectionToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES public."Topic"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

