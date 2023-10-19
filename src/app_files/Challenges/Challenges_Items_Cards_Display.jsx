
import React, { useEffect, useState } from 'react';
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
    Space,
} from '@mantine/core';
import myImage from './land1.jpeg';
import { IconLocationPin } from '@tabler/icons-react';
import classes from './Challenges_Items_Cards_Display.module.css';
import { useNavigate } from 'react-router-dom';

var challengesData = [
    {
        image: myImage,
        title: 'Challenge 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['React', 'JavaScript'],
        difficulty: 4,
        link: '/submit-my-solution',
    },
    {
        image: myImage,
        title: 'Challenge 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['Node.js', 'MongoDB'],
        difficulty: 3,
        link: '/submit-my-solution',
    },
    {
        image: myImage,
        title: 'Challenge 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['Python', 'Django'],
        difficulty: 2,
        link: '/submit-my-solution',
    },
];

function ChallengeCard({ image, title, description, tags, difficulty, link }) {
    const tagElements = tags.map((tag) => (
        <Badge key={tag} color="blue" variant="outline" style={{ marginRight: '4px' }}>
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
                <Text size="sm">{difficulty}/5 Difficulty</Text>
            </Card.Section>

            <Card.Section className={classes.section} mt="xs">
                <Text size="md" fz="sm" mt="xs">
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group mt="md">
                    {tagElements}
                </Group>
            </Card.Section>

            <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }} onClick={(event) => { navigate('/submit_my_solution'); }}>
                    Submit my solution
                </Button>
            </Group>
        </Card>
    );
}

export default function Challenges_Items_Cards_Display() {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        setChallenges(challengesData);
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {challenges.map((challenge, index) => (
                <div style={{ maxWidth: '400px', margin: '10px' }} key={index}>
                    <ChallengeCard {...challenge} />
                </div>
            ))}
        </div>
    );
}