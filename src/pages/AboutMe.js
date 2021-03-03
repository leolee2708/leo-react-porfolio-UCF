import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hi My name is Quan Ho Viet Le, but my friends call me Leo.</p>

                <p>I was born in Ho Chi Minh city, Vietnam. I graduated from Pacific
                University since 2015 with a Business Administration degree. I also have a ppl (private pilot license)
        with IFR (instrument) rated privilege.</p>

                <p>I am working on getting my commercial license after this pandemic
                past and hopefully soon. In the meantime, I would also like to explore other fields such as web
                development, hence
        Im currently enrolled as a full time student at Full Stack Web Development by UCF.</p>

                <p>My latest project, Dev Grub, is a cookbook for developers. You can check it out <a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

                <p>In my freetime, I'd love to go hiking with my dogs, play with my cat or be a gym rat.</p>
            </Content>
        </div>
    );

}

export default AboutPage;