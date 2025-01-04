--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Ubuntu 16.3-1.pgdg24.04+1)
-- Dumped by pg_dump version 16.3 (Ubuntu 16.3-1.pgdg24.04+1)

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
-- Name: about; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.about (
    id integer NOT NULL,
    profile_id integer,
    description character varying(1000)
);


ALTER TABLE public.about OWNER TO postgres;

--
-- Name: about_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.about_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.about_id_seq OWNER TO postgres;

--
-- Name: about_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.about_id_seq OWNED BY public.about.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    profile_id integer,
    comment character varying(300),
    image_id integer,
    profile_email text
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.comments_id_seq OWNER TO postgres;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: experiences; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.experiences (
    id integer NOT NULL,
    profile_id integer,
    experience text
);


ALTER TABLE public.experiences OWNER TO postgres;

--
-- Name: experiences_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.experiences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.experiences_id_seq OWNER TO postgres;

--
-- Name: experiences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.experiences_id_seq OWNED BY public.experiences.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.images (
    id integer NOT NULL,
    profile_id integer,
    image_url text,
    likes_count integer DEFAULT 0,
    public_id text
);


ALTER TABLE public.images OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.images_id_seq OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: languages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.languages (
    id integer NOT NULL,
    profile_id integer,
    language text
);


ALTER TABLE public.languages OWNER TO postgres;

--
-- Name: languages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.languages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.languages_id_seq OWNER TO postgres;

--
-- Name: languages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.languages_id_seq OWNED BY public.languages.id;


--
-- Name: profile_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profile_info (
    id integer NOT NULL,
    profile_id integer,
    name character varying(100) NOT NULL,
    headline character varying(1000),
    profile_email text
);


ALTER TABLE public.profile_info OWNER TO postgres;

--
-- Name: profile_info_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.profile_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.profile_info_id_seq OWNER TO postgres;

--
-- Name: profile_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.profile_info_id_seq OWNED BY public.profile_info.id;


--
-- Name: profile_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profile_links (
    id integer NOT NULL,
    profile_info_id integer,
    profile_id integer,
    portfolio_url text,
    github_url text,
    linkedin_url text,
    twitter_url text,
    instagram_url text,
    youtube_url text,
    facebook_url text
);


ALTER TABLE public.profile_links OWNER TO postgres;

--
-- Name: profile_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.profile_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.profile_links_id_seq OWNER TO postgres;

--
-- Name: profile_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.profile_links_id_seq OWNED BY public.profile_links.id;


--
-- Name: profile_photo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profile_photo (
    id integer NOT NULL,
    image text,
    profile_id integer,
    profile_email text
);


ALTER TABLE public.profile_photo OWNER TO postgres;

--
-- Name: profile_photo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.profile_photo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.profile_photo_id_seq OWNER TO postgres;

--
-- Name: profile_photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.profile_photo_id_seq OWNED BY public.profile_photo.id;


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profiles (
    id integer NOT NULL,
    email character varying(100) NOT NULL,
    likes_count integer DEFAULT 0,
    password character varying(8),
    google_id character varying,
    name character varying
);


ALTER TABLE public.profiles OWNER TO postgres;

--
-- Name: profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.profiles_id_seq OWNER TO postgres;

--
-- Name: profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.profiles_id_seq OWNED BY public.profiles.id;


--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    profile_id integer,
    project_url text
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.projects_id_seq OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: saved_posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.saved_posts (
    id integer NOT NULL,
    profile_id integer,
    saved_post text
);


ALTER TABLE public.saved_posts OWNER TO postgres;

--
-- Name: saved_posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.saved_posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.saved_posts_id_seq OWNER TO postgres;

--
-- Name: saved_posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.saved_posts_id_seq OWNED BY public.saved_posts.id;


--
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    sid text NOT NULL,
    isloggedin boolean DEFAULT false,
    profile_id integer,
    expire timestamp with time zone NOT NULL,
    data jsonb,
    sess jsonb
);


ALTER TABLE public.session OWNER TO postgres;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    sid character varying NOT NULL,
    sess jsonb NOT NULL,
    expire timestamp without time zone NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: skills; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.skills (
    id integer NOT NULL,
    profile_id integer,
    skill character varying(100) NOT NULL
);


ALTER TABLE public.skills OWNER TO postgres;

--
-- Name: skills_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.skills_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.skills_id_seq OWNER TO postgres;

--
-- Name: skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.skills_id_seq OWNED BY public.skills.id;


