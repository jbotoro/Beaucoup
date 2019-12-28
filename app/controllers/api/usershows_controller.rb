class Api::UsershowsController < ApplicationController
     def create

        @current_user = current_user
        @user_show = UserShow.create(user_id: current_user[:id],show_id: params[:show_id])
        
        if @user_show.save
            render :show
        else
            render json: ["UserShow failed to save"], status: 401
        end
    end


    def destroy
        @current_user = current_user
        @user_show = UserShow.where("user_id = ? AND show_id = ?", current_user.id, params[:id]).first
      
        if @user_show
            @user_show.destroy
            render :show
        else
            render json: ["Failed to destroy UserShow"], status: 401
        end
    end
end
