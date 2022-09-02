import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { OutboundLink } from "gatsby-plugin-google-gtag"
import Link from '@mui/material/Link';
import '../../scss/landing-text.scss';

const LandingText = (props) => {
    const [firefoxWarning, setFirefoxWarning] = React.useState(<Box />);
    React.useEffect(() => {
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            setFirefoxWarning(
                <Box className="landing-text-box firefox">
                    <span className="landing-text-header">Quick note on your browser</span>
                    <span className="firefox-warning landing-text">
                        We noticed you are using Firefox! While we love that you value your privacy and are supporting open source software, we have noticed a few occasional bugs with some of the games and would recommend switching to Chrome, Safari, or Opera. Sorry for the inconvenience!
                    </span>
                </Box>
            );
        }
    });

    return (
        <Box id="landing-text-container" sx={{ flexGrow: 1 }}>
            <Box className="landing-text-box">
                <span className="landing-text-header">Who Are We?</span>
                <span className="who-we-are landing-text">
                    We are a board game website made by OTs for OTs. We know budgets and time can be tight for therapists wanting to provide fun and functional activities for their clients and wanted to provide free, no prep activities that will be engaging for a range of ages and goals.
                </span>
            </Box>

            <Box className="landing-text-box">
                <span className="landing-text-header">What's Included?</span>
                <span className="whats-included landing-text">
                    Multiple categories of board games from handwriting to social emotional. Games are kept intentionally simple to promote sustained attention and allow for easy upgrades and downgrades. Each game has four game pieces and a dice or spinner.
                </span>
            </Box>

            <Box className="landing-text-box">
                <span className="landing-text-header">Additional Resources:</span>
                <span className="additional-resources landing-text">
                    Explore our <OutboundLink href="https://wow.boomlearning.com/store/authorId/RtDwy8TZPrPhwd2pE/?collection=Decks&keyword=OT%20time&sort=score&order=-1" target="_blank"><Link underline="hover">boom cards</Link></OutboundLink>, <OutboundLink href="https://www.teacherspayteachers.com/Sellers-Im-Following/Add/Time4ot" target="_blank"><Link underline="hover">Teachers Pay Teachers</Link></OutboundLink>, and favorite <OutboundLink href="https://blog.time4ot.com/book-recommendations/" target="_blank"><Link underline="hover">books</Link></OutboundLink> and <OutboundLink href="https://blog.time4ot.com/school-based" target="_blank"><Link underline="hover">recommended supplies</Link></OutboundLink>. New resources are continually being added. Have a suggestion or game idea? Send us an email at <OutboundLink href="mailto:time4ot@therapysecure.com" target="_blank"><Link underline="hover">time4ot@therapysecure.com</Link></OutboundLink> or leave us some <OutboundLink href="https://forms.gle/sQGbyfJk3KhdLSDx8" target="_blank"><Link underline="hover">feedback</Link></OutboundLink>.
                </span>
            </Box>

            {firefoxWarning}
            <Button size="medium" className="home-cta" variant="contained">
                <GatsbyLink to="/game-list">Get Started</GatsbyLink>
            </Button>
        </Box>
    );
}

export default LandingText;