--
-- Name: about id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about ALTER COLUMN id SET DEFAULT nextval('public.about_id_seq'::regclass);


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: experiences id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experiences ALTER COLUMN id SET DEFAULT nextval('public.experiences_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: languages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.languages ALTER COLUMN id SET DEFAULT nextval('public.languages_id_seq'::regclass);


--
-- Name: profile_info id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_info ALTER COLUMN id SET DEFAULT nextval('public.profile_info_id_seq'::regclass);


--
-- Name: profile_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_links ALTER COLUMN id SET DEFAULT nextval('public.profile_links_id_seq'::regclass);


--
-- Name: profile_photo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_photo ALTER COLUMN id SET DEFAULT nextval('public.profile_photo_id_seq'::regclass);


--
-- Name: profiles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles ALTER COLUMN id SET DEFAULT nextval('public.profiles_id_seq'::regclass);


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Name: saved_posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saved_posts ALTER COLUMN id SET DEFAULT nextval('public.saved_posts_id_seq'::regclass);


--
-- Name: skills id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skills ALTER COLUMN id SET DEFAULT nextval('public.skills_id_seq'::regclass);


--
-- Data for Name: about; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.about (id, profile_id, description) FROM stdin;
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (id, profile_id, comment, image_id, profile_email) FROM stdin;
\.


--
-- Data for Name: experiences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.experiences (id, profile_id, experience) FROM stdin;
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.images (id, profile_id, image_url, likes_count, public_id) FROM stdin;
\.


--
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.languages (id, profile_id, language) FROM stdin;
\.


--
-- Data for Name: profile_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profile_info (id, profile_id, name, headline, profile_email) FROM stdin;
\.


--
-- Data for Name: profile_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profile_links (id, profile_info_id, profile_id, portfolio_url, github_url, linkedin_url, twitter_url, instagram_url, youtube_url, facebook_url) FROM stdin;
\.


--
-- Data for Name: profile_photo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profile_photo (id, image, profile_id, profile_email) FROM stdin;
\.


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profiles (id, email, likes_count, password, google_id, name) FROM stdin;
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, profile_id, project_url) FROM stdin;
3	\N	fullstack-profile-store.com
4	\N	fullstack-profile-store.com
\.


