json.set! @current_user.id do
    json.extract! @user_show, :show_id 
end