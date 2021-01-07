import { ProductsService } from './services/products.service';
import { UserService } from 'src/app/services/user.service';
import { AuthguardServiceService } from './authguard-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ListComponent } from './components/products/list/list.component';
import { CreateNewComponent } from './components/products/create-new/create-new.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    CreateNewComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthguardServiceService,
    UserService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