--
-- Data for Name: saved_posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.saved_posts (id, profile_id, saved_post) FROM stdin;
\.


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.session (sid, isloggedin, profile_id, expire, data, sess) FROM stdin;
oC4HlvVoIEV2BVQl8KFoOYJpjtstqdLu	f	\N	2024-11-24 13:42:58+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:12:37.683Z", "httpOnly": true, "originalMaxAge": 20000}, "passport": {"user": 80}}
IYOnC3Qo4IO5LC1oeg8y2HcljLH1PgTN	f	\N	2024-11-24 13:41:48+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:11:47.673Z", "httpOnly": true, "originalMaxAge": 20000}}
eZFhWXLt6vgVviw12qsjpxUUbEx3fyKc	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.758Z", "httpOnly": true, "originalMaxAge": 20000}}
NBd9cI4EQ8LCRpuowhYhWK5TWx77_-Up	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.807Z", "httpOnly": true, "originalMaxAge": 20000}}
QHUxnys1w32r7TwVFttrFCANhOH-hxsc	f	\N	2024-11-24 13:41:56+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:11:47.688Z", "httpOnly": true, "originalMaxAge": 20000}}
gsNPHgQokXB8b5JCk0IUzmQcpYn8FCSb	f	\N	2024-11-24 13:42:35+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:12:34.199Z", "httpOnly": true, "originalMaxAge": 20000}}
70fIzaAcljWUZn35Kb0hn-2bdDuX36SU	f	\N	2024-11-24 13:42:35+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:12:34.228Z", "httpOnly": true, "originalMaxAge": 20000}}
-kSaV-gpi1wGDfisL0f58AhCj4H5zn-x	f	\N	2024-11-24 13:42:35+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:12:34.215Z", "httpOnly": true, "originalMaxAge": 20000}}
XT52PPHKWtsSr4RFS2KVuYywEI9Fcr0n	f	\N	2024-11-24 13:44:17+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.853Z", "httpOnly": true, "originalMaxAge": 20000}}
QUVI5h55otvRCPcsrmK-hEbqAMwO8yVQ	f	\N	2024-11-24 13:43:16+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:12:58.267Z", "httpOnly": true, "originalMaxAge": 20000}}
5sZS1GQKFGK8ycKyNW6FgyS3KiNggyA3	f	\N	2024-11-24 13:43:38+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:26.514Z", "httpOnly": true, "originalMaxAge": 20000}}
YI-OD1hiapV0-Le7jlbWv99xo3v1gwOM	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.735Z", "httpOnly": true, "originalMaxAge": 20000}}
0BZdz-YNqM_LWaofwcwd42sheAnd0ctK	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.816Z", "httpOnly": true, "originalMaxAge": 20000}}
UoVT136XWfritsCZT8J7C7q5lOkP_d4L	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.761Z", "httpOnly": true, "originalMaxAge": 20000}}
AafXE83gstEgTbsEZ17e_1F41qG_DEWw	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.752Z", "httpOnly": true, "originalMaxAge": 20000}}
f2FKx5VL0MU4bfFhiMISFRWf3aS-A0Ty	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.776Z", "httpOnly": true, "originalMaxAge": 20000}}
qNlk6o6j9EzZKLN72WEf89hODxJq-I9g	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.754Z", "httpOnly": true, "originalMaxAge": 20000}}
QlGzsLyMGwhwcEVpkCxivTXkUi92FeU1	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.833Z", "httpOnly": true, "originalMaxAge": 20000}}
kRvMtHDPTppS3stBX4lnuknAUk64s2Vu	f	\N	2024-11-24 13:44:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:13:59.852Z", "httpOnly": true, "originalMaxAge": 20000}}
cM8aMayeIj5RJ2HPis_1u58d6DL0CGVd	f	\N	2024-11-24 13:51:27+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:21:06.892Z", "httpOnly": true, "originalMaxAge": 20000}}
TlZbtzUgmR42Aa3RS6-TPyuoHPaonaze	f	\N	2024-11-24 13:51:29+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:21:28.720Z", "httpOnly": true, "originalMaxAge": 20000}}
4LrSPpLpxJgqHh8iNDhZyfuNq8EtBJQi	f	\N	2024-11-24 13:51:29+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:21:28.722Z", "httpOnly": true, "originalMaxAge": 20000}}
eLOQKi9TCnShCfToer_6W8AWmudJKc9y	f	\N	2024-11-24 13:51:29+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:21:28.735Z", "httpOnly": true, "originalMaxAge": 20000}}
H7MylkwfjTSoWgzuDldiKEuDB2dl2reI	f	\N	2024-11-24 13:50:00+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:19:42.474Z", "httpOnly": true, "originalMaxAge": 20000}, "passport": {"user": 80}}
ghpli3P5vg9caha6T1aVMp74hbyJC1aJ	f	\N	2024-11-24 13:50:22+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:20:03.131Z", "httpOnly": true, "originalMaxAge": 20000}}
UuwaF-C3D9EzEppPc2qfj6iHI4j18Fkh	f	\N	2024-11-24 13:51:34+05:30	\N	{"cookie": {"path": "/", "secure": false, "expires": "2024-11-24T08:21:28.758Z", "httpOnly": true, "originalMaxAge": 20000}}
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (sid, sess, expire) FROM stdin;
1BpgGCSZMl49Yf9XemPquxG2g99JE4_m	{"name": "I am ram 10", "email": "ram10@gmail.com", "cookie": {"path": "/", "secure": false, "expires": "2024-11-14T01:20:17.678Z", "httpOnly": true, "originalMaxAge": 86400000}, "headline": "how", "userData": {"name": "I am ram 10", "email": "ram10@gmail.com", "image": null, "skill": "html", "comment": null, "headline": "I am ram", "language": null, "image_url": null, "experience": null, "github_url": null, "saved_post": null, "description": "description", "project_url": null, "twitter_url": null, "youtube_url": null, "facebook_url": null, "linkedin_url": null, "instagram_url": null, "portfolio_url": null}}	2024-11-14 07:38:53
\.


--
-- Data for Name: skills; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.skills (id, profile_id, skill) FROM stdin;
\.


--
-- Name: about_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.about_id_seq', 35, true);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_id_seq', 116, true);


--
-- Name: experiences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.experiences_id_seq', 1, false);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_id_seq', 131, true);


--
-- Name: languages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.languages_id_seq', 1, false);


--
-- Name: profile_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.profile_info_id_seq', 49, true);


--
-- Name: profile_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.profile_links_id_seq', 21, true);


--
-- Name: profile_photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.profile_photo_id_seq', 72, true);


--
-- Name: profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.profiles_id_seq', 83, true);


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 4, true);


--
-- Name: saved_posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.saved_posts_id_seq', 1, false);


--
-- Name: skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.skills_id_seq', 229, true);


--
-- Name: about about_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about
    ADD CONSTRAINT about_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: experiences experiences_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experiences
    ADD CONSTRAINT experiences_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: languages languages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (id);


