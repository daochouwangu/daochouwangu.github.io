export class Team{
  constructor(name, league, group){
    this.name = name
    this.league = league 
    this.group = group
  }
  isSameLeague(team) {
    return this.league == team.league
  }
  isSameGroup(team) {
    return this.group == team.group
  }
  canMatch(team){
    return !isSameLeague(team) && !isSameGroup(team)
  }
}
