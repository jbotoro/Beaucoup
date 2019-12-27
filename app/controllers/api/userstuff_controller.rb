class Api::UserstuffController < ApplicationController
    def create
     
        @current_user = current_user
        @user_stuff = Userstuff.create(user_id: current_user[:id],show_id: params[:show_id])
        if @user_stuff.save
            render :show
        else
            render json: ["MyStuff failed to save"], status: 401
        end
    end


    def destroy
        @current_user = current_user
        @user_stuff = Userstuff.where("user_id = ? AND show_id = ?", current_user.id, params[:id]).first
      
        if @user_stuff
            @user_stuff.destroy
            render :show
        else
            render json: ["Failed to destroy MyStuff"], status: 401
        end
        
    end
end
