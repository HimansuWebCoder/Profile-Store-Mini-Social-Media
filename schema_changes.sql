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
    comment character varying(300)
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
    image_url text
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
-- Name: likes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    profile_id integer
);


ALTER TABLE public.likes OWNER TO postgres;

--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.likes_id_seq OWNER TO postgres;

--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: profile_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profile_info (
    id integer NOT NULL,
    profile_id integer,
    name character varying(100) NOT NULL,
    headline character varying(1000)
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
    profile_id integer
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
    likes_count integer DEFAULT 0
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
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


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
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


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
-- Name: skills skills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (id);


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
-- Name: likes fk_profile; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes
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
-- Name: TABLE likes; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.likes TO profile_store_admin;


--
-- Name: SEQUENCE likes_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.likes_id_seq TO profile_store_admin;


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

