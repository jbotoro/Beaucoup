class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 402
        end
    end

    def show
      @user = User.find_by_id(params[:id])
      
      unless @user
        render json: "User not found"
      else
        render 'api/users/show'
      end
    end

private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
