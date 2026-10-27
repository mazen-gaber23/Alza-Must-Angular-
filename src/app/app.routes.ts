import { Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { GamesComponent } from './components/games/games.component';
import { HistoryComponent } from './components/history/history.component';
import { NotesComponent } from './components/notes/notes.component';
import { SelectFamilyGameComponent } from './components/select-family-game/select-family-game.component';
import { SurveyComponent } from './components/survey/survey.component';
import { TaskComponent } from './components/task/task.component';
import { TipsComponent } from './components/tips/tips.component';
import { TransportComponent } from './components/transport/transport.component';
import { LocationComponent } from './components/location/location.component';
import { FamilyComponent } from './components/family/family.component';
import { HomeComponent } from './components/home/home.component';
import { AcceptedComponent } from './components/accepted/accepted.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SocialComponent } from './components/social/social.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { CaregiverComponent } from './components/caregiver/caregiver.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AddFamilyComponent } from './components/add-family/add-family.component';
import { AddHistoryComponent } from './components/add-history/add-history.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';

export const routes: Routes = [
{path:'',component:AuthLayoutComponent,children:[
    {path:'',redirectTo:'start',pathMatch:'full'},
    {path:'start',component:StartComponent,title:'ALZA-MUST'},
    {path:'signup',component:SignupComponent,title:'Signup'},
    {path:'login',component:LoginComponent,title:'Login'},
    {path:'accepted',component:AcceptedComponent,title:'Accepted'}
]},
{path:'',component:MainLayoutComponent,children:[
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'family',component:FamilyComponent,title:'Family'},
    {path:'location',component:LocationComponent,title:'Location'},
    {path:'familyGame',component:GamesComponent,title:'Family Game'},
    {path:'history',component:HistoryComponent,title:'History'},
    {path:'notes',component:NotesComponent,title:'Notes'},
    {path:'selectFamilyGames',component:SelectFamilyGameComponent,title:'Games'},
    {path:'task',component:TaskComponent,title:'Task'},
    {path:'tips',component:TipsComponent,title:'Tips'},
    {path:'transport',component:TransportComponent,title:'Transport'},
    {path:'social',component:SocialComponent,title:'Social'},
]},
{path:'',component:AdminLayoutComponent,children:[
    {path:'caregiver',component:CaregiverComponent,title:'Caregiver'},
    {path:'survey',component:SurveyComponent,title:'Survey'},
    {path:'addPatient',component:AddPatientComponent,title:'Add Patient'},
    {path:'addFamily',component:AddFamilyComponent,title:'Add Family'},
    {path:'addHistory',component:AddHistoryComponent,title:'Add History'},
    {path:'addTask',component:AddTasksComponent,title:'Add Task'},


    
]},
{path:'**',component:NotfoundComponent,title:'Notfound 404'},
    
];
