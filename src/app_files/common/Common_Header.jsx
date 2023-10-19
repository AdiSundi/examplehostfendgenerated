import { Menu, Group, Center, Burger, Container, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import tcsLogo from './tcs-logo.svg';
import classes from './Common_Header.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const links = [
    { link: '/challenges', label: 'Challenges' },
    { link: '/solutions', label: 'Solutions' },
];

export default function Common_Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        // Set the state to the current path when component mounts
        setActive(window.location.pathname);
    }, []);
    const items = links.map((link) => {
        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                data-active={active === link.link ? true : undefined}
                onClick={(event) => { setActive(link.link); }}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <a href={"/"} onClick={(event) => {
                        navigate("/");
                    }}>
                        <Image src={tcsLogo} alt={"TCS logo"} height={45} />
                    </a>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </header>
    );
}