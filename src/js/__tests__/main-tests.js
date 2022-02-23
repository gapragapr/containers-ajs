import Team from '../main'
import ErrorRepository from '../errQuest'

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

test ('check err return', () => {
    const erRep = new ErrorRepository();

    const expected = 'Unknown error';
    const received = erRep.translate(777);

    expect(received).toBe(expected)
})

test ('check err return everyone', () => {
    const erRep = new ErrorRepository();

    const expected = 'Тебе 14, какие могут быть ошибки?';
    const received = erRep.translate(14);

    expect(received).toBe(expected)
})