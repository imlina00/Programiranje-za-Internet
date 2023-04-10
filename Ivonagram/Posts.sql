SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

CREATE TABLE IF NOT EXISTS `Posts` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(250) NOT NULL,
  `ImageUrl` varchar(250) NOT NULL,
  `Description` text NOT NULL,
  `Liked` tinyint(1) NOT NULL DEFAULT '0',
  `Likes` int(11) NOT NULL DEFAULT '0',
  `Bookmarked` tinyint(1) NOT NULL DEFAULT '0',
  `Bookmarks` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

INSERT INTO `Posts` (`ID`, `Username`, `ImageUrl`, `Description`, `Liked`, `Likes`, `Bookmarked`, `Bookmarks`) VALUES
(2, '@ivaivic', 'images/zagreb.jpg', 'Advent u Zagrebu.', 1, 114, 0, 7),
(3, '@marijamaric', 'images/nyc.jpg', 'Hello NYC!', 1, 372, 1, 25),
(4, '@joskogvardiol', 'images/utakmica.jpg', 'Jedna s utakmice ⚽', 1, 63925, 1, 825),
(5, '@markomarkic', 'images/igrica.jpg', '#gamer #gamingset ', 0, 11, 0, 0);
-- (6, '@Svilaja', 'images/svilaja.jpg', 'Svilaja je planina u Dalmatinskoj Zagori, usporedna s višim sjevernijim lancem Dinara-Troglav. Pruža se smjerom sjeverozapad-jugoistok između Sinjskoga i Petrovog polja u dužini oko 30 km.', 0, 0, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
