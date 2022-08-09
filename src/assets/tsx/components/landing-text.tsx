import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import '../../scss/landing-text.scss';

const LandingText = (props) => {
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
                    (COMING SOON) Explore our boom cards, teachers pay teachers, and favorite books and games. New resources are continually being added. Have a suggestion or game idea? Send us an email at <Link href="mailto:time4ot@therapysecure.com" underline="hover">time4ot@therapysecure.com</Link> or leave us some <Link href="https://forms.gle/sQGbyfJk3KhdLSDx8" target="_blank" underline="hover">feedback</Link>.
                </span>
            </Box>
            <Button size="medium" className="home-cta" variant="contained">
                <GatsbyLink to="/game-list">Get Started</GatsbyLink>
            </Button>
        </Box>
    );
}

export default LandingText;
