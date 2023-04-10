
CREATE TABLE IF NOT EXISTS `Comments` (
  `ID` int(13) NOT NULL AUTO_INCREMENT,
  `Username` varchar(40) NOT NULL,
  `Description` text NOT NULL,
  `PostID` int(13) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

INSERT INTO `Comments` (`ID`, `Username`, `Description`, `PostID`) VALUES
(2, '@ivaivic', 'Prekrasno je bilo!!', 2),
(3, '@marijamaric', 'Ženi me', 4),
(4, '@markomarkic', 'Nogometna ikono', 4) ;
