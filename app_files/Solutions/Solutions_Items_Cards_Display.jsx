import React, { useEffect, useState } from 'react';
import { IconCalendar, IconHeart } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
    rem,
    Pill,
    Space,
} from '@mantine/core';
import { IconLocationPin } from '@tabler/icons-react';
import classes from './Solutions_Items_Cards_Display.module.css';
import filipinoHackathonImage from './images_sustainathon/ribbon_Phillipines_hackaton.jpg';
import britishHackathonImage from './images_sustainathon/ribbon_UK_hackaton.jpg';
import southAfricaHackathonImage from './images_sustainathon/ribbon_SouthAfrica_hackaton.jpg';
import { useNavigate } from 'react-router-dom';

var solutionsData = [
    {
        "image": filipinoHackathonImage,
        "title": "Solution 1",
        "description": "Description of Solution 1",
        "tags": ["Technology 1", "Technology 2"],
        "difficulty": 4,
        "link": "/rate-solution"
    },
    {
        "image": britishHackathonImage,
        "title": "Solution 2",
        "description": "Description of Solution 2",
        "tags": ["Technology 3", "Technology 4"],
        "difficulty": 2,
        "link": "/rate-solution"
    },
    {
        "image": southAfricaHackathonImage,
        "title": "Solution 3",
        "description": "Description of Solution 3",
        "tags": ["Technology 5", "Technology 6"],
        "difficulty": 3,
        "link": "/rate-solution"
    }
]

function SolutionCard({ image, title, description, tags, difficulty, link }) {
    const tagElements = tags.map((tag) => (
        <Badge color="cyan" variant="light" key={tag}>
            {tag}
        </Badge>
    ));
    const navigate = useNavigate();

    return (
        <Card withBorder radius="xs" p="lg" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Text size="md" fz="lg" fw={500}>
                    {title}
                </Text>
                <Text size="sm">{difficulty}/5</Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Description
                </Text>
                <Text size="md" fz="sm" mt="xs">
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Technologies
                </Text>
                <Group spacing={7} mt={5}>
                    {tagElements}
                </Group>
            </Card.Section>

            <Button radius="md" style={{ marginTop: '10px' }} onClick={() => navigate(link)}>
                Rate Solution
            </Button>
        </Card>
    );
}

export default function Solutions_Items_Cards_Display() {
    const [solutions, setSolutions] = useState([]);

    useEffect(() => {
        setSolutions(solutionsData);
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {solutions.map((solution, index) => (
                <div style={{ maxWidth: '400px', margin: '10px' }} key={index}>
                    <SolutionCard {...solution} />
                </div>
            ))}
        </div>
    );
}