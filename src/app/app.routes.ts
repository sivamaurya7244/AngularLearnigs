import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoMasterComponent } from './components/video-master/video-master.component';

export const routes: Routes = [
    {
        path: "user-page",
        component: UserComponent
    },
    {
        path: "admin-page",
        component: AdminComponent
    },
    {
        path: "data-binding",
        component: DataBindingComponent
    },
    {
        path: "control-flow",
        component: ControlFlowComponent

    },
    {
        path: "get-api",
        component: GetApiComponent
    },
    {
        path: "video",
        component: VideosComponent
    }
    ,
    {
        path: "video-master",
        component: VideoMasterComponent
    }
];
