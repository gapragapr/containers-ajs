import Team from '../main'

test ('check team func`s work', () => {
    const team = new Team();
    const membersArr = ['oleg', 'polina', 'vataliy', 'ivan', 'oleg', 'ivan'];

    membersArr.forEach(member =>  {
        team.add(member)
    })

    team.toArray();

    const expected = ['oleg', 'polina', 'vataliy', 'ivan'];
    const received = team.members;

    expect(received).toStrictEqual(expected);
})

test ('check team addAll func work', () => {
    const team = new Team();
    const membersArr = ['oleg', 'polina', 'vataliy', 'ivan', 'oleg', 'ivan', 'oleg', 'oleg', 'oleg'];

    membersArr.forEach(member =>  {
        team.addAll(member)
    })

    team.toArray();

    const expected = ['oleg', 'polina', 'vataliy', 'ivan'];
    const received = team.members;

    expect(received).toStrictEqual(expected);
})