--
-- Name: profile_info profile_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_info
    ADD CONSTRAINT profile_info_pkey PRIMARY KEY (id);


--
-- Name: profile_links profile_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_links
    ADD CONSTRAINT profile_links_pkey PRIMARY KEY (id);


--
-- Name: profile_photo profile_photo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_photo
    ADD CONSTRAINT profile_photo_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_email_key UNIQUE (email);


--
-- Name: profiles profiles_google_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_google_id_key UNIQUE (google_id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: saved_posts saved_posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saved_posts
    ADD CONSTRAINT saved_posts_pkey PRIMARY KEY (id);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (sid);


--
-- Name: skills skills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (id);


--
-- Name: comments comments_image_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_image_id_fkey FOREIGN KEY (image_id) REFERENCES public.images(id);


--
-- Name: comments comments_profile_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_profile_email_fkey FOREIGN KEY (profile_email) REFERENCES public.profiles(email);


--
-- Name: profile_links fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_links
    ADD CONSTRAINT fk_profile FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: about fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about
    ADD CONSTRAINT fk_profile FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: experiences fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experiences
    ADD CONSTRAINT fk_profile FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: images fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT fk_profile FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: projects fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT fk_profile FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: languages fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT fk_profile FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: comments fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT fk_profile FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: saved_posts fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saved_posts
    ADD CONSTRAINT fk_profile FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: profile_photo fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_photo
    ADD CONSTRAINT fk_profile FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: profile_links fk_profile_info; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_links
    ADD CONSTRAINT fk_profile_info FOREIGN KEY (profile_info_id) REFERENCES public.profile_info(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: profile_info profile_info; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_info
    ADD CONSTRAINT profile_info FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: profile_info profile_info_profile_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_info
    ADD CONSTRAINT profile_info_profile_email_fkey FOREIGN KEY (profile_email) REFERENCES public.profiles(email);


--
-- Name: profile_photo profile_photo_profile_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile_photo
    ADD CONSTRAINT profile_photo_profile_email_fkey FOREIGN KEY (profile_email) REFERENCES public.profiles(email);


--
-- Name: session session_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON DELETE SET NULL;


--
-- Name: skills skills_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: TABLE about; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.about TO profile_store_admin;


--
-- Name: SEQUENCE about_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.about_id_seq TO profile_store_admin;


--
-- Name: TABLE comments; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.comments TO profile_store_admin;


--
-- Name: SEQUENCE comments_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.comments_id_seq TO profile_store_admin;


--
-- Name: TABLE experiences; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.experiences TO profile_store_admin;


--
-- Name: SEQUENCE experiences_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.experiences_id_seq TO profile_store_admin;


--
-- Name: TABLE images; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.images TO profile_store_admin;


--
-- Name: SEQUENCE images_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.images_id_seq TO profile_store_admin;


--
-- Name: TABLE languages; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.languages TO profile_store_admin;


--
-- Name: SEQUENCE languages_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.languages_id_seq TO profile_store_admin;


--
-- Name: TABLE profile_info; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.profile_info TO profile_store_admin;


--
-- Name: SEQUENCE profile_info_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.profile_info_id_seq TO profile_store_admin;


--
-- Name: TABLE profile_links; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.profile_links TO profile_store_admin;


--
-- Name: SEQUENCE profile_links_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.profile_links_id_seq TO profile_store_admin;


--
-- Name: TABLE profile_photo; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.profile_photo TO profile_store_admin;


--
-- Name: SEQUENCE profile_photo_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.profile_photo_id_seq TO profile_store_admin;


--
-- Name: TABLE profiles; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.profiles TO profile_store_admin;


--
-- Name: SEQUENCE profiles_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.profiles_id_seq TO profile_store_admin;


--
-- Name: TABLE projects; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.projects TO profile_store_admin;


--
-- Name: SEQUENCE projects_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.projects_id_seq TO profile_store_admin;


--
-- Name: TABLE saved_posts; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.saved_posts TO profile_store_admin;


--
-- Name: SEQUENCE saved_posts_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.saved_posts_id_seq TO profile_store_admin;


--
-- Name: TABLE session; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.session TO profile_store_admin;


--
-- Name: TABLE sessions; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.sessions TO profile_store_admin;


--
-- Name: TABLE skills; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.skills TO profile_store_admin;


--
-- Name: SEQUENCE skills_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.skills_id_seq TO profile_store_admin;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO profile_store_admin;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO profile_store_admin;


--
-- PostgreSQL database dump complete
--

