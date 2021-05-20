IF EXISTS(SELECT 1 FROM SYS.SYSFOREIGNKEY WHERE ROLE='FK_T_ROLE_M_REFERENCE_T_ROLE') THEN
    ALTER TABLE T_ROLE_MENU
       DELETE FOREIGN KEY FK_T_ROLE_M_REFERENCE_T_ROLE
END IF;

IF EXISTS(SELECT 1 FROM SYS.SYSFOREIGNKEY WHERE ROLE='FK_T_ROLE_M_REFERENCE_T_MENU') THEN
    ALTER TABLE T_ROLE_MENU
       DELETE FOREIGN KEY FK_T_ROLE_M_REFERENCE_T_MENU
END IF;

IF EXISTS(SELECT 1 FROM SYS.SYSFOREIGNKEY WHERE ROLE='FK_T_USER_R_REFERENCE_T_USER') THEN
    ALTER TABLE T_USER_ROLE
       DELETE FOREIGN KEY FK_T_USER_R_REFERENCE_T_USER
END IF;

IF EXISTS(SELECT 1 FROM SYS.SYSFOREIGNKEY WHERE ROLE='FK_T_USER_R_REFERENCE_T_ROLE') THEN
    ALTER TABLE T_USER_ROLE
       DELETE FOREIGN KEY FK_T_USER_R_REFERENCE_T_ROLE
END IF;

DROP TABLE IF EXISTS T_MENU;

DROP TABLE IF EXISTS T_ROLE;

DROP TABLE IF EXISTS T_ROLE_MENU;

DROP INDEX IF EXISTS T_USER.T_USER_INDEX;

DROP TABLE IF EXISTS T_USER;

DROP TABLE IF EXISTS T_USER_ROLE;

/*==============================================================*/
/* Table: T_MENU                                                */
/*==============================================================*/
CREATE TABLE T_MENU
(
   ID                   VARCHAR(20)                    NOT NULL,
   PARENTID             VARCHAR(20)                    NULL,
   NAME                 VARCHAR(128)                   NULL,
   URL                  VARCHAR(512)                   NULL,
   TYPE                 TINYINT(1)                     NULL,
   CONSTRAINT PK_T_MENU PRIMARY KEY CLUSTERED (ID)
);

/*==============================================================*/
/* Table: T_ROLE                                                */
/*==============================================================*/
CREATE TABLE T_ROLE
(
   ID                   VARCHAR(20)                    NOT NULL,
   NAME                 VARCHAR(30)                    NULL,
   CREATE_TIME          TIMESTAMP                      NULL,
   REMARK               VARCHAR(512)                   NULL,
   CONSTRAINT PK_T_ROLE PRIMARY KEY CLUSTERED (ID)
);

/*==============================================================*/
/* Table: T_ROLE_MENU                                           */
/*==============================================================*/
CREATE TABLE T_ROLE_MENU
(
   USER_ID              VARCHAR(20)                    NULL,
   MENU_ID              VARCHAR(20)                    NULL
);

/*==============================================================*/
/* Table: T_USER                                                */
/*==============================================================*/
CREATE TABLE T_USER
(
   ID                   VARCHAR(20)                    NOT NULL,
   ACCOUNT              VARCHAR(32)                    NULL,
   NAME                 VARCHAR(256)                   NULL,
   PASSWORD             VARCHAR(512)                   NULL,
   MOBILE               VARCHAR(15)                    NULL,
   EMAIL                VARCHAR(320)                   NULL,
   SEX                  TINYINT(1)                     NULL,
   DISABLED             TINYINT(1)                     NULL DEFAULT '0',
   STATUS               TINYINT(1)                     NULL DEFAULT '0',
   BIRTHDAY             DATE                           NULL,
   CREATE_TIME          TIMESTAMP                      NULL,
   UPDATE_TIME          TIMESTAMP                      NULL,
   CONSTRAINT PK_T_USER PRIMARY KEY CLUSTERED (ID)
);

/*==============================================================*/
/* Index: T_USER_INDEX                                          */
/*==============================================================*/
CREATE INDEX T_USER_INDEX ON T_USER (
ACCOUNT ASC,
MOBILE ASC
);

/*==============================================================*/
/* Table: T_USER_ROLE                                           */
/*==============================================================*/
CREATE TABLE T_USER_ROLE
(
   USER_ID              VARCHAR(20)                    NULL,
   ROLE_ID              VARCHAR(20)                    NULL
);

ALTER TABLE T_ROLE_MENU
   ADD CONSTRAINT FK_T_ROLE_M_REFERENCE_T_ROLE FOREIGN KEY (USER_ID)
      REFERENCES T_ROLE (ID)
      ON UPDATE RESTRICT
      ON DELETE RESTRICT;

ALTER TABLE T_ROLE_MENU
   ADD CONSTRAINT FK_T_ROLE_M_REFERENCE_T_MENU FOREIGN KEY (MENU_ID)
      REFERENCES T_MENU (ID)
      ON UPDATE RESTRICT
      ON DELETE RESTRICT;

ALTER TABLE T_USER_ROLE
   ADD CONSTRAINT FK_T_USER_R_REFERENCE_T_USER FOREIGN KEY (USER_ID)
      REFERENCES T_USER (ID)
      ON UPDATE RESTRICT
      ON DELETE RESTRICT;

ALTER TABLE T_USER_ROLE
   ADD CONSTRAINT FK_T_USER_R_REFERENCE_T_ROLE FOREIGN KEY (ROLE_ID)
      REFERENCES T_ROLE (ID)
      ON UPDATE RESTRICT
      ON DELETE RESTRICT;
