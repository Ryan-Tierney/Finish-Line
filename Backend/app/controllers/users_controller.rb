class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, only: [:id, :username, :levels_finished]
    end

    def show
        user = User.find(params[:id])
        render json: user, only: [:id, :username, :levels_finished]
    end

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id 
            render json: user, only: [:id, :username, :levels_finished]
        else
            render json: user.errors.full_messages
        end
    end

    def increase_level
        user = User.find_by(username: params[:username])
        if user 
            user.levels_finished = 1
            user.save
            render json: user, only: [:id, :username, :levels_finished]
        end
    end


    private 

    def user_params
        params.require(:user).permit(:username, :levels_finished)
    end
end